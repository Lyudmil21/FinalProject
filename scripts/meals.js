import { getMeals } from "/scripts/api.js";
import { openModal } from "/scripts/modal.js";
import { observer } from "/scripts/observer.js";

const mealList = document.getElementById("mealList");

export async function loadMeals(search = "") {
    const meals = await getMeals(search);
    renderMeals(meals);
}

function renderMeals(meals, animate = true) {
    mealList.innerHTML = "";

    meals.forEach((meal, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="card ${animate ? "reveal" : ""}">
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}">
                <p>${meal.strCategory || ""}</p>
            </div>
        `;

        const card = li.querySelector(".card");

        card.addEventListener("click", () => {
            openModal(meal.idMeal, index, meals);
        });

        mealList.appendChild(li);

        if (animate) {
            observer.observe(card);
            card.style.transitionDelay = `${index * 0.02}s`;
        } else {
            card.classList.add("show"); 
        }
    });
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    loadMeals(value);
});