function toggleIngredients(ingredientId) {
    const ingredientsList = document.getElementById(ingredientId);
    if (ingredientsList.style.display === "none" || ingredientsList.style.display === "") {
        ingredientsList.style.display = "block"; // Show ingredients
    } else {
        ingredientsList.style.display = "none"; // Hide ingredients
    }
}