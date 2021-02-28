const refreshButton = document.querySelector('#txt-button');
const outputDiv = document.querySelector('#output-div');
const outputDiv2 = document.querySelector('#output-div-two');


const apiURL = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";



// function errorHandler(error) {
//     console.log("error occured ", error);
//     alert("error")
// }

// function getJokes() {
//     fetch(apiURL)
//         .then(response => response.json())
//         .then(json => {
//             if (json.type === 'single') {
//                 const outputText = json.joke;
//                 outputDiv.innerText = outputText;
//                 outputDiv2.innerText = "";
//             } else {
//                 const outputText = json.setup;
//                 outputDiv.innerText = outputText;
//                 outputDiv2.innerText = json.delivery;
//             }
//             console.log("joke type: ", json.type);

//         })
//         .catch(errorHandler);
// }

const getJokes = async () => {
    try{
    const response = await fetch(apiURL);
    const json = await response.json();
    if (json.type === 'single') {
        const outputText = json.joke;
        outputDiv.innerText = outputText;
        outputDiv2.innerText = "";
    } else {
        const outputText = json.setup;
        outputDiv.innerText = outputText;
        outputDiv2.innerText = json.delivery;
    }
    console.log("joke type: ", json.type);

    }catch(error){
        console.log("error occured ", error);
        alert("error")
    }
}




getJokes();
refreshButton.addEventListener("click", getJokes);