console.log("IK WIL KAAAAS");
const cardContainer = document.querySelector(".card-container");

fetch("/kaas").then(myData => myData.json()).then(jsonData => showCheese(jsonData));

function showCheese(kaas) {
    console.log(kaas);

let htmlCode="";
for (let i = 0; i < kaas.length; i++) {
    const cheese = kaas[i];
    htmlCode += createCard(cheese);
    
}
cardContainer.innerHTML += htmlCode;
}

function createCard(cheese) {

    const card = `
    <div class="card">
    <h2>${cheese.name}</h2>
    <p>${cheese.description}</p>
    </div>`;
    return card;
}