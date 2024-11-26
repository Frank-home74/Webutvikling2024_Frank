document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('.banner-container figure');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const breadcrumbs = document.getElementById('breadcrumbs'); // Velg brødsmule-stien

    let currentIndex = 0;

    function showFigure(index) {
        figures.forEach((figure, i) => {
            figure.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : figures.length - 1;
        showFigure(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < figures.length - 1) ? currentIndex + 1 : 0;
        showFigure(currentIndex);
    });

    // Vis det første bildet ved oppstart
    showFigure(currentIndex);

    // Sjekk URL-parameter for visning av brødsmule-sti
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('show-breadcrumbs')) {
        breadcrumbs.style.display = 'flex'; // Vis brødsmule-stien hvis parameteren er til stede
    }
});