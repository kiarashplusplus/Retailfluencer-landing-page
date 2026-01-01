/* ==========================================================================
   Retailfluencer Landing Page - JavaScript
   Animations, form handling, and interactive effects
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
    initScrollAnimations();
    initCountUp();
    initFormHandling();
    initMagneticButtons();
});

/* --------------------------------------------------------------------------
   Navigation Scroll Effect
   -------------------------------------------------------------------------- */
function initNavScroll() {
    const nav = document.getElementById('nav');
    let lastScrollY = 0;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}

/* --------------------------------------------------------------------------
   Scroll Animations (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* --------------------------------------------------------------------------
   Count Up Animation
   -------------------------------------------------------------------------- */
function initCountUp() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target);
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(target * easedProgress);

            // Format number
            let formattedValue;
            if (counter.dataset.raw === 'true') {
                formattedValue = currentValue.toString();
            } else if (target >= 1000000) {
                formattedValue = (currentValue / 1000000).toFixed(1) + 'M';
            } else if (target >= 1000) {
                formattedValue = (currentValue / 1000).toFixed(target >= 10000 ? 0 : 1) + 'K';
            } else {
                formattedValue = currentValue.toString();
            }

            counter.textContent = prefix + formattedValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

/* --------------------------------------------------------------------------
   Form Handling
   -------------------------------------------------------------------------- */
function initFormHandling() {
    const forms = document.querySelectorAll('.waitlist-form');

    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const button = form.querySelector('.btn-submit');
    const email = form.querySelector('input[type="email"]').value;

    if (!email) return;

    // Add loading state
    button.classList.add('loading');
    button.disabled = true;

    try {
        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success handling
        if (form.id === 'waitlist-form') {
            // Hero form - show success message
            form.style.display = 'none';
            const successMessage = document.getElementById('success-message');
            successMessage.classList.add('show');

            // Add confetti effect
            createConfetti();
        } else {
            // CTA form - show inline success
            const inputGroup = form.querySelector('.input-group');
            inputGroup.innerHTML = `
                <div class="inline-success">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>You're on the list!</span>
                </div>
            `;
            inputGroup.style.justifyContent = 'center';
            inputGroup.style.padding = '1.5rem';
        }

        // Log for demo purposes
        console.log('Waitlist signup:', email);

    } catch (error) {
        console.error('Form submission error:', error);
        button.classList.remove('loading');
        button.disabled = false;
    }
}

/* --------------------------------------------------------------------------
   Confetti Effect
   -------------------------------------------------------------------------- */
function createConfetti() {
    const colors = ['#7c3aed', '#a855f7', '#10b981', '#f59e0b', '#ffffff'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: 40%;
                left: 50%;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                pointer-events: none;
                z-index: 9999;
                animation: confetti-fall 3s ease-out forwards;
            `;

            const angle = (Math.random() * 360) * (Math.PI / 180);
            const velocity = 100 + Math.random() * 200;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity - 300;

            confetti.style.setProperty('--vx', `${vx}px`);
            confetti.style.setProperty('--vy', `${vy}px`);

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }

    // Add confetti keyframes if not present
    if (!document.getElementById('confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confetti-fall {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--vx), calc(var(--vy) + 800px)) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/* --------------------------------------------------------------------------
   Magnetic Button Effect
   -------------------------------------------------------------------------- */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

/* --------------------------------------------------------------------------
   Smooth Scroll for Anchor Links
   -------------------------------------------------------------------------- */
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

/* --------------------------------------------------------------------------
   Parallax Effect for Hero Background
   -------------------------------------------------------------------------- */
(function initParallax() {
    const heroOrbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        heroOrbs.forEach((orb, index) => {
            const speed = index === 0 ? 0.3 : 0.2;
            orb.style.transform = `translateX(-50%) translateY(${scrollY * speed}px)`;
        });
    }, { passive: true });
})();

/* --------------------------------------------------------------------------
   Cursor Glow Effect (Desktop Only)
   -------------------------------------------------------------------------- */
(function initCursorGlow() {
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-glow';
        cursor.style.cssText = `
            position: fixed;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%);
            pointer-events: none;
            z-index: 0;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        let cursorVisible = false;

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            if (!cursorVisible) {
                cursor.style.opacity = '1';
                cursorVisible = true;
            }
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorVisible = false;
        });
    }
})();
