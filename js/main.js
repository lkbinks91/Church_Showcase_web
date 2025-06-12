// Initialize Bootstrap carousel
const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
    interval: 5000,
    ride: true
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        navbar.style.opacity = '0.95';
    } else {
        navbar.classList.remove('bg-white');
        navbar.style.opacity = '1';
    }
});

// Donation button click handler
document.querySelectorAll('.donation-btn, .btn-outline-light').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Merci pour votre générosité ! Le système de don sera bientôt disponible.');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


