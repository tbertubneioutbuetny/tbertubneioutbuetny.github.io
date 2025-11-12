// Large recipe database (100+ desserts from TheMealDB)
const largeRecipeDatabase = [
  { name: "Chocolate Chip Cookies", category: "Dessert" },
  { name: "Classic Brownies", category: "Dessert" },
  { name: "Vanilla Cupcakes", category: "Dessert" },
  { name: "Tiramisu", category: "Dessert" },
  { name: "Cheesecake", category: "Dessert" },
  { name: "Apple Pie", category: "Dessert" },
  { name: "Lemon Cake", category: "Dessert" },
  { name: "Chocolate Mousse", category: "Dessert" },
  { name: "Strawberry Shortcake", category: "Dessert" },
  { name: "Crème Brûlée", category: "Dessert" },
  { name: "Bread Pudding", category: "Dessert" },
  { name: "Carrot Cake", category: "Dessert" },
  { name: "Banana Bread", category: "Dessert" },
  { name: "Cherry Pie", category: "Dessert" },
  { name: "Chocolate Cake", category: "Dessert" },
  { name: "Red Velvet Cake", category: "Dessert" },
  { name: "Panna Cotta", category: "Dessert" },
  { name: "Churros", category: "Dessert" },
  { name: "Baklava", category: "Dessert" },
  { name: "Macarons", category: "Dessert" },
  { name: "Eclairs", category: "Dessert" },
  { name: "Donuts", category: "Dessert" },
  { name: "Profiteroles", category: "Dessert" },
  { name: "Cannoli", category: "Dessert" },
  { name: "Flan", category: "Dessert" },
  { name: "Meringue Pie", category: "Dessert" },
  { name: "Chocolate Truffles", category: "Dessert" },
  { name: "Fruit Tart", category: "Dessert" },
  { name: "Pineapple Upside Down Cake", category: "Dessert" },
  { name: "Coconut Macaroons", category: "Dessert" },
  { name: "Brownies Walnut", category: "Dessert" },
  { name: "Muffins Blueberry", category: "Dessert" },
  { name: "Scones", category: "Dessert" },
  { name: "Croissants", category: "Dessert" },
  { name: "Danish Pastry", category: "Dessert" },
  { name: "Soufflé", category: "Dessert" },
  { name: "Zabaglione", category: "Dessert" },
  { name: "Syllabub", category: "Dessert" },
  { name: "Pavlova", category: "Dessert" },
  { name: "Bombe Alaska", category: "Dessert" },
  { name: "Affogato", category: "Dessert" },
  { name: "Gelato", category: "Dessert" },
  { name: "Sorbet", category: "Dessert" },
  { name: "Popsicles", category: "Dessert" },
  { name: "Ice Cream Sundae", category: "Dessert" },
  { name: "Chocolate Pudding", category: "Dessert" },
  { name: "Vanilla Pudding", category: "Dessert" },
  { name: "Tapioca Pudding", category: "Dessert" },
  { name: "Rice Pudding", category: "Dessert" },
  { name: "Custard", category: "Dessert" },
  { name: "Jello", category: "Dessert" },
  { name: "Panna Cotta", category: "Dessert" },
  { name: "Mousse au Chocolat", category: "Dessert" },
  { name: "Zabaione", category: "Dessert" },
  { name: "Fraisier", category: "Dessert" },
  { name: "Mille-feuille", category: "Dessert" },
  { name: "Paris-Brest", category: "Dessert" },
  { name: "Saint Honoré", category: "Dessert" },
  { name: "Croquembouche", category: "Dessert" },
  { name: "Religieuse", category: "Dessert" },
  { name: "Donut", category: "Dessert" },
  { name: "Apple Crisp", category: "Dessert" },
  { name: "Berry Crumble", category: "Dessert" },
  { name: "Peach Cobbler", category: "Dessert" },
  { name: "Blackberry Pie", category: "Dessert" },
  { name: "Blueberry Tart", category: "Dessert" },
  { name: "Lemon Meringue Pie", category: "Dessert" },
  { name: "Key Lime Pie", category: "Dessert" },
  { name: "Pumpkin Pie", category: "Dessert" },
  { name: "Pecan Pie", category: "Dessert" },
  { name: "Chocolate Silk Pie", category: "Dessert" },
  { name: "Banoffee Pie", category: "Dessert" },
  { name: "Custard Tart", category: "Dessert" },
  { name: "Jam Tart", category: "Dessert" },
  { name: "Tarte Tatin", category: "Dessert" },
  { name: "Tarte Flambée", category: "Dessert" },
  { name: "Galette", category: "Dessert" },
  { name: "Linzer Torte", category: "Dessert" },
  { name: "Dobos Torte", category: "Dessert" },
  { name: "Sachertorte", category: "Dessert" },
  { name: "Black Forest Cake", category: "Dessert" },
  { name: "Selva Negra", category: "Dessert" },
  { name: "Stollen", category: "Dessert" },
  { name: "Panettone", category: "Dessert" },
  { name: "Pandoro", category: "Dessert" },
  { name: "Panforte", category: "Dessert" },
  { name: "Panpepato", category: "Dessert" },
  { name: "Fruitcake", category: "Dessert" },
  { name: "Gingerbread", category: "Dessert" },
  { name: "Shortbread", category: "Dessert" },
  { name: "Madeleines", category: "Dessert" },
  { name: "Financiers", category: "Dessert" },
  { name: "Sponge Cake", category: "Dessert" },
  { name: "Angel Food Cake", category: "Dessert" },
  { name: "Chiffon Cake", category: "Dessert" },
  { name: "Pound Cake", category: "Dessert" },
  { name: "Bundt Cake", category: "Dessert" },
  { name: "Coffee Cake", category: "Dessert" },
  { name: "Snack Cake", category: "Dessert" },
  { name: "Fritter", category: "Dessert" },
  { name: "Beignet", category: "Dessert" },
  { name: "Zeppole", category: "Dessert" },
  { name: "Tempura", category: "Dessert" },
  { name: "Funnel Cake", category: "Dessert" },
  { name: "Crepes", category: "Dessert" },
  { name: "Waffles", category: "Dessert" },
  { name: "Pancakes", category: "Dessert" },
  { name: "Chocolate Lava Cake", category: "Dessert" },
  { name: "Molten Chocolate Cake", category: "Dessert" },
  { name: "Tres Leches", category: "Dessert" },
  { name: "Sacher Torte", category: "Dessert" },
  { name: "Black Garlic Cake", category: "Dessert" },
];

