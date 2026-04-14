import { getMeals } from "/js/api.js";
import { openModal } from "/js/modal.js";
import { observer } from "/js/observer.js";

const mealList = document.getElementById("mealList");

export async function loadMeals(search = "") {
    const meals = await getMeals(search);
    renderMeals(meals);
}

function renderMeals(meals) {
    mealList.innerHTML = "";

    meals.forEach((meal, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="card reveal">
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

        observer.observe(card);
        card.style.transitionDelay = `${index * 0.03}s`;
    });
}