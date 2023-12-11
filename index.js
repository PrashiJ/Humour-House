const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = 'J6eUZwpVp/8wrDAAzRGS5A==8CWroktuPGT9BNnq'

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    jokeEl.innerText = "Updating....";
    btnEl.disabeled = true;
    btnEl.innerText = "Loading.....";

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabeled = false;
    btnEl.innerText = "Tell me a joke!";

    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke)