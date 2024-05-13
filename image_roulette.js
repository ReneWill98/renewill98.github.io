(function() {
    console.log("image_roulette.js import"); // Konsolenausgabe hinzufügen
    // Ihr JavaScript-Code hier
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('load', function() {
            var images = document.querySelectorAll('.roulette-images img');
            var index = 0;
            var interval = setInterval(function () {
                images[index].classList.remove('show');
                images[index].classList.add('hide');
                index = (index + 1) % images.length;
                images[index].classList.remove('hidden');
                images[index].classList.add('show');
                if(images.length > 2){
                    images[(index + 1) % images.length].classList.remove('hide');
                    images[(index + 1) % images.length].classList.add('hidden');
                }
            }, 5000); // Ändere die Zeit in Millisekunden nach Bedarf (hier 3000ms = 3 Sekunden)
        });
    });
})();