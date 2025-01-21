const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.getAttribute('data-section');

        sections.forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(targetSection).classList.add('active');
    });
});

const contactIcon = document.querySelector('.contact-icon');
const contactLink = document.querySelector('.icon-container a');

contactLink.setAttribute('href', 'https://example.com');
contactIcon.addEventListener('click', () => {
    alert('You clicked the contact icon!');
});
