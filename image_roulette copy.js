(function() {
    console.log("image_roulette.js import"); // Konsolenausgabe hinzufügen
    // Ihr JavaScript-Code hier
    document.addEventListener('DOMContentLoaded', function() {
       
        window.addEventListener('load', function() {
            var images = document.querySelectorAll('.roulette-images img');
            console.log(images);
            var index = 0;
            
            var interval = setInterval(function () {

                
                images[index].classList.add("show-1");
                images[index].classList.remove('show-4', 'show-3','show-2');
                index = (index + 1) % images.length;

                images[index].classList.add("show-2");
                images[index].classList.remove('show-1','show-4','show-3');
                index = (index + 1) % images.length;

                images[index].classList.add("show-3");
                images[index].classList.remove('show-2','show-1','show-4');
                index = (index + 1) % images.length;

                images[index].classList.add("show-4");
                images[index].classList.remove('show-3','show-2','show-1');

               

                

                
                
                
            }, 5000); // Ändere die Zeit in Millisekunden nach Bedarf (hier 3000ms = 3 Sekunden)
        });
    });
})();