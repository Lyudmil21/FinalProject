import { getMealById } from "/scripts/api.js";

const modal = document.getElementById("mealModal");
const title = document.getElementById("modalTitle");
const img = document.getElementById("modalImg");
const instructions = document.getElementById("modalInstructions");

let currentIndex = 0;
let mealsCache = [];

export function setupModalNavigation() {

    document.getElementById("prevMeal").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showMeal(mealsCache[currentIndex]);
        }
    });

    document.getElementById("nextMeal").addEventListener("click", () => {
        if (currentIndex < mealsCache.length - 1) {
            currentIndex++;
            showMeal(mealsCache[currentIndex]);
        }
    });
}

export async function openModal(id, index, allMeals = []) {

     if (allMeals.length) {
        mealsCache = allMeals;
    }

    currentIndex = index;

    let meal;

    if (mealsCache[index]) {
        meal = mealsCache[index];
    } else {
        meal = await getMealById(id);
    }

    showMeal(meal);

    modal.classList.add("show");
}

function showMeal(meal) {
    title.textContent = meal.strMeal;
    img.src = meal.strMealThumb;
    instructions.textContent = meal.strInstructions;
}

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});