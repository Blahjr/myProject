// Handle form submission
document.getElementById('payment-form').addEventListener('submit', function(event){
    event.preventDefault();

        alert('Your Payment has been confirmed, Thank you for doing business with us. Contact Us for more information');

        document.getElementById('payment-form').reset();
});