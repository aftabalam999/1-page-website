let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
    
});

let cartBtn = document.querySelector('.cart-btn');
cartCount = document.querySelector('.badge');
cartBtn.addEventListener('click', function () {
    cartCount.innerHTML = parseInt(cartCount.innerHTML) + 1;
});