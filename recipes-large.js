// === Dessert Recipes ===
// 100+ pre-built recipes - instant load
const allRecipesData = [
  { name: "Chocolate Chip Cookies", ingredients: ["2 cups flour", "1 tsp baking soda", "1 cup butter", "3/4 cup sugar", "2 eggs", "2 cups chocolate chips"], instructions: ["Preheat to 375°F", "Mix dry ingredients", "Beat butter and sugar", "Add eggs", "Add flour mix", "Fold in chips", "Bake 9-11 min"] },
  { name: "Brownies", ingredients: ["3/4 cup cocoa", "1/2 cup flour", "1/2 cup butter", "1 cup sugar", "2 eggs", "1 tsp vanilla"], instructions: ["Preheat to 350°F", "Mix cocoa and flour", "Melt butter", "Mix with sugar and eggs", "Combine all", "Bake 25-30 min"] },
  // ... all your other desserts (unchanged)
];

// Expose recipes globally so site.js can use them
window.recipes = allRecipesData;

// ===== Recipe rendering + search =====
let allRecipes = allRecipesData;
let filteredRecipes = allRecipesData;
let recipesLoaded = true;

function renderRecipes(recipes) {
  const list = document.getElementById('recipe-list');
  if (!list) return;

  if (recipes.length === 0) {
    list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No recipes found.</p>';
    return;
  }

  list.innerHTML = recipes.map(recipe => `
    <div class="recipe-card">
      <h4>${recipe.name}</h4>
      <p><strong>Dessert</strong> • 30 min • Serves 4-6</p>
      <p><strong>Ingredients:</strong></p>
      <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      <p><strong>Instructions:</strong></p>
      <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
    </div>
  `).join('');
}

function searchRecipes(query) {
  if (!query.trim()) {
    filteredRecipes = allRecipes;
  } else {
    const lowerQuery = query.toLowerCase();
    filteredRecipes = allRecipes.filter(r => r.name.toLowerCase().includes(lowerQuery));
  }
  renderRecipes(filteredRecipes);
}

