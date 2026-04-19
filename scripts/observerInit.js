import { observer } from "/scripts/observer.js";

export function initObserver() {
    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
}