document.querySelectorAll('.header-reservation-button').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'  // Параметр плавной прокрутки
            });
        }
    });
});