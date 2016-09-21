var leftArrow = document.querySelector(".previous");
var rightArrow = document.querySelector(".next");

leftArrow.addEventListener("click", previousImage);
rightArrow.addEventListener("click", nextImage);

var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
var image3 = document.querySelector("#image3");
var image4 = document.querySelector("#image4");



function nextImage(){
    if(image1.classList.contains("visible")){
        image1.classList.remove("visible");
        image1.classList.add("invisible");
        image2.classList.remove("invisible");
        image2.classList.add("visible");
    }
    else if(image2.classList.contains("visible")){
        image2.classList.remove("visible");
        image2.classList.add("invisible");
        image3.classList.remove("invisible");
        image3.classList.add("visible");
    }
    else if(image3.classList.contains("visible")){
        image3.classList.remove("visible");
        image3.classList.add("invisible");
        image4.classList.remove("invisible");
        image4.classList.add("visible");
    }
    else if(image4.classList.contains("visible")){
        image4.classList.remove("visible");
        image4.classList.add("invisible");
        image1.classList.remove("invisible");
        image1.classList.add("visible");
    }
}

function previousImage(){
    if(image1.classList.contains("visible")){
        image1.classList.remove("visible");
        image1.classList.add("invisible");
        image4.classList.remove("invisible");
        image4.classList.add("visible");
    }
    else if(image2.classList.contains("visible")){
        image2.classList.remove("visible");
        image2.classList.add("invisible");
        image1.classList.remove("invisible");
        image1.classList.add("visible");
    }
    else if(image3.classList.contains("visible")){
        image3.classList.remove("visible");
        image3.classList.add("invisible");
        image2.classList.remove("invisible");
        image2.classList.add("visible");
    }
    else if(image4.classList.contains("visible")){
        image4.classList.remove("visible");
        image4.classList.add("invisible");
        image3.classList.remove("invisible");
        image3.classList.add("visible");
    }
}