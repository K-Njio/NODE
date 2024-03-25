const cardContainer = document.querySelector(".card-container");

fetch("/steen")
    .then(myData => myData.json())
    .then(jsonData => showStones(jsonData));

function showStones(stones) {
    console.log(stones);
        
    let htmlCode = "";
    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];
        htmlCode += createCard(stone);
    }

    cardContainer.innerHTML = htmlCode;
}

function createCard(cheese) {
    const card = `
    <div class="card">
    <h2>${cheese.title}</h2>
    <p>${cheese.description}</p>
</div>
    `
    return card;
}