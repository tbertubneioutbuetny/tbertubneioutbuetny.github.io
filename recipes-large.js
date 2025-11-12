// Large recipe database with real recipes from TheMealDB
let allRecipes = [];
let filteredRecipes = [];
let recipesLoaded = false;

async function loadRecipes() {
  if (recipesLoaded) return;

  // List of popular desserts to fetch from TheMealDB API
  const dessertNames = [
    "Chocolate Chip Cookies", "Brownies", "Tiramisu", "Cheesecake", "Apple Pie",
    "Lemon Cake", "Chocolate Mousse", "Strawberry Shortcake", "Crème Brûlée",
    "Bread Pudding", "Carrot Cake", "Banana Bread", "Cherry Pie", "Chocolate Cake",
    "Red Velvet Cake", "Panna Cotta", "Churros", "Baklava", "Macarons", "Eclairs",
    "Donuts", "Profiteroles", "Cannoli", "Flan", "Meringue Pie", "Chocolate Truffles",
    "Fruit Tart", "Pineapple Upside Down Cake", "Coconut Macaroons", "Muffins",
    "Scones", "Croissants", "Danish Pastry", "Soufflé", "Pavlova", "Affogato",
    "Gelato", "Chocolate Pudding", "Vanilla Pudding", "Tapioca Pudding", "Rice Pudding",
    "Custard", "Apple Crisp", "Berry Crumble", "Peach Cobbler", "Blackberry Pie",
    "Blueberry Tart", "Lemon Meringue Pie", "Key Lime Pie", "Pumpkin Pie", "Pecan Pie",
    "Black Forest Cake", "Gingerbread", "Shortbread", "Sponge Cake", "Pound Cake",
    "Crepes", "Waffles", "Pancakes", "Chocolate Lava Cake", "Molten Chocolate Cake",
    "Tres Leches", "Carrot Cake", "Ice Cream", "Brownies Walnut", "Blueberry Muffins",
    "Strawberry Jam Tart", "Banoffee Pie", "Baked Cheesecake", "Coconut Cake", "Sacher Torte"
  ];

  // Fetch real recipes from TheMealDB
  const fetchedRecipes = [];
  for (const name of dessertNames) {
    try {
      const response = await fetch(\`https://www.themealdb.com/api/json/v1/1/search.php?s=\${encodeURIComponent(name)}\`);
      const data = await response.json();
      
      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        
        // Extract ingredients
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[\`strIngredient\${i}\`];
          const measure = meal[\`strMeasure\${i}\`];
          if (ingredient && ingredient.trim()) {
            ingredients.push(\`\${measure ? measure.trim() + ' ' : ''}\${ingredient.trim()}\`);
          }
        }

        // Split instructions into steps
        const instructions = meal.strInstructions
          ? meal.strInstructions.split('.').filter(s => s.trim()).map(s => s.trim())
          : ["Instructions not available"];

        fetchedRecipes.push({
          name: meal.strMeal,
          category: meal.strCategory || "Dessert",
          time: "30-45 min",
          servings: "4-6",
          ingredients: ingredients.length > 0 ? ingredients : ["See instructions"],
          instructions: instructions
        });
      }
    } catch (error) {
      console.log(\`Could not fetch \${name}\`, error);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // If we have real recipes, use them; otherwise use fallback
  allRecipes = fetchedRecipes.length > 0 ? fetchedRecipes : getFallbackRecipes();
  
  // Remove duplicates by name
  allRecipes = Array.from(new Map(allRecipes.map(r => [r.name, r])).values());
  
  filteredRecipes = allRecipes;
  recipesLoaded = true;
  renderRecipes(filteredRecipes);
  
  console.log(\`Loaded \${allRecipes.length} recipes\`);
}

function getFallbackRecipes() {
  return [
    {
      name: "Chocolate Chip Cookies",
      category: "Dessert",
      time: "25 min",
      servings: "24",
      ingredients: ["2 cups flour", "1 tsp baking soda", "1 tsp salt", "1 cup butter", "3/4 cup sugar", "3/4 cup brown sugar", "2 eggs", "2 tsp vanilla", "2 cups chocolate chips"],
      instructions: ["Preheat oven to 375°F", "Mix flour, baking soda, salt", "Beat butter and sugars", "Add eggs and vanilla", "Stir in flour and chips", "Drop on sheets", "Bake 9-11 min"]
    },
    {
      name: "Brownies",
      category: "Dessert",
      time: "35 min",
      servings: "12",
      ingredients: ["3/4 cup cocoa", "1/2 cup flour", "1/4 tsp salt", "1/2 cup butter", "1 cup sugar", "2 eggs", "1 tsp vanilla", "1/2 cup chips"],
      instructions: ["Preheat to 350°F", "Mix cocoa, flour, salt", "Melt butter with sugar", "Add eggs and vanilla", "Fold in flour and chips", "Pour in pan", "Bake 25-30 min"]
    }
  ];
}

function renderRecipes(recipes) {
  const list = document.getElementById('recipe-list');
  if (!list) return;

  if (recipes.length === 0) {
    list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No recipes found.</p>';
    return;
  }

  list.innerHTML = recipes.map(recipe => \`
    <div class="recipe-card">
      <h4>\${recipe.name}</h4>
      <p><strong>\${recipe.category}</strong> • \${recipe.time} • Serves \${recipe.servings}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        \${recipe.ingredients.map(ing => \`<li>\${ing}</li>\`).join('')}
      </ul>
      <p><strong>Instructions:</strong></p>
      <ol>
        \${recipe.instructions.map(step => \`<li>\${step}</li>\`).join('')}
      </ol>
    </div>
  \`).join('');
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
  const recipesNav = document.querySelector('a[href="#recipes"]');
  const recipesSection = document.getElementById('recipes');

  if (recipesNav) {
    recipesNav.addEventListener('click', function(e) {
      e.preventDefault();
      recipesSection.style.display = 'block';
      
      if (!recipesLoaded) {
        const list = document.getElementById('recipe-list');
        if (list) {
          list.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">Loading recipes...</p>';
        }
        loadRecipes();
      }
      recipesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const searchBox = document.getElementById('search-box');
  if (searchBox) {
    searchBox.addEventListener('input', function() {
      searchRecipes(this.value);
    });
  }
});
