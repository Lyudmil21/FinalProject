import { loadMeals } from "/scripts/meals.js";

export function initSearch() {
    const searchBtn = document.getElementById("searchBtn");
    const resetBtn = document.getElementById("resetBtn");
    const searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        loadMeals(query);
    });

    resetBtn.addEventListener("click", () => {
        searchInput.value = "";
        loadMeals();
    });

    searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    loadMeals(value);
    });
}