function addToCart() {
    document.querySelector('#shipping-form').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

function searchProducts() {
    const query = document.getElementById('search-bar').value;
    // Implement your search logic here
    alert('You searched for: ' + query);
}
