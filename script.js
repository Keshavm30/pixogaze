document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent!");
    });

    // Smooth scrolling
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(event.target.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
