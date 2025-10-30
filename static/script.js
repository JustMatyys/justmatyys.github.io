// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add particle effect to cursor
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#667eea';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.transition = 'all 1s ease-out';
    particle.style.opacity = '1';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'translateY(50px) scale(0)';
    }, 10);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Add hover sound effect preparation (visual feedback)
const datapackCards = document.querySelectorAll('.datapack-card');
datapackCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.datapack-card, .info-card').forEach(el => {
    observer.observe(el);
});

// Add typing effect to welcome text (optional enhancement)
const welcomeText = document.querySelector('.welcome-text');
if (welcomeText) {
    const text = welcomeText.textContent;
    welcomeText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            welcomeText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Dynamic gradient background shift
let hue = 0;
setInterval(() => {
    hue = (hue + 0.5) % 360;
    document.body.style.filter = `hue-rotate(${hue * 0.1}deg)`;
}, 100);

console.log('Welcome to JustSMP! 🎮');
