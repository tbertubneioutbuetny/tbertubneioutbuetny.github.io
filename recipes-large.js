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

// ===== Drinks Rendering + Search =====
window.drinks = [
  {
    name: "Iced Mocha",
    category: "Coffee",
    ingredients: ["Espresso", "Milk", "Chocolate Syrup", "Ice Cubes"],
    instructions: "Brew espresso, mix with milk and syrup, pour over ice."
  },
  {
    name: "Classic Lemonade",
    category: "Citrus Drink",
    ingredients: ["Lemons", "Water", "Sugar", "Ice"],
    instructions: "Squeeze lemons, mix juice with water and sugar, serve chilled."
  },
  {
    name: "Strawberry Smoothie",
    category: "Smoothie",
    ingredients: ["Strawberries", "Banana", "Milk", "Honey"],
    instructions: "Blend all ingredients until smooth. Serve cold."
  },
  {
    name: "Iced Chai Latte",
    category: "Tea",
    ingredients: ["Chai Tea", "Milk", "Ice", "Cinnamon"],
    instructions: "Brew strong chai, chill, pour over ice, top with milk and cinnamon."
  }
];

let filteredDrinks = window.drinks;

function renderDrinks(drinksList) {
  const list = document.getElementById('drinks-list');
  if (!list) return;

  if (drinksList.length === 0) {
    list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No drinks found.</p>';
    return;
  }

  list.innerHTML = drinksList.map(drink => `
    <div class="recipe-card">
      <h4>${drink.name}</h4>
      <p><strong>${drink.category}</strong></p>
      <p><strong>Ingredients:</strong></p>
      <ul>${drink.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      <p><strong>Instructions:</strong> ${drink.instructions}</p>
    </div>
  `).join('');
}

function searchDrinks(query) {
  if (!query.trim()) {
    filteredDrinks = window.drinks;
  } else {
    const lowerQuery = query.toLowerCase();
    filteredDrinks = window.drinks.filter(d => d.name.toLowerCase().includes(lowerQuery));
  }
  renderDrinks(filteredDrinks);
}

// ===== DOM Events =====
document.addEventListener('DOMContentLoaded', function() {
  const recipesNav = document.querySelector('a[href="#recipes"]');
  const recipesSection = document.getElementById('recipes');
  const drinksNav = document.querySelector('a[href="#drinks"]');
  const drinksSection = document.getElementById('drinks');
  const searchBox = document.getElementById('search-box');
  const drinksSearchBox = document.getElementById('drinks-search-box');

  if (recipesNav && recipesSection) {
    recipesNav.addEventListener('click', function(e) {
      e.preventDefault();
      recipesSection.style.display = 'block';
      drinksSection.style.display = 'none';
      renderRecipes(filteredRecipes);
      recipe
