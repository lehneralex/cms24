function loadVorstandSlider() {
    if(!document.location.href.endsWith("ueber-uns") && !document.location.href.endsWith("about-us")){
        return;
    }

    // selektiere alle Bilder von Vorstand
    let vorstandImages = document.querySelectorAll(".vorstand-image");
    // Bilder durchgehen
    for (let vorstandImage of vorstandImages) {
        // füge eventlistener hinzu wenn man mit Maus über Bild fährt
        vorstandImage.addEventListener("mouseover", function (e) {
           // hole vom Bild das parent element und selektiere davon das Overlay mit Klasse vorstand-overlay
            // und entferne CSS Klasse hidden, also wird das Overlay angezeigt (text)
            e.target.parentElement.querySelector(".vorstand-overlay").classList.remove("hidden");
        });
        // füge eventlistener hinzu wenn man mit Maus wieder aus Bild fährt
        vorstandImage.addEventListener("mouseout", function (e) {
           // hole vom Bild das parent element und selektiere davon das Overlay mit Klasse vorstand-overlay
            // und füge die CSS Klasse hidden hinzu, damit das overlay nicht mehr angezeigt wird (Originalzustand)
            e.target.parentElement.querySelector(".vorstand-overlay").classList.add("hidden");
        });

    }
    // füge eventlistener für rechts- und links Scrollen auf Button hinzu
    document.querySelector("#scrollRightButton").addEventListener("click", scrollRight);
    document.querySelector("#scrollLeftButton").addEventListener("click", scrollLeft);
}

// index der mitzählt, auf welcher Seite man ist (wie oft man auf Button klickt)
let currentIndex = 0;
function scrollRight(){
    // Bilderbreite wird mit 235 definiert (imagewidth + gap)
    let imageWidth = 235;
    // selektiere alle Bilder mit Klasse vorstand-iamges
    let images = document.querySelectorAll(".vorstand-image");
    // wenn index kleiner ist als Bilderanzahl - 5 (es sollen 5 Bilder am Schluss angezeigt werden)
    if(currentIndex < images.length-5){
        // selektiere den linken Button und mach ihn klickbar
        document.querySelector("#scrollLeftButton").disabled = false;
        // index um 1 erhöhen, da man nach rechts scrollt
        currentIndex++;
        // scroll Methode mit imagewdith (wie weit muss man nach rechts gehen) und aktuellem index aufrufen
        scroll(imageWidth, currentIndex);
    } else {
        // ansonsten mache den rechten Button nicht mehr klickbar, da man sich ganz rechts befindet
        document.querySelector("#scrollRightButton").disabled = true;
    }
}

function scrollLeft(){
    // bilderbreite wird mit 235 definiert (imagewidth + gap)
    let imageWidth = 235;
    // wenn currentIndex nicht 0 ist, also wenn ich nicht ganz am Anfang bin, kann man nach links klicken
    if (currentIndex != 0){
        // selektiere element mit id scrollRightButton (nach rechts button) - den button kann man klicken
        document.querySelector("#scrollRightButton").disabled = false;
        // verringere index weil man nach links klickt
        currentIndex--;
        // scroll methode aufrufen mit aktuellem index und bilderbreite, damit ich weiß
        // um wieviel es sich verschiebt
        scroll(imageWidth, currentIndex);
    } else {
        // ansonsten (wenn ich ganz links bin), kann man nach links button nicht mehr klicken
        document.querySelector("#scrollLeftButton").disabled = true;
    }
}

function scroll(imageWidth, currentIndex){
    // um wieviel soll sich ganzes element verschieben (nach links oder rechts), offset braucht immer minus-wert
    let offset = -currentIndex * imageWidth;
    // auf slider wird style transform hinzugefügt mit wert translateX
    // transform braucht wert von typ string, translateX braucht immer nummer + einheit deswegen offset
    // wenn bild auf -200 ist und danach ist offset auf -100 wird bild wieder nach rechts verschoben da es auf
    // 100 zurückgeht
    document.querySelector(".all-images-slider").style.transform = "translateX("+offset+"px)";
}

