function loadComponents() {
    loadComponent("contact.html","contact");
    console.log("contact.html import"); // Konsolenausgabe hinzufügen
    loadComponent("home.html","home");
    console.log("home.html import"); // Konsolenausgabe hinzufügen
}

function loadComponent(html, goalID){
    const zielElement = document.getElementById(goalID);
    if (!zielElement) {
        console.error(`Element mit der ID "${zielId}" nicht gefunden.`);
        return;
    }

    // Erstellen Sie ein neues XMLHttpRequest-Objekt
    const xhr = new XMLHttpRequest();

    // Konfigurieren Sie die Anfrage
    xhr.open('GET', html, true); // 'inhalt.html' ist der Pfad zu Ihrer Inhaltsdatei

    // Definieren Sie, was passiert, wenn die Anfrage erfolgreich ist
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Der Inhalt wurde erfolgreich geladen
            zielElement.innerHTML = xhr.responseText;
        } else {
            // Es gab ein Problem mit der Anfrage
            console.error('Fehler beim Laden des Inhalts: ' + xhr.status);
        }
    };

    // Definieren Sie, was passiert, wenn ein Fehler auftritt
    xhr.onerror = function () {
        console.error('Fehler beim Laden des Inhalts');
    };

    // Senden Sie die Anfrage
    xhr.send();
}