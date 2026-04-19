export function initMenuToggle() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            hamburger.classList.remove("active");
        });
    });
}