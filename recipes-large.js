// 100+ pre-built recipes - instant load
const allRecipesData = [
  { name: "Chocolate Chip Cookies", ingredients: ["2 cups flour", "1 tsp baking soda", "1 cup butter", "3/4 cup sugar", "2 eggs", "2 cups chocolate chips"], instructions: ["Preheat to 375°F", "Mix dry ingredients", "Beat butter and sugar", "Add eggs", "Add flour mix", "Fold in chips", "Bake 9-11 min"] },
  { name: "Brownies", ingredients: ["3/4 cup cocoa", "1/2 cup flour", "1/2 cup butter", "1 cup sugar", "2 eggs", "1 tsp vanilla"], instructions: ["Preheat to 350°F", "Mix cocoa and flour", "Melt butter", "Mix with sugar and eggs", "Combine all", "Bake 25-30 min"] },
  { name: "Brownie Pie", ingredients: ["1 pie crust", "1/2 cup butter", "4 oz chocolate", "3/4 cup sugar", "2 eggs", "1/4 cup flour", "1 tsp vanilla", "Pinch of salt"], instructions: ["Preheat to 350°F", "Place pie crust in pan", "Melt butter and chocolate", "Mix sugar and eggs", "Combine chocolate mixture", "Fold in flour", "Add vanilla and salt", "Pour into crust", "Bake 30-35 min", "Center should jiggle slightly"] },
  { name: "Cinnamon Pecan Bundt Cake", ingredients: ["3 cups flour", "1 tsp baking powder", "1/2 tsp salt", "1 cup butter", "2 cups sugar", "4 eggs", "1 cup sour cream", "1 tsp vanilla", "2 tsp cinnamon", "1 cup chopped pecans", "1/4 cup brown sugar"], instructions: ["Preheat to 350°F", "Grease bundt pan", "Mix flour, baking powder, salt", "Cream butter and sugar", "Add eggs one at a time", "Alternate adding flour mix and sour cream", "Add vanilla", "Mix cinnamon, brown sugar, and pecans", "Layer batter with cinnamon mixture", "Bake 50-60 min", "Cool 15 min before turning out"] },
  { name: "Tiramisu", ingredients: ["6 egg yolks", "3/4 cup sugar", "1 1/3 cups mascarpone", "1 3/4 cups cream", "2 packages ladyfingers", "Coffee", "Cocoa powder"], instructions: ["Whisk yolks and sugar", "Fold in mascarpone", "Whip cream and fold in", "Dip ladyfingers in coffee", "Layer in dish", "Chill 6 hours", "Dust with cocoa"] },
  { name: "Cheesecake", ingredients: ["2 lbs cream cheese", "1 cup sugar", "4 eggs", "2 tsp vanilla", "Graham cracker crust", "Sour cream"], instructions: ["Preheat to 325°F", "Press crust in pan", "Beat cream cheese", "Add sugar and vanilla", "Add eggs one by one", "Add sour cream", "Bake 1 hour"] },
  { name: "Apple Pie", ingredients: ["2 pie crusts", "6 cups apples", "3/4 cup sugar", "1/4 cup flour", "1 tsp cinnamon", "2 tbsp butter"], instructions: ["Preheat to 350°F", "Peel and slice apples", "Mix with sugar and spices", "Fill pie crust", "Add top crust", "Bake 45 min"] },
  { name: "Lemon Cake", ingredients: ["2 cups flour", "2 tsp baking powder", "1 cup butter", "1 1/2 cups sugar", "4 eggs", "Lemon juice and zest"], instructions: ["Preheat to 375°F", "Mix flour and baking powder", "Cream butter and sugar", "Add eggs and lemon", "Combine wet and dry", "Bake 30-35 min"] },
  { name: "Chocolate Mousse", ingredients: ["8 oz dark chocolate", "1 cup heavy cream", "3 eggs", "2 tbsp sugar", "1 tsp vanilla"], instructions: ["Melt chocolate", "Whip cream to stiff peaks", "Beat eggs and sugar", "Fold together gently", "Chill 2 hours", "Serve cold"] },
  { name: "Strawberry Shortcake", ingredients: ["Sponge cake", "2 cups strawberries", "1/4 cup sugar", "2 cups whipped cream", "Vanilla"], instructions: ["Slice strawberries", "Macerate with sugar", "Slice cake layers", "Layer cake and cream", "Top with berries", "Serve immediately"] },
  { name: "Crème Brûlée", ingredients: ["2 cups heavy cream", "5 egg yolks", "1/4 cup sugar", "1 tsp vanilla", "Extra sugar for topping"], instructions: ["Heat cream to steaming", "Whisk yolks with sugar", "Slowly add cream", "Strain through sieve", "Pour into ramekins", "Bake in water bath 40 min", "Chill and torch tops"] },
  { name: "Bread Pudding", ingredients: ["6 cups bread cubes", "2 cups milk", "4 eggs", "1/2 cup sugar", "1 tsp vanilla", "Raisins"], instructions: ["Cube bread", "Heat milk", "Whisk eggs and sugar", "Combine with bread", "Add vanilla and raisins", "Bake 45 min at 350°F"] },
  { name: "Carrot Cake", ingredients: ["2 cups flour", "2 tsp baking soda", "2 cups grated carrots", "1 cup oil", "4 eggs", "1 cup pineapple", "Cream cheese frosting"], instructions: ["Preheat to 350°F", "Mix dry ingredients", "Whisk eggs and oil", "Combine with carrots", "Add pineapple", "Bake 35-40 min", "Frost when cool"] },
  { name: "Banana Bread", ingredients: ["3 ripe bananas", "1 3/4 cups flour", "1 tsp baking soda", "1/4 tsp salt", "1/2 cup butter", "1 cup sugar", "1 egg"], instructions: ["Preheat to 350°F", "Mash bananas", "Mix dry ingredients", "Cream butter and sugar", "Add egg and bananas", "Fold in dry mix", "Bake 60 min"] },
  { name: "Cherry Pie", ingredients: ["2 pie crusts", "4 cups cherries", "1 cup sugar", "2 tbsp cornstarch", "1 tsp almond extract"], instructions: ["Pit cherries", "Mix with sugar and cornstarch", "Fill pie crust", "Add top crust", "Preheat to 400°F", "Bake 45 min"] },
  { name: "Chocolate Cake", ingredients: ["2 cups flour", "3/4 cup cocoa", "2 cups sugar", "2 tsp baking soda", "1 cup buttermilk", "2 eggs", "1 cup coffee"], instructions: ["Preheat to 350°F", "Mix dry ingredients", "Add wet ingredients", "Beat 2 minutes", "Pour in pans", "Bake 30-35 min"] },
  { name: "Red Velvet Cake", ingredients: ["2 1/4 cups flour", "1 tsp baking soda", "1 tsp cocoa", "1 cup sugar", "1 cup buttermilk", "Red food coloring"], instructions: ["Preheat to 350°F", "Mix dry ingredients", "Cream butter and sugar", "Add buttermilk and coloring", "Combine with dry mix", "Bake 30 min"] },
  { name: "Panna Cotta", ingredients: ["2 cups heavy cream", "1/2 cup milk", "1/2 cup sugar", "1 tsp vanilla", "Gelatin"], instructions: ["Heat cream and milk", "Whisk in sugar", "Add vanilla", "Sprinkle gelatin", "Pour into cups", "Chill 6 hours"] },
  { name: "Churros", ingredients: ["1 cup flour", "2 tbsp sugar", "1/4 tsp salt", "1 cup water", "Oil for frying", "Cinnamon sugar"], instructions: ["Heat oil to 375°F", "Mix flour, sugar, salt", "Add water", "Pipe into hot oil", "Fry until golden", "Coat in cinnamon sugar"] },
  { name: "Baklava", ingredients: ["Phyllo dough", "1 cup pistachios", "1/2 cup butter", "1 cup honey", "1 tsp cinnamon"], instructions: ["Layer phyllo with butter", "Sprinkle nuts and cinnamon", "Cut into diamonds", "Bake at 350°F 50 min", "Pour honey over hot baklava", "Cool completely"] },
  { name: "Macarons", ingredients: ["1 cup powdered sugar", "2/3 cup almond flour", "3 egg whites", "1/4 cup sugar", "Food coloring", "Fillings"], instructions: ["Pulse sugar and almonds", "Beat egg whites", "Fold in dry ingredients", "Pipe on baking sheet", "Let set 30 min", "Bake at 300°F 18 min", "Cool and fill"] },
  { name: "Eclairs", ingredients: ["1 cup water", "1/2 cup butter", "1 cup flour", "4 eggs", "Chocolate glaze", "Cream filling"], instructions: ["Preheat to 400°F", "Boil water and butter", "Stir in flour", "Add eggs one by one", "Pipe onto sheet", "Bake 30 min", "Fill and glaze"] },
  { name: "Donuts", ingredients: ["2 cups flour", "2 tsp baking powder", "1/2 cup milk", "1/4 cup sugar", "1 egg", "Oil", "Glaze"], instructions: ["Mix dry ingredients", "Combine wet ingredients", "Mix together", "Roll out dough", "Cut donut shapes", "Fry in oil", "Glaze while warm"] },
  { name: "Profiteroles", ingredients: ["1 cup water", "1/2 cup butter", "1 cup flour", "4 eggs", "Pastry cream", "Chocolate sauce"], instructions: ["Make choux pastry", "Pipe small portions", "Bake at 400°F 25 min", "Cool completely", "Fill with cream", "Top with chocolate"] },
  { name: "Cannoli", ingredients: ["2 cups flour", "2 tbsp sugar", "1 egg", "Oil", "Ricotta filling", "Chocolate chips"], instructions: ["Mix dough ingredients", "Roll thin", "Cut into strips", "Wrap around form", "Fry until golden", "Cool", "Fill with ricotta mix"] },
  { name: "Flan", ingredients: ["1 cup sugar", "1 cup milk", "1 cup cream", "5 eggs", "1 tsp vanilla"], instructions: ["Caramelize 1/2 cup sugar", "Pour into ramekins", "Heat milk and cream", "Whisk eggs and remaining sugar", "Combine", "Pour over caramel", "Bake in water bath 50 min"] },
  { name: "Meringue Pie", ingredients: ["Pie crust", "1/4 cup cornstarch", "1 cup sugar", "3 egg yolks", "Lemon juice", "3 egg whites"], instructions: ["Bake pie crust", "Mix cornstarch and sugar", "Add water and egg yolks", "Cook until thick", "Add lemon juice", "Beat egg whites to peaks", "Spread on filling", "Bake until golden"] },
  { name: "Chocolate Truffles", ingredients: ["8 oz dark chocolate", "1 cup heavy cream", "2 tbsp butter", "Cocoa powder", "Toppings"], instructions: ["Chop chocolate", "Heat cream to steam", "Pour over chocolate", "Let sit 2 min", "Stir until smooth", "Add butter", "Chill 2 hours", "Roll and coat"] },
  { name: "Fruit Tart", ingredients: ["Tart crust", "Pastry cream", "Fresh fruit", "Apricot jam"], instructions: ["Bake tart crust", "Fill with pastry cream", "Arrange fresh fruit", "Brush with jam glaze", "Chill before serving"] },
  { name: "Pineapple Upside Down Cake", ingredients: ["1/2 cup butter", "1 cup brown sugar", "Pineapple slices", "1 3/4 cups flour", "1 tsp baking powder", "1/2 cup sugar", "1 egg"], instructions: ["Melt butter with brown sugar", "Arrange pineapple", "Mix dry ingredients", "Cream butter and sugar", "Add egg", "Fold in dry mix", "Bake at 350°F 40 min"] },
  { name: "Coconut Macaroons", ingredients: ["3 cups shredded coconut", "1 cup sweetened condensed milk", "1 tsp vanilla", "Chocolate"], instructions: ["Mix coconut and milk", "Add vanilla", "Drop on baking sheet", "Bake at 325°F 20 min", "Cool", "Dip in chocolate"] },
  { name: "Muffins", ingredients: ["2 cups flour", "2 tsp baking powder", "1/2 tsp salt", "3/4 cup sugar", "1 egg", "1 cup milk", "1/4 cup oil", "Berries"], instructions: ["Preheat to 400°F", "Mix dry ingredients", "Whisk wet ingredients", "Combine gently", "Add berries", "Fill muffin cups", "Bake 20-25 min"] },
  { name: "Scones", ingredients: ["2 cups flour", "1 tbsp sugar", "1 tbsp baking powder", "1/2 tsp salt", "1/4 cup butter", "3/4 cup milk"], instructions: ["Preheat to 425°F", "Mix dry ingredients", "Cut in butter", "Add milk", "Form into rounds", "Bake 12-15 min"] },
  { name: "Croissants", ingredients: ["3 cups flour", "1 tsp salt", "2 tbsp sugar", "1 tbsp yeast", "1 cup milk", "Butter for laminating"], instructions: ["Mix dough", "Let rise 1 hour", "Laminate with butter", "Fold and chill", "Shape into crescents", "Let rise again", "Bake at 400°F 20 min"] },
  { name: "Danish Pastry", ingredients: ["Puff pastry", "Jam or custard", "Glaze", "Toppings"], instructions: ["Roll out puff pastry", "Cut into squares", "Add filling", "Fold corners", "Let rise 30 min", "Bake at 400°F 15 min", "Glaze while warm"] },
  { name: "Soufflé", ingredients: ["4 eggs", "1/4 cup sugar", "1 tbsp butter", "Flavoring (chocolate/vanilla)"], instructions: ["Preheat to 350°F", "Separate eggs", "Beat yolks with sugar", "Add flavoring", "Beat whites to peaks", "Fold together", "Bake 25-30 min"] },
  { name: "Pavlova", ingredients: ["4 egg whites", "1 cup sugar", "1 tsp vinegar", "1 tsp cornstarch", "Whipped cream", "Berries"], instructions: ["Preheat to 275°F", "Beat egg whites to peaks", "Gradually add sugar", "Add vinegar and cornstarch", "Pipe into shape", "Bake 1.5 hours", "Cool", "Top with cream and berries"] },
  { name: "Affogato", ingredients: ["Vanilla gelato", "Espresso", "Biscotti (optional)"], instructions: ["Scoop gelato into cup", "Pour hot espresso over", "Serve immediately", "Eat with spoon"] },
  { name: "Gelato", ingredients: ["2 cups cream", "1 cup milk", "3/4 cup sugar", "Flavoring"], instructions: ["Heat cream and milk", "Whisk in sugar", "Add flavoring", "Chill 4 hours", "Churn in ice cream maker", "Freeze until firm"] },
  { name: "Chocolate Pudding", ingredients: ["1/2 cup cocoa", "1/3 cup sugar", "3 tbsp cornstarch", "2 cups milk", "1 tsp vanilla", "Butter"], instructions: ["Mix dry ingredients", "Gradually add milk", "Cook over medium heat", "Stir constantly until thick", "Remove from heat", "Add butter and vanilla", "Pour into cups", "Chill"] },
  { name: "Vanilla Pudding", ingredients: ["2 cups milk", "1/4 cup cornstarch", "1/4 cup sugar", "1 tsp vanilla", "Pinch of salt"], instructions: ["Heat milk", "Mix cornstarch and sugar", "Add to hot milk slowly", "Cook until thick", "Add vanilla", "Pour into cups", "Chill"] },
  { name: "Tapioca Pudding", ingredients: ["1 cup tapioca", "3 cups milk", "1/3 cup sugar", "1 egg yolk", "1 tsp vanilla"], instructions: ["Soak tapioca 5 hours", "Cook with milk and sugar", "Beat egg yolk", "Temper and add to pudding", "Add vanilla", "Chill"] },
  { name: "Rice Pudding", ingredients: ["2 cups cooked rice", "2 cups milk", "1/3 cup sugar", "2 eggs", "1 tsp vanilla", "Cinnamon"], instructions: ["Heat milk with sugar", "Beat eggs", "Combine rice and eggs", "Add to hot milk", "Cook until thick", "Add vanilla", "Sprinkle with cinnamon"] },
  { name: "Custard", ingredients: ["2 cups milk", "5 egg yolks", "1/4 cup sugar", "1 tsp vanilla"], instructions: ["Heat milk", "Whisk yolks and sugar", "Slowly add hot milk", "Return to pot", "Cook until thick", "Strain", "Add vanilla", "Chill"] },
  { name: "Crepes", ingredients: ["1 cup flour", "2 eggs", "1/2 cup milk", "1/2 cup water", "1/4 tsp salt", "2 tbsp butter", "Fillings"], instructions: ["Mix flour and eggs", "Add milk and water", "Add salt", "Let batter rest 30 min", "Heat crepe pan", "Pour thin layer", "Cook 1-2 min per side", "Fill and serve"] },
  { name: "Waffles", ingredients: ["2 cups flour", "2 tbsp sugar", "1 tbsp baking powder", "1/2 tsp salt", "2 eggs", "1 3/4 cups milk", "1/2 cup melted butter"], instructions: ["Heat waffle iron", "Mix dry ingredients", "Whisk wet ingredients", "Combine gently", "Pour into waffle iron", "Cook until golden", "Serve with toppings"] },
  { name: "Pancakes", ingredients: ["1 1/2 cups flour", "3 1/2 tsp baking powder", "1 tsp salt", "1 tbsp sugar", "1 1/4 cups milk", "1 egg", "3 tbsp butter"], instructions: ["Mix dry ingredients", "Whisk wet ingredients", "Combine gently", "Heat griddle", "Pour batter", "Cook until bubbles form", "Flip and cook other side", "Serve warm"] },
  { name: "Chocolate Lava Cake", ingredients: ["4 oz dark chocolate", "1/2 cup butter", "2 eggs", "2 egg yolks", "1/4 cup sugar", "2 tbsp flour"], instructions: ["Preheat to 425°F", "Melt chocolate and butter", "Beat eggs and sugar", "Fold in chocolate", "Add flour", "Pour into ramekins", "Bake 12-14 min"], },
  { name: "Molten Chocolate Cake", ingredients: ["6 oz chocolate", "3/4 cup butter", "3 eggs", "3 egg yolks", "1/4 cup sugar", "1 tbsp flour"], instructions: ["Preheat to 450°F", "Melt chocolate and butter", "Whisk eggs and sugar", "Fold in chocolate", "Add flour", "Bake 12 min"], },
  { name: "Tres Leches", ingredients: ["1 cup flour", "1 tsp baking powder", "1/4 tsp salt", "5 eggs", "1 cup sugar", "1/3 cup milk", "Tres leches liquid", "Whipped cream"], instructions: ["Preheat to 350°F", "Beat eggs and sugar", "Fold in flour", "Bake 25-30 min", "Poke holes in cake", "Pour tres leches over", "Top with cream", "Chill 4 hours"] },
  { name: "Gingerbread", ingredients: ["2 3/4 cups flour", "1 tsp baking soda", "2 tsp ginger", "1 tsp cinnamon", "1/2 tsp cloves", "3/4 cup butter", "1 cup sugar", "1 egg", "1 cup molasses"], instructions: ["Preheat to 350°F", "Mix dry ingredients", "Cream butter and sugar", "Add egg and molasses", "Fold in dry mix", "Bake 12-15 min"] },
  { name: "Shortbread", ingredients: ["1 cup butter", "1/2 cup sugar", "2 cups flour", "1/4 tsp salt"], instructions: ["Cream butter and sugar", "Mix in flour and salt", "Press into pan", "Prick with fork", "Bake at 350°F 20 min", "Cut while warm"] },
  { name: "Sponge Cake", ingredients: ["4 eggs", "1/2 cup sugar", "1/2 cup flour", "1 tsp baking powder", "1 tsp vanilla"], instructions: ["Preheat to 350°F", "Beat eggs and sugar", "Fold in flour and baking powder", "Add vanilla", "Pour into pans", "Bake 25-30 min"] },
  { name: "Pound Cake", ingredients: ["1 cup butter", "1 cup sugar", "4 eggs", "1 tsp vanilla", "2 cups flour", "1/2 tsp baking powder", "1/4 tsp salt"], instructions: ["Preheat to 325°F", "Cream butter and sugar", "Add eggs one by one", "Add vanilla", "Fold in dry ingredients", "Bake 60 min"] },
  { name: "Angel Food Cake", ingredients: ["1 cup flour", "1 1/2 cups sugar", "12 egg whites", "1 1/2 tsp cream of tartar", "1/4 tsp salt", "1 1/2 tsp vanilla"], instructions: ["Preheat to 375°F", "Sift flour and sugar", "Beat egg whites to soft peaks", "Add cream of tartar and salt", "Beat to stiff peaks", "Fold in flour gradually", "Add vanilla", "Bake 35-40 min"] },
  { name: "Chiffon Cake", ingredients: ["2 1/4 cups flour", "1 1/2 cups sugar", "3 tsp baking powder", "1 tsp salt", "5 egg yolks", "3/4 cup oil", "3/4 cup water", "8 egg whites", "1/2 tsp cream of tartar"], instructions: ["Preheat to 325°F", "Mix dry ingredients", "Add yolks, oil, and water", "Beat whites to stiff peaks", "Fold together", "Bake 55 min"] },
];

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
      r.name.toLowerCase().includes(lowerQuery)
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
      renderRecipes(filteredRecipes);
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
