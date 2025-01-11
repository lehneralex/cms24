function loadGallery(){
    if(!document.location.href.endsWith("galerie")){
        return;
    }

    hoverGalleryItem();
}



function hoverGalleryItem() {
    let galleryImages = document.querySelectorAll(".custom-gallery-image");

    for (let galleryImage of galleryImages) {
        galleryImage.addEventListener("mouseover", function (e) {
            let galleryButton = e.target.parentElement.querySelector(".news-picture-description");
            galleryButton.classList.add("hover-news-button");
        })
        galleryImage.addEventListener("mouseout", function (e) {
            let galleryButton = e.target.parentElement.querySelector(".news-picture-description");
            galleryButton.classList.remove("hover-news-button");
        })
    }
}
