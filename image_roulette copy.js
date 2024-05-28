(function() {
    console.log("image_roulette.js import"); // Konsolenausgabe hinzufügen
    // Ihr JavaScript-Code hier
   
   
    function roulette(images,index){


    
        images[index.value].classList.add("show-1");
        images[index.value].classList.remove('show-4', 'show-3','show-2');
        index.value = (index.value + 1) % images.length;

        images[index.value].classList.add("show-2");
        images[index.value].classList.remove('show-1','show-4','show-3');
        index.value = (index.value + 1) % images.length;

        images[index.value].classList.add("show-3");
        images[index.value].classList.remove('show-2','show-1','show-4');
        index.value = (index.value + 1) % images.length;

        images[index.value].classList.add("show-4");
        images[index.value].classList.remove('show-3','show-2','show-1');

    }


    document.addEventListener('DOMContentLoaded', function() {
       
        window.addEventListener('load', function() {
            var images = this.document.querySelectorAll('.roulette-images img');

            [...this.document.getElementsByClassName("start")].forEach(element => {
                element.classList = [];
            });
           
            var index = {value:0};
            roulette(images,index)
            setInterval(() => roulette(images,index), 5000); // Ändere die Zeit in Millisekunden nach Bedarf (hier 3000ms = 3 Sekunden)
        });
    });
})();