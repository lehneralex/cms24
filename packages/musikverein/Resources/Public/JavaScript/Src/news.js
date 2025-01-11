function loadNewsSlider(){
    if(!document.location.href.endsWith("home") && !document.location.href.endsWith("jugend")){
        return;
    }

    document.querySelector("#news-right-button").addEventListener("click", scrollRightNews);
    document.querySelector("#news-left-button").addEventListener("click", scrollLeftNews);
    hoverNewsItem();
}

function scrollRightNews() {
    let imageWidth = 435;
    let images = document.querySelectorAll(".news-item-media");
    if(currentIndex < images.length-2){
        document.querySelector("#news-left-button").disabled = false;
        currentIndex++;
        scroll(imageWidth, currentIndex);
    } else {
        document.querySelector("#news-right-button").disabled = true;
    }
}

function scrollLeftNews() {
    let imageWidth = 435;
    let images = document.querySelectorAll(".news-item-media");
    if(currentIndex != 0){
        document.querySelector("#news-right-button").disabled = false;
        currentIndex--;
        scroll(imageWidth, currentIndex);
    } else {
        document.querySelector("#news-left-button").disabled = true;
    }
}

function hoverNewsItem() {
    let newsImages = document.querySelectorAll(".news-item-media");

    for (let newsImage of newsImages) {
        newsImage.addEventListener("mouseover", function (e) {
            let newsButton = e.target.parentElement.parentElement.querySelector(".news-picture-description");
            newsButton.classList.add("hover-news-button");
        })
        newsImage.addEventListener("mouseout", function (e) {
            let newsButton = e.target.parentElement.parentElement.querySelector(".news-picture-description");
            newsButton.classList.remove("hover-news-button");
        })
    }
}
