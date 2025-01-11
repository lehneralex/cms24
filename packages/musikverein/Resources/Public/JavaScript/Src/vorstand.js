function loadVorstandSlider() {
    if(!document.location.href.endsWith("ueber-uns")){
        return;
    }

    let vorstandImages = document.querySelectorAll(".vorstand-image");

    for (let vorstandImage of vorstandImages) {
        vorstandImage.addEventListener("mouseover", function (e) {
            e.target.parentElement.querySelector(".vorstand-overlay").classList.remove("hidden");
        });
        vorstandImage.addEventListener("mouseout", function (e) {
            e.target.parentElement.querySelector(".vorstand-overlay").classList.add("hidden");
        });

    }
    document.querySelector("#scrollRightButton").addEventListener("click", scrollRight);
    document.querySelector("#scrollLeftButton").addEventListener("click", scrollLeft);
}

let currentIndex = 0;
function scrollRight(){
    let imageWidth = 235;
    let images = document.querySelectorAll(".vorstand-image");
    if(currentIndex < images.length-5){
        document.querySelector("#scrollLeftButton").disabled = false;
        currentIndex++;
        scroll(imageWidth, currentIndex);
    } else {
        document.querySelector("#scrollRightButton").disabled = true;
    }
}

function scrollLeft(){
    let imageWidth = 235;
    let images = document.querySelectorAll(".vorstand-image");
    if (currentIndex != 0){
        document.querySelector("#scrollRightButton").disabled = false;
        currentIndex--;
        scroll(imageWidth, currentIndex);
    } else {
        document.querySelector("#scrollLeftButton").disabled = true;
    }
}

function scroll(imageWidth, currentIndex){
    let offset = -currentIndex * imageWidth;
    document.querySelector(".all-images-slider").style.transform = "translateX("+offset+"px)";
}

