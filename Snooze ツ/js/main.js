//Defilement
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    let prevScrollPos = window.pageYOffset;
    const scrollThreshold = window.innerHeight * 0.7; // Ajustez le seuil de défilement ici (70vh)

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > scrollThreshold) {
            if (prevScrollPos > currentScrollPos) {
                // L'utilisateur fait défiler vers le haut, montrez le header
                header.style.top = '0';
            } else {
                // L'utilisateur fait défiler vers le bas, masquez le header
                header.style.top = '-100px'; // Vous pouvez ajuster cette valeur pour contrôler la hauteur du masquage
            }
        } else {
            // Le défilement est en haut de la page, montrez le header
            header.style.top = '0';
        }

        prevScrollPos = currentScrollPos;
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const loadingBar = document.getElementById('loading-bar');
    const currentTimeDisplay = document.getElementById('current-time');

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const totalMinutesInHour = 60;
    const totalHoursInDay = 24;

    const progress = (hours / totalHoursInDay) * 100 + (minutes / totalMinutesInHour / totalHoursInDay) * 100;

    loadingBar.style.height = `${progress}%`;

    const progressHeight = loadingBar.style.height;
    const currentTimeHeight = (parseInt(progressHeight) - 5) + '%'; // Décalage de 3%

    currentTimeDisplay.innerText = `${hours}:${minutes}`;
    currentTimeDisplay.style.top = currentTimeHeight;
});
