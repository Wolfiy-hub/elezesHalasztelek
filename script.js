// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    // Any shared JavaScript functionality
    console.log('elezesHalasztelek loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});