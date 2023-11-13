document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const cardDescription = this.parentElement.querySelector('.card-description');
            cardDescription.style.display = (cardDescription.style.display === 'none' || cardDescription.style.display === '') ? 'block' : 'none';
        });
    });
});
