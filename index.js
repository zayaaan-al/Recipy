// 
async function fetchdata() {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    const recipes = data.recipes;
    console.log(recipes);

    let str = '';
    recipes.forEach((rec) => {
      str += `
        <div class="card">
          <a href="./details.html?id=${rec.id}">
            <img class="img1" src="${rec.image}" alt="${rec.name}" />
            <div class="card-content">
              <h2>${rec.name}</h2>
              <p><strong>Meal Type:</strong> ${rec.mealType.join(', ')}</p>
              <p><strong>Prep Time:</strong> ${rec.prepTimeMinutes} mins</p>
              <p><strong>Calories:</strong> ${rec.caloriesPerServing}</p>
              <p><strong>Rating:</strong> ${rec.rating}</p>
            </div>
          </a>
        </div>
      `;
    });

    document.getElementById("container").innerHTML = str;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("container").innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
  }
}

fetchdata();
