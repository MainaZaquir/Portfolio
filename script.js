document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

document.getElementById('testimonial-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const testimonial = document.querySelector('#testimonial-form textarea').value;
    const testimonialContainer = document.querySelector('.testimonial-container');

    const testimonialCard = document.createElement('div');
    testimonialCard.classList.add('testimonial-card');
    testimonialCard.textContent = testimonial;
    testimonialContainer.appendChild(testimonialCard);

    document.querySelector('#testimonial-form textarea').value = '';
});

document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
        });
    });
});

new QRCode(document.getElementById('qr-code'), {
    text: 'mailto:mzaquir58@gmailcom',
    width: 128,
    height: 128,
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log('Response:', response); 
        if (response.ok) {
            alert('Message sent!');
            this.reset();
        } else {
            alert('Oops! Something went wrong.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
});

const ctx = document.getElementById('skills-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Flask', 'SQL', 'MongoDB', 'Docker', 'Kubernetes', 'Jenkins', 'Google Cloud', 'Python', 'Git'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25],
            backgroundColor: 'rgba(245, 75, 100, 0.8)',
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});