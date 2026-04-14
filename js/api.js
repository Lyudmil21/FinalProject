const URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMeals(search = "") {
    const res = await fetch(`${URL}/search.php?s=${search}`);
    const data = await res.json();
    return data.meals || [];
}

export async function getMealById(id) {
    const res = await fetch(`${URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
}