export function initNavigation() {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            header.style.background = "rgba(15, 15, 15, 0.9)";
            header.style.backdropFilter = "blur(10px)";
        } else {
            header.style.background = "linear-gradient(90deg, #0f0f0f, #1f1f1f)";
            header.style.backdropFilter = "none";
        }

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}