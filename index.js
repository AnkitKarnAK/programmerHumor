var refreshButton=document.querySelector('#txt-button');
var outputDiv=document.querySelector('#output-div');
var outputDiv2=document.querySelector('#output-div-two');


var apiURL="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";



function errorHandler(error){
    console.log("error occured ",error);
    alert("error")
}

function getJokes(){
    fetch(apiURL)
    .then(response => response.json())
    .then(json => {
        if(json.type==='single'){
            var outputText=json.joke;
            outputDiv.innerText= outputText;
            outputDiv2.innerText="";
        }else{
            var outputText=json.setup;
            outputDiv.innerText= outputText;
            outputDiv2.innerText=json.delivery;
        }
        console.log("joke type: ",json.type);
        
    })
    .catch(errorHandler);
}



function clickHandler(){
    
    getJokes();
}


getJokes();

refreshButton.addEventListener("click",clickHandler)
