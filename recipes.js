// Sample recipes data
const recipes = [
  {
    name: "Chocolate Chip Cookies",
    category: "Dessert",
    time: "25 min",
    servings: "24 cookies",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix flour, baking soda, and salt in a bowl.",
      "Beat butter and sugars until creamy.",
      "Add eggs and vanilla, beat well.",
      "Stir in flour mixture, then chocolate chips.",
      "Drop spoonfuls onto baking sheets.",
      "Bake 9–11 minutes until golden."
    ]
  },
  {
    name: "Classic Brownies",
    category: "Dessert",
    time: "35 min",
    servings: "12 brownies",
    ingredients: [
      "3/4 cup cocoa powder",
      "1/2 cup flour",
      "1/4 tsp salt",
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1 tsp vanilla extract",
      "1/2 cup chocolate chips"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix cocoa, flour, and salt.",
      "Melt butter with sugar over low heat.",
      "Cool slightly, beat in eggs and vanilla.",
      "Fold in flour mixture and chocolate chips.",
      "Pour into greased 8x8 pan.",
      "Bake 25–30 minutes until a toothpick has moist crumbs."
    ]
  },
  {
    name: "Vanilla Cupcakes",
    category: "Dessert",
    time: "30 min",
    servings: "12 cupcakes",
    ingredients: [
      "1 3/4 cups all-purpose flour",
      "1 1/2 tsp baking powder",
      "1/2 tsp salt",
      "1/2 cup butter, softened",
      "1 cup sugar",
      "2 eggs",
      "1/2 cup milk",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix flour, baking powder, and salt.",
      "Beat butter and sugar until fluffy.",
      "Add eggs one at a time.",
      "Alternate adding flour mixture and milk.",
      "Stir in vanilla.",
      "Fill cupcake liners 2/3 full.",
      "Bake 18–22 minutes."
    ]
  }
];

// Render recipes
function renderRecipes() {
  const list = document.getElementById('recipe-list');
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

// Call on page load
document.addEventListener('DOMContentLoaded', renderRecipes);
