import {
    colorsStatus
} from './const.js'

const cardCharacter = (name, urlImg, status, location, species) => {
    return `
        <div class="card">
            <div class="mainInfo">
           <span class="nameStyle">${name}</span> 
           <div class="status" style="background: ${colorsStatus[status]}"></div> ${status}
            </div>
            <img class="imgCard" src="${urlImg}">
            <div class="position">
                <span class="descriptionText">Last known location:</span>
                <span>${location}</span>
                <span class="descriptionText">Species:</span>
                <span>${species}</span>
            </div>
        </div>
    `;
}

export {
    cardCharacter
}