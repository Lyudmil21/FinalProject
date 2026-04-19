import { loadMeals } from "/scripts/meals.js";
import { setupModalNavigation } from "/scripts/modal.js";
import { setupForm } from "/scripts/form.js";
import { initSearch } from "/scripts/search.js";
import { initNavigation } from "/scripts/navigation.js";
import { initMenuToggle } from "/scripts/menuToggle.js";
import { initObserver } from "/scripts/observerInit.js";

function initApp() {
    loadMeals();
    setupForm();
    setupModalNavigation();
    initSearch();
    initNavigation();
    initMenuToggle();
    initObserver();
}

initApp();