
 
async function fetchRecipeDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
   
  if (!id) {
    document.getElementById("detailsContainer").innerHTML = "<p>Recipe ID is missing.</p>";
    return;
  }

  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await res.json();

    document.getElementById("detailsContainer").innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h2>${recipe.name}</h2>
      <p><strong>Meal Type:</strong> ${recipe.mealType.join(', ')}</p>
      <p><strong>Prep Time:</strong> ${recipe.prepTimeMinutes} mins</p>
      <p><strong>Calories:</strong> ${recipe.caloriesPerServing}</p>
      <p><strong>Rating:</strong> ${recipe.rating}</p>
      
      <h3>🧂 Ingredients:</h3>
      <ul>
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>

      <h3>👨‍🍳 Instructions:</h3>
      <p>${recipe.instructions}</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("detailsContainer").innerHTML = "<p>Failed to load recipe details.</p>";
  }
}

fetchRecipeDetails();
