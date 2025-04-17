// Function to simulate checking food health (for example purpose)
function checkFoodHealth(foodName) {
    const foodData = {
        "apple": {
            health: "Healthy",
            nutrition: "52 kcal per 100g",
            ingredients: "Apple",
            energy: "52 kcal"
        },
        "burger": {
            health: "Unhealthy",
            nutrition: "295 kcal per 100g",
            ingredients: "Bun, beef patty, lettuce, tomato, cheese",
            energy: "295 kcal"
        }
    };
    return foodData[foodName.toLowerCase()] || {
        health: "Unknown",
        nutrition: "Data not available",
        ingredients: "N/A",
        energy: "N/A"
    };
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', () => {
    const foodName = document.getElementById('food-name').value;
    if (foodName) {
        const result = checkFoodHealth(foodName);
        document.getElementById('food-info').innerHTML = `
            Health Status: ${result.health}<br>
            Nutrition: ${result.nutrition}<br>
            Ingredients: ${result.ingredients}<br>
            Energy: ${result.energy}
        `;
        document.getElementById('results').classList.remove('hidden');
    } else {
        alert("Please enter a food name.");
    }
});