// JavaScript to toggle the mobile navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Contact Javascript functionality 
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Your Message has been sent!');
});
