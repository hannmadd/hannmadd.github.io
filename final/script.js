function openMenu() {
    document.getElementById("mobileNav").style.display = "block";
}

function closeMenu() {
    document.getElementById("mobileNav").style.display = "none";
}
// Scroll-based animation for products
const products = document.querySelectorAll('.product');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

products.forEach(product => observer.observe(product));
