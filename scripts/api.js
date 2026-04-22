const URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMeals(search = "") {
    try {
        const res = await fetch(`${URL}/search.php?s=${search}`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.meals || [];

    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
}

export async function getMealById(id) {
    try {
        const res = await fetch(`${URL}/lookup.php?i=${id}`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.meals ? data.meals[0] : null;

    } catch (error) {
        console.error("Error fetching meal by ID:", error);
        return null;
    }
}