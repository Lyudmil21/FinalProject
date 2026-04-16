import { loadMeals } from "/js/meals.js";
import { setupModalNavigation } from "/js/modal.js";
import { setupForm } from "/js/form.js";
import { observer } from "/js/observer.js";

const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const searchInput = document.getElementById("searchInput");

loadMeals();
setupForm();
setupModalNavigation();

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    loadMeals(query);
});

resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    loadMeals();
});


const header = document.getElementById("header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a"); 

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navLinks"); 

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.style.background = "rgba(15, 15, 15, 0.9)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "linear-gradient(90deg, #0f0f0f, #1f1f1f)";
        header.style.backdropFilter = "none";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";
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