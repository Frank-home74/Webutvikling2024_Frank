document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('.banner-container figure');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showFigure(index) {
        figures.forEach((figure, i) => {
            figure.classList.toggle('active', i === index);
        });
        console.log(`Viser bilde: ${index}`); // Logg for å se hvilket bilde som vises
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : figures.length - 1;
        console.log('Forrige knapp klikket');
        showFigure(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < figures.length - 1) ? currentIndex + 1 : 0;
        console.log('Neste knapp klikket');
        showFigure(currentIndex);
    });

    // Vis det første bildet ved oppstart
    showFigure(currentIndex);
});