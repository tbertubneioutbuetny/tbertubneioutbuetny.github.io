// Dessert recipes data
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
  },
  {
    name: "Strawberry Cheesecake",
    category: "Dessert",
    time: "45 min + chill",
    servings: "8 servings",
    ingredients: [
      "1 1/2 cups graham cracker crumbs",
      "1/3 cup melted butter",
      "32 oz cream cheese, softened",
      "1 cup sugar",
      "4 eggs",
      "1 tsp vanilla extract",
      "1 cup fresh strawberries",
      "2 tbsp honey"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Mix graham cracker crumbs with melted butter.",
      "Press into bottom of 9-inch springform pan.",
      "Beat cream cheese and sugar until smooth.",
      "Add eggs one at a time, then vanilla.",
      "Pour onto crust.",
      "Bake 40–50 minutes until center is almost set.",
      "Cool, then refrigerate at least 4 hours.",
      "Top with fresh strawberries and honey drizzle."
    ]
  },
  {
    name: "Lemon Bars",
    category: "Dessert",
    time: "40 min",
    servings: "16 bars",
    ingredients: [
      "1 cup butter, softened",
      "2 cups all-purpose flour",
      "1/2 cup powdered sugar",
      "4 eggs",
      "1 1/2 cups sugar",
      "1/4 cup lemon juice",
      "2 tbsp lemon zest",
      "2 tbsp flour",
      "1/2 tsp baking powder"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix 1 cup butter, 2 cups flour, and powdered sugar.",
      "Press into greased 9x13 pan.",
      "Bake 15 minutes.",
      "Beat eggs, sugar, lemon juice, and zest.",
      "Mix in flour and baking powder.",
      "Pour over crust.",
      "Bake 20–25 minutes until set.",
      "Cool and dust with powdered sugar before serving."
    ]
  },
  {
    name: "Tiramisu",
    category: "Dessert",
    time: "30 min + chill",
    servings: "9 servings",
    ingredients: [
      "6 egg yolks",
      "3/4 cup sugar",
      "1 1/3 cups mascarpone",
      "1 tsp vanilla extract",
      "48 ladyfinger cookies",
      "1 1/2 cups strong espresso",
      "3 tbsp cocoa powder",
      "2 tbsp Marsala wine (optional)"
    ],
    instructions: [
      "Whisk egg yolks and sugar over hot water until thick.",
      "Fold in mascarpone and vanilla.",
      "Combine espresso with Marsala if using.",
      "Dip ladyfingers in espresso mixture briefly.",
      "Layer dipped ladyfingers in 9x9 pan.",
      "Spread half the cream mixture over layer.",
      "Repeat with more dipped ladyfingers and remaining cream.",
      "Cover and refrigerate at least 4 hours.",
      "Dust with cocoa powder before serving."
    ]
  }
];

// Drink recipes data
const drinks = [
  {
    name: "Iced Lemonade",
    category: "Drink",
    time: "10 min",
    servings: "4 servings",
    ingredients: [
      "1 cup fresh lemon juice",
      "1/2 cup sugar",
      "4 cups cold water",
      "Ice cubes",
      "Fresh mint leaves",
      "Lemon slices"
    ],
    instructions: [
      "Combine lemon juice and sugar in a pitcher.",
      "Stir until sugar dissolves.",
      "Add cold water and stir well.",
      "Fill glasses with ice cubes.",
      "Pour lemonade over ice.",
      "Garnish with fresh mint and lemon slices.",
      "Serve immediately."
    ]
  },
  {
    name: "Classic Iced Tea",
    category: "Drink",
    time: "15 min + chill",
    servings: "6 servings",
    ingredients: [
      "6 tea bags",
      "6 cups water",
      "1/4 cup honey",
      "Ice cubes",
      "Lemon slices",
      "Fresh mint"
    ],
    instructions: [
      "Bring water to a boil.",
      "Add tea bags and steep for 5 minutes.",
      "Remove tea bags and stir in honey.",
      "Let cool to room temperature.",
      "Refrigerate until cold.",
      "Serve over ice with lemon slices and mint."
    ]
  },
  {
    name: "Strawberry Smoothie",
    category: "Drink",
    time: "5 min",
    servings: "2 servings",
    ingredients: [
      "1 cup fresh strawberries",
      "1 cup Greek yogurt",
      "1/2 cup milk",
      "2 tbsp honey",
      "1/2 tsp vanilla extract",
      "Ice cubes"
    ],
    instructions: [
      "Add strawberries to blender.",
      "Add yogurt, milk, honey, and vanilla.",
      "Add a handful of ice cubes.",
      "Blend until smooth.",
      "Pour into glasses and serve immediately."
    ]
  },
  {
    name: "Chocolate Milkshake",
    category: "Drink",
    time: "5 min",
    servings: "2 servings",
    ingredients: [
      "2 cups vanilla ice cream",
      "1/3 cup chocolate syrup",
      "1 cup whole milk",
      "1/2 tsp vanilla extract",
      "Whipped cream",
      "Chocolate shavings"
    ],
    instructions: [
      "Scoop ice cream into blender.",
      "Add chocolate syrup and milk.",
      "Add vanilla extract.",
      "Blend until smooth and creamy.",
      "Pour into tall glasses.",
      "Top with whipped cream and chocolate shavings.",
      "Serve with a straw."
    ]
  },
  {
    name: "Mojito",
    category: "Drink",
    time: "10 min",
    servings: "1 serving",
    ingredients: [
      "10 fresh mint leaves",
      "1/2 lime, cut into wedges",
      "2 tbsp sugar",
      "Ice cubes",
      "1.5 oz white rum",
      "4 oz club soda",
      "Mint sprig and lime slice for garnish"
    ],
    instructions: [
      "Place mint leaves and lime wedges in a tall glass.",
      "Add sugar and gently muddle to release mint oils.",
      "Fill glass with ice cubes.",
      "Pour in rum and stir well.",
      "Top with club soda.",
      "Stir gently.",
      "Garnish with fresh mint sprig and lime slice."
    ]
  },
  {
    name: "Virgin Piña Colada",
    category: "Drink",
    time: "5 min",
    servings: "2 servings",
    ingredients: [
      "1 cup pineapple juice",
      "1/2 cup coconut cream",
      "1 cup crushed ice",
      "1/2 cup fresh pineapple chunks",
      "Pineapple wedge for garnish",
      "Cherry for garnish"
    ],
    instructions: [
      "Add pineapple juice and coconut cream to blender.",
      "Add crushed ice and pineapple chunks.",
      "Blend until smooth.",
      "Pour into chilled glasses.",
      "Garnish with pineapple wedge and cherry.",
      "Serve with a straw immediately."
    ]
  }
];

// Render recipes and drinks
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

function renderDrinks() {
  const list = document.getElementById('drinks-list');
  list.innerHTML = drinks.map(drink => `
    <div class="recipe-card">
      <h4>${drink.name}</h4>
      <p><strong>${drink.category}</strong> • ${drink.time} • Serves ${drink.servings}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        ${drink.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
      <p><strong>Instructions:</strong></p>
      <ol>
        ${drink.instructions.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
  `).join('');
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
  renderRecipes();
  renderDrinks();
});
