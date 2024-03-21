console.log("IK WIL KAAAAS");

fetch("/kaas").then(myData => myData.json()).then(jsonData => showInConsole(jsonData));

function showInConsole(jsonData) {
    console.log(jsonData);
}

