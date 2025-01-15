function loadGallery(){
    if(!document.location.href.endsWith("galerie")){
        return;
    }

    hoverGalleryItem();
}



function hoverGalleryItem() {
    // selektiere alle Bilder mit Klasse custom-gallery-image
    let galleryImages = document.querySelectorAll(".custom-gallery-image");

    // gehe bilder durch und füge mouse-over und mouse-out event-listener hinzu
    for (let galleryImage of galleryImages) {
        galleryImage.addEventListener("mouseover", function (e) {
            // gehe zu parent element und suche darin nach Elementen mit Klasse .news-picture-description
            let galleryButton = e.target.parentElement.querySelector(".news-picture-description");
            // füge css klasse hinzu für Hover-effekt
            galleryButton.classList.add("hover-news-button");
        })

        galleryImage.addEventListener("mouseout", function (e) {
            // gehe zu parent element und suche darin nach Elementen mit klasse .news-picture-description
            let galleryButton = e.target.parentElement.querySelector(".news-picture-description");
            // entferne css klasse - für Normalzustand
            galleryButton.classList.remove("hover-news-button");
        })
    }
}
