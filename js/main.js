import {
    cardCharacter
} from './tempates.js'
import {
    mainWrapper
} from './selectors.js'


async function main() {
    const arrCharacters = await fetch('https://rickandmortyapi.com/api/character/')
        .then(data => data.json())
        .then(data => data.results);
    console.log(arrCharacters)
    getInfo(arrCharacters);
}
main()

async function getInfo(characters) {

    let character = await Promise.allSettled(characters.map((item) => getLocation(item.location.url)));

    let createCharacter = characters.map((item, index) => {
        console.log(character[index].value)
        if (character[index].value === undefined) {
            character[index].value = "unknown"
        }
        return cardCharacter(item.name, item.image, item.status, character[index].value, item.species);

    });

    mainWrapper.innerHTML = createCharacter.join('');
}

function getLocation(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => data.name)

}