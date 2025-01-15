function loadNewsSlider(){
    if(!document.location.href.endsWith("home") && !document.location.href.endsWith("jugend")
        && !document.location.href.endsWith("start") && !document.location.href.endsWith("youth-section" )){

        return;
    }

    // füge auf news-left und news-right button einen click-eventlistener mit
    // jeweiliger funktion scrollRightNews oder scrollLeftNews
    document.querySelector("#news-right-button").addEventListener("click", scrollRightNews);
    document.querySelector("#news-left-button").addEventListener("click", scrollLeftNews);

    hoverNewsItem();
}

function scrollRightNews() {
    // größe, um die man nach rechts verschiebt (imagewidth + gap)
    let imageWidth = 435;
    let images = document.querySelectorAll(".news-item-media");
    // currentIndex = hier bin ich gerade (wie oft man auf den button klicken kann)
    // wenn Index kleiner als Anzahl der Bilder - 2 ist, soll man nicht mehr nach rechts scrollen können
    // (wegen minus zwei werden am Ende zwei bilder nicht angezeigt, sondern nur 1)
    if(currentIndex < images.length-2){
        // wenn Index kleiner als Anzahl der Bilder - 2 ist, kann man "links" button wieder klicken
        document.querySelector("#news-left-button").disabled = false;
        // erhöhe Index weil man um ein Element nach rechts geht
        currentIndex++;
        // scroll Methode aufrufen mit aktuellem Index und Bilderbreite, damit ich weiß
        // um wieviel sich der Slider sich verschiebt
        scroll(imageWidth, currentIndex);
    } else {
        // ansonsten (wenn ich ganz rechts bin) kann man nicht weiter nach rechts gehen - nicht mehr klickbar
        document.querySelector("#news-right-button").disabled = true;
    }
}

function scrollLeftNews() {
    // Größe, um die man nach links verschiebt (imagewidth + gap)
    let imageWidth = 435;
    // wenn currentIndex nicht 0 ist, also wenn ich nicht ganz am Anfang bin, kann man nach links klicken
    if(currentIndex != 0){
        // selektiere Element mit id news-right-button (nach rechts button) - den button kann man klicken
        document.querySelector("#news-right-button").disabled = false;
        // verringere index weil man nach links klickt
        currentIndex--;
       // scroll Methode aufrufen mit aktuellem Index und Bilderbreite, damit ich weiß
        // um wieviel sich der Slider verschiebt
        scroll(imageWidth, currentIndex);
    } else {
        // ansonsten (wenn ich ganz links bin), kann man nicht weiter nach links gehen - nicht mehr klickbar
        document.querySelector("#news-left-button").disabled = true;
    }
}

function hoverNewsItem() {
    // selektiere alle bilder mit Klasse news-item-media
    let newsImages = document.querySelectorAll(".news-item-media");

    // gehe die Bilder durch
    for (let newsImage of newsImages) {
        // hover-Effekt auf Button, wenn man mit Maus darüber fährt
        newsImage.addEventListener("mouseover", function (e) {
            // man geht von Bild auf parent und dann wieder auf parent und darin suche ich
            // Element mit Klasse news-picture-description (button)
            let newsButton = e.target.parentElement.parentElement.querySelector(".news-picture-description");
            // auf Button wird CSS Klasse hinzugefügt für Hover-Effekt
            newsButton.classList.add("hover-news-button");
        })
        // normaler Zustand wenn man mit Maus wieder aus dem Bild fährt
        newsImage.addEventListener("mouseout", function (e) {
            // man geht vom Bild auf parent und dann wieder auf parent und darin suche ich
            // Element mit Klasse news-picture-description (button)
            let newsButton = e.target.parentElement.parentElement.querySelector(".news-picture-description");
            // CSS Klasse mit Hover-Effekt wird von Button entfernt
            newsButton.classList.remove("hover-news-button");
        })
    }
}