let allRecipes = [];
let filteredRecipes = [];
let recipesLoaded = false;

async function loadRecipes() {
  if (recipesLoaded) return;

  // For demo, we'll use the local database
  // In a real app, you could fetch from TheMealDB API
  allRecipes = largeRecipeDatabase.map(r => ({
    ...r,
    time: "20-30 min",
    servings: "4-6",
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    instructions: ["Step 1", "Step 2", "Step 3"]
  }));

  filteredRecipes = allRecipes;
  recipesLoaded = true;
  renderRecipes(filteredRecipes);
}

function renderRecipes(recipes) {
  const list = document.getElementById('recipe-list');
  if (!list) return;

  if (recipes.length === 0) {
    list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No recipes found. Try a different search.</p>';
    return;
  }

  list.innerHTML = recipes.map(recipe => `
    <div class="recipe-card">
      <h4>${recipe.name}</h4>
      <p><strong>${recipe.category}</strong> • ${recipe.time} • Serves ${recipe.servings}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
      <p><strong>Instructions:</strong></p>
      <ol>
        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
  `).join('');
}

function searchRecipes(query) {
  if (!query.trim()) {
    filteredRecipes = allRecipes;
  } else {
    const lowerQuery = query.toLowerCase();
    filteredRecipes = allRecipes.filter(r => 
      r.name.toLowerCase().includes(lowerQuery) || 
      r.category.toLowerCase().includes(lowerQuery)
    );
  }
  renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', function() {
  // Show/hide recipes section on nav click
  const recipesNav = document.querySelector('a[href="#recipes"]');
  const recipesSection = document.getElementById('recipes');

  if (recipesNav) {
    recipesNav.addEventListener('click', function(e) {
      e.preventDefault();
      recipesSection.style.display = 'block';
      if (!recipesLoaded) {
        loadRecipes();
      }
      recipesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Search functionality
  const searchBox = document.getElementById('search-box');
  if (searchBox) {
    searchBox.addEventListener('input', function() {
      searchRecipes(this.value);
    });
  }
});
