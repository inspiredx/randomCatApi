const button = document.querySelector(".gradient-button");
const image = document.querySelector(".image");
const url = "https://aws.random.cat/meow";

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json(); 
        
        image.src = data.file;
    } catch(error) {
        console.log(error);
    }

}

fetchHandler();

button.addEventListener("click", () => {
    let isLoaded = image.ariaAutoComplete;
    if(isLoaded = true) {
        fetchHandler();
    }
})


