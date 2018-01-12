function createImage(source){
    let img = document.createElement("img");
    img.className = "gallery-item";
    img.src = source;
    document.getElementById("gallery").appendChild(img);
}

function populateGrid(counter = 25){
    for (let i = 0; i < counter; ++i) {
        createImage("https://source.unsplash.com/random?" + i);
    }
}

populateGrid();