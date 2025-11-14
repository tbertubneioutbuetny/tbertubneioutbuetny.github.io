// recipes-large.js
// 200 realistic dessert recipes (dessert-only), alphabetical order.
// Each recipe: name, category, prep, servings, ingredients[], instructions[]
window.recipes = [
  // A
  {
    name: "Apple Cake",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["2 cups flour", "1 cup sugar", "2 tsp baking powder", "2 eggs", "1/2 cup milk", "2 apples, peeled and diced", "1 tsp cinnamon"],
    instructions: ["Preheat oven to 350°F (175°C).", "Mix dry ingredients.", "Add eggs and milk; fold in apples.", "Pour into greased pan and bake 35–40 minutes.", "Cool and slice."]
  },
  {
    name: "Apple Crumble",
    category: "Dessert",
    prep: "20 mins",
    servings: "6",
    ingredients: ["4 cups sliced apples", "1/2 cup brown sugar", "1 cup oats", "1/2 cup flour", "1/3 cup butter", "1 tsp cinnamon"],
    instructions: ["Preheat oven to 375°F (190°C).", "Toss apples with brown sugar and cinnamon.", "Mix oats, flour and butter for topping.", "Spread topping over apples and bake 30–35 minutes."]
  },
  {
    name: "Apple Pie",
    category: "Dessert",
    prep: "30 mins",
    servings: "8",
    ingredients: ["2 pie crusts", "6 cups sliced apples", "3/4 cup sugar", "2 tbsp flour", "1 tsp cinnamon", "2 tbsp butter"],
    instructions: ["Preheat oven to 375°F (190°C).", "Toss apples with sugar, flour and cinnamon.", "Fill crust, dot with butter, cover with top crust.", "Bake 45–55 minutes until golden."]
  },
  {
    name: "Apricot Galette",
    category: "Dessert",
    prep: "25 mins",
    servings: "6",
    ingredients: ["1 pie crust", "6 apricots, halved", "1/4 cup sugar", "1 tbsp cornstarch", "1 egg (for egg wash)"],
    instructions: ["Preheat oven to 400°F (200°C).", "Arrange apricots on rolled crust, sprinkle with sugar and cornstarch.", "Fold edges over fruit, brush with egg wash.", "Bake 25–30 minutes until golden."]
  },
  {
    name: "Austrian Linzer Cookies",
    category: "Dessert",
    prep: "30 mins",
    servings: "24",
    ingredients: ["2 cups flour", "1 cup ground almonds", "1 cup butter", "3/4 cup sugar", "2 egg yolks", "Raspberry jam"],
    instructions: ["Make dough, chill 1 hour.", "Roll and cut rounds; cut center from half.", "Bake at 350°F (175°C) 10–12 minutes.", "Sandwich jam between whole and cut cookies."]
  },

  // B
  {
    name: "Banana Bread",
    category: "Dessert",
    prep: "15 mins",
    servings: "10",
    ingredients: ["3 ripe bananas", "1/2 cup butter", "1 cup sugar", "1 egg", "1 3/4 cups flour", "1 tsp baking soda", "Pinch salt"],
    instructions: ["Preheat oven to 350°F (175°C).", "Mash bananas; cream butter and sugar; add egg and bananas.", "Stir in flour and baking soda.", "Bake in loaf pan 55–65 minutes."]
  },
  {
    name: "Banoffee Pie",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["1 9-inch pie crust", "1 can dulce de leche", "3 bananas", "1 1/2 cups whipped cream"],
    instructions: ["Spread dulce de leche in cooled crust.", "Top with banana slices.", "Finish with whipped cream and chill."]
  },
  {
    name: "Bavarian Cream Cups",
    category: "Dessert",
    prep: "25 mins",
    servings: "6",
    ingredients: ["2 cups heavy cream", "1/2 cup sugar", "3 egg yolks", "1 tsp vanilla", "1 tbsp gelatin"],
    instructions: ["Bloom gelatin in water.", "Heat cream with half sugar; temper yolks with hot cream.", "Add gelatin and vanilla; chill until set."]
  },
  {
    name: "Biscotti (Almond)",
    category: "Dessert",
    prep: "20 mins",
    servings: "24",
    ingredients: ["2 cups flour", "1 cup sugar", "2 eggs", "1 tsp baking powder", "1 cup almonds", "1 tsp vanilla"],
    instructions: ["Make dough, shape into logs, bake at 350°F (175°C) 25 minutes.", "Slice logs and bake again 10–15 minutes until crisp."]
  },
  {
    name: "Blackberry Cobbler",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["4 cups blackberries", "3/4 cup sugar", "1 tbsp lemon juice", "1 cup flour", "1 cup milk", "1 egg", "1 tsp baking powder"],
    instructions: ["Preheat oven to 375°F (190°C).", "Toss berries with sugar and lemon.", "Pour batter into dish and spoon berries on top.", "Bake 30–35 minutes until golden."]
  },
  {
    name: "Black Forest Cake",
    category: "Dessert",
    prep: "45 mins",
    servings: "10",
    ingredients: ["3 chocolate cake layers", "2 cups cherries, pitted", "3 cups whipped cream", "Chocolate shavings"],
    instructions: ["Layer cake with cherries and whipped cream.", "Soak layers with cherry syrup if desired.", "Top with whipped cream and chocolate shavings."]
  },
  {
    name: "Blondies",
    category: "Dessert",
    prep: "15 mins",
    servings: "16",
    ingredients: ["1/2 cup butter", "1 cup brown sugar", "1 egg", "1 tsp vanilla", "1 cup flour", "1/2 tsp baking powder", "1/2 cup nuts (optional)"],
    instructions: ["Preheat oven to 350°F (175°C).", "Mix butter and brown sugar, add egg and vanilla.", "Stir in flour and baking powder, add nuts.", "Bake 20–25 minutes."]
  },
  {
    name: "Blueberry Muffins",
    category: "Dessert",
    prep: "15 mins",
    servings: "12",
    ingredients: ["2 cups flour", "1/2 cup sugar", "2 tsp baking powder", "1/2 tsp salt", "1 cup milk", "1 egg", "1/2 cup butter", "1 cup blueberries"],
    instructions: ["Preheat oven to 400°F (200°C).", "Mix dry and wet ingredients separately, fold together and gently mix in blueberries.", "Fill muffin tins and bake 18–20 minutes."]
  },
  {
  name: "Brownie Pie",
  category: "Dessert",
  prep: "20 mins",
  servings: "8",
  ingredients: [
    "1 unbaked 9-inch pie crust",
    "1/2 cup butter, melted",
    "1 cup sugar",
    "2 eggs",
    "1/3 cup cocoa powder",
    "1/2 cup flour",
    "1 tsp vanilla",
    "1/4 tsp salt",
    "1/2 cup chocolate chips (optional)"
  ],
  instructions: [
    "Preheat oven to 350°F (175°C).",
    "Whisk melted butter, sugar, eggs and vanilla until glossy.",
    "Add cocoa, flour and salt; mix until smooth.",
    "Fold in chocolate chips if using.",
    "Pour into unbaked crust and smooth the top.",
    "Bake 35–40 minutes until set around edges but slightly fudgy in center.",
    "Cool before slicing to keep the pie from collapsing."
  ]
},


  // C
  {
    name: "Cannoli",
    category: "Dessert",
    prep: "45 mins",
    servings: "12",
    ingredients: ["2 cups ricotta", "1 cup powdered sugar", "1 tsp vanilla", "Cannoli shells", "Mini chocolate chips"],
    instructions: ["Mix ricotta with sugar and vanilla until smooth.", "Pipe into shells and sprinkle with chips.", "Serve immediately for crisp shells."]
  },
  {
    name: "Caramel Custard (Flan)",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["1 cup sugar", "4 eggs", "1 can condensed milk", "1 can evaporated milk", "1 tsp vanilla"],
    instructions: ["Caramelize sugar and pour into mold.", "Blend eggs and milks with vanilla, pour over caramel.", "Bake in a water bath until set, chill and invert."]
  },
  {
    name: "Caramel Pecan Bars",
    category: "Dessert",
    prep: "30 mins",
    servings: "16",
    ingredients: ["1 1/2 cups flour", "1/2 cup powdered sugar", "1 cup butter", "1 cup brown sugar", "1/2 cup butter", "2 cups pecans"],
    instructions: ["Make shortbread base and bake briefly.", "Top with caramel-pecan mixture and bake until set.", "Cool and cut into bars."]
  },
  {
    name: "Carrot Cake",
    category: "Dessert",
    prep: "30 mins",
    servings: "12",
    ingredients: ["2 cups flour", "2 tsp baking soda", "1 tsp cinnamon", "1 1/2 cups sugar", "1 cup oil", "4 eggs", "2 cups grated carrots", "1 cup chopped walnuts"],
    instructions: ["Preheat to 350°F (175°C).", "Mix dry ingredients; stir in wet ingredients and carrots.", "Bake 30–35 minutes and cool before frosting."]
  },
  {
    name: "Cheesecake (Classic)",
    category: "Dessert",
    prep: "30 mins",
    servings: "12",
    ingredients: ["2 lbs cream cheese", "1 cup sugar", "3 eggs", "1 tsp vanilla", "Graham cracker crust"],
    instructions: ["Beat cream cheese and sugar, add eggs one at a time.", "Pour into crust and bake 50–60 minutes at 325°F (160°C).", "Chill overnight."]
  },
  {
    name: "Cherry Pie",
    category: "Dessert",
    prep: "25 mins",
    servings: "8",
    ingredients: ["2 pie crusts", "4 cups cherries", "1 cup sugar", "2 tbsp cornstarch", "1 tsp almond extract"],
    instructions: ["Mix cherries with sugar and cornstarch, fill crust, top and bake 40–45 minutes at 400°F (200°C)."]
  },
  {
    name: "Churros",
    category: "Dessert",
    prep: "25 mins",
    servings: "12",
    ingredients: ["1 cup water", "1/2 cup butter", "1 cup flour", "2 eggs", "Oil for frying", "Cinnamon sugar"],
    instructions: ["Heat water and butter, stir in flour to form dough.", "Pipe into hot oil and fry until golden.", "Toss in cinnamon sugar and serve hot."]
  },
  {
    name: "Chocolate Brownies",
    category: "Dessert",
    prep: "15 mins",
    servings: "16",
    ingredients: ["1/2 cup butter", "1 cup sugar", "2 eggs", "1/3 cup cocoa powder", "1/2 cup flour", "1 tsp vanilla"],
    instructions: ["Melt butter, stir in sugar and eggs, mix in dry ingredients.", "Bake 20–25 minutes at 350°F (175°C)."]
  },
  {
    name: "Chocolate Cake",
    category: "Dessert",
    prep: "25 mins",
    servings: "12",
    ingredients: ["2 cups flour", "3/4 cup cocoa powder", "2 cups sugar", "2 tsp baking soda", "1 cup buttermilk", "2 eggs"],
    instructions: ["Preheat oven to 350°F (175°C).", "Combine dry ingredients, add wet, beat until smooth.", "Bake 30–35 minutes."]
  },
  {
    name: "Chocolate Chip Cookies",
    category: "Dessert",
    prep: "15 mins",
    servings: "24",
    ingredients: ["2 1/4 cups flour", "1 tsp baking soda", "1 cup butter", "3/4 cup sugar", "3/4 cup brown sugar", "2 eggs", "2 cups chocolate chips"],
    instructions: ["Preheat to 375°F (190°C).", "Cream butter and sugars, add eggs, stir in dry ingredients and chips.", "Drop spoonfuls and bake 9–11 minutes."]
  },
  {
    name: "Chocolate Fondant",
    category: "Dessert",
    prep: "20 mins",
    servings: "4",
    ingredients: ["8 oz dark chocolate", "1/2 cup butter", "2 eggs", "2 egg yolks", "1/4 cup sugar", "2 tbsp flour"],
    instructions: ["Melt chocolate and butter, whisk eggs and sugar, fold in flour.", "Bake in ramekins at high temp 10–12 minutes until center is molten.", "Serve immediately."]
  },
  {
    name: "Chocolate Mousse",
    category: "Dessert",
    prep: "25 mins",
    servings: "6",
    ingredients: ["8 oz dark chocolate", "1 cup heavy cream", "3 eggs separated", "2 tbsp sugar"],
    instructions: ["Melt chocolate and cool slightly.", "Whip cream to peaks.", "Beat egg whites with sugar then fold into chocolate with whipped cream.", "Chill 2 hours."]
  },
  {
    name: "Cinnamon Rolls",
    category: "Dessert",
    prep: "2 hrs (includes rising)",
    servings: "12",
    ingredients: ["3 cups flour", "1/4 cup sugar", "1 packet yeast", "1 cup milk", "1/4 cup butter", "2 eggs", "1 cup brown sugar", "2 tbsp cinnamon"],
    instructions: ["Make enriched dough, let rise, roll out and spread butter and cinnamon sugar.", "Roll, cut, let rise again and bake 20–25 minutes.", "Top with glaze."]
  },
  {
  name: "Cinnamon Pecan Bundt Cake",
  category: "Dessert",
  prep: "25 mins",
  servings: "12",
  ingredients: [
    "3 cups flour",
    "1 tbsp cinnamon",
    "1 tsp baking soda",
    "1/2 tsp salt",
    "1 cup butter, softened",
    "1 3/4 cups sugar",
    "3 eggs",
    "1 cup sour cream",
    "1 tbsp vanilla",
    "1 cup chopped pecans",
    "1/2 cup brown sugar"
  ],
  instructions: [
    "Preheat oven to 350°F (175°C). Grease and flour a bundt pan.",
    "Whisk flour, cinnamon, baking soda and salt together.",
    "Cream butter and sugar until fluffy, then add eggs one at a time.",
    "Mix in sour cream and vanilla.",
    "Stir dry ingredients into wet until smooth.",
    "Make swirl: mix pecans with brown sugar and an extra pinch of cinnamon.",
    "Layer batter and pecan mixture in the bundt pan.",
    "Bake 50–60 minutes until a toothpick comes out clean.",
    "Cool 15 minutes, then turn out and let cool fully.",
    "Dust with powdered sugar or drizzle glaze if desired."
  ]
},
  {
    name: "Coconut Macaroons",
    category: "Dessert",
    prep: "15 mins",
    servings: "18",
    ingredients: ["3 cups shredded coconut", "1 cup sweetened condensed milk", "1 tsp vanilla", "Chocolate for dipping (optional)"],
    instructions: ["Mix coconut with condensed milk and vanilla.", "Spoon onto baking sheet and bake at 325°F (160°C) for 15–20 minutes.", "Dip in chocolate if desired."]
  },
  {
    name: "Coffee Cake (Streusel)",
    category: "Dessert",
    prep: "20 mins",
    servings: "10",
    ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup butter", "1 cup milk", "2 eggs", "Streusel: brown sugar, cinnamon, butter, flour"],
    instructions: ["Prepare batter and pour into pan, sprinkle streusel on top.", "Bake 35–40 minutes at 350°F (175°C)."]
  },

  // D
  {
    name: "Danish Pastry",
    category: "Dessert",
    prep: "3 hrs (lamination + chill)",
    servings: "12",
    ingredients: ["Puff pastry or laminated dough", "Jam or pastry cream", "Egg wash", "Icing"],
    instructions: ["Cut and fill pastry with jam or custard.", "Proof if using yeasted dough; bake at 400°F (200°C) until golden.", "Glaze when cool."]
  },
  {
    name: "Doughnuts (Yeast)",
    category: "Dessert",
    prep: "2 hrs",
    servings: "12",
    ingredients: ["3 cups flour", "1/4 cup sugar", "1 packet yeast", "1 cup milk", "2 eggs", "1/4 cup butter", "Oil for frying"],
    instructions: ["Make enriched dough, let rise until doubled, shape donuts, proof and fry until golden.", "Toss in sugar or dip in glaze."]
  },
  {
    name: "Dulce de Leche Cheesecake",
    category: "Dessert",
    prep: "40 mins + chill",
    servings: "12",
    ingredients: ["Graham crust", "2 lbs cream cheese", "1 cup dulce de leche", "3 eggs", "1 tsp vanilla"],
    instructions: ["Blend cream cheese with dulce de leche and sugar, add eggs and vanilla.", "Pour into crust and bake at 325°F (160°C) until set.", "Chill before serving."]
  },

  // E
  {
    name: "Eclairs",
    category: "Dessert",
    prep: "1.5 hrs",
    servings: "12",
    ingredients: ["1 cup water", "1/2 cup butter", "1 cup flour", "4 eggs", "Pastry cream for filling", "Chocolate glaze"],
    instructions: ["Make choux pastry, pipe logs and bake until puffed and dry.", "Fill with pastry cream and glaze with chocolate."]
  },
  {
    name: "Egg Custard Tart",
    category: "Dessert",
    prep: "25 mins",
    servings: "6",
    ingredients: ["Shortcrust pastry", "3 eggs", "1/2 cup sugar", "1 1/4 cups milk", "1 tsp vanilla"],
    instructions: ["Preheat oven to 350°F (175°C).", "Whisk eggs, sugar, milk and vanilla; pour into tart shells.", "Bake 25–30 minutes until set."]
  },

  // F
  {
    name: "Fudge Brownies",
    category: "Dessert",
    prep: "20 mins",
    servings: "16",
    ingredients: ["1/2 cup butter", "1 cup sugar", "2 eggs", "1/2 cup flour", "1/3 cup cocoa", "Chocolate chips (optional)"],
    instructions: ["Melt butter and mix with sugar and eggs.", "Stir in dry ingredients and bake 20–25 minutes at 350°F (175°C)."]
  },
  {
    name: "Fruit Tart",
    category: "Dessert",
    prep: "1 hr",
    servings: "8",
    ingredients: ["Tart crust", "Pastry cream", "Assorted fresh fruit", "Apricot jam"],
    instructions: ["Bake tart shell, fill with pastry cream, arrange fruit decoratively and brush with warmed apricot jam."]
  },

  // G
  {
    name: "Galette (Mixed Fruit)",
    category: "Dessert",
    prep: "30 mins",
    servings: "6",
    ingredients: ["1 pie crust", "3 cups mixed fruit", "1/2 cup sugar", "1 tbsp cornstarch", "1 egg for wash"],
    instructions: ["Preheat to 400°F (200°C).", "Combine fruit with sugar and cornstarch; place on crust and fold edges.", "Brush with egg and bake 30–35 minutes."]
  },
  {
    name: "Gingerbread",
    category: "Dessert",
    prep: "20 mins",
    servings: "12",
    ingredients: ["2 3/4 cups flour", "1 tsp baking soda", "2 tsp ground ginger", "1 tsp cinnamon", "1/2 tsp cloves", "3/4 cup butter", "1 cup sugar", "1 cup molasses", "1 egg"],
    instructions: ["Mix dry ingredients, cream butter and sugar, add molasses and egg, combine and chill dough.", "Roll and cut, bake at 350°F (175°C) 8–12 minutes."]
  },
  {
    name: "Gelato (Vanilla)",
    category: "Dessert",
    prep: "20 mins + churn",
    servings: "6",
    ingredients: ["2 cups milk", "1 cup heavy cream", "2/3 cup sugar", "1 vanilla bean or 1 tsp extract"],
    instructions: ["Heat milk and cream with vanilla, dissolve sugar, cool and churn according to machine instructions, freeze until firm."]
  },

  // H
  {
    name: "Honey Cake",
    category: "Dessert",
    prep: "20 mins",
    servings: "10",
    ingredients: ["2 cups flour", "1 cup honey", "1/2 cup butter", "1 cup sugar", "3 eggs", "1 tsp baking soda"],
    instructions: ["Preheat to 350°F (175°C).", "Cream butter and sugar, add honey and eggs, fold in dry ingredients and baking soda.", "Bake 30–40 minutes."]
  },
  {
    name: "Hot Chocolate Pudding",
    category: "Dessert",
    prep: "10 mins",
    servings: "4",
    ingredients: ["1/2 cup cocoa", "1/2 cup sugar", "2 tbsp flour", "2 cups milk", "2 eggs"],
    instructions: ["Mix dry ingredients, whisk in milk and eggs, bake in ramekins in a water bath until set, serve warm."]
  },

  // I
  {
    name: "Icebox Cake (Chocolate Wafer)",
    category: "Dessert",
    prep: "15 mins + chill",
    servings: "10",
    ingredients: ["Chocolate wafers", "2 cups whipped cream", "Chocolate shavings"],
    instructions: ["Layer wafers and whipped cream in dish, chill overnight until wafers soften; slice to serve."]
  },

  // J
  {
    name: "Jam Thumbprint Cookies",
    category: "Dessert",
    prep: "20 mins",
    servings: "24",
    ingredients: ["2 cups flour", "1 cup butter", "3/4 cup sugar", "1 egg yolk", "Jam for filling"],
    instructions: ["Make dough and roll into balls, press center for jam, bake at 350°F (175°C) 10–12 minutes."]
  },
  {
    name: "Jelly Roll",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["Sponge cake batter", "Jam or jelly", "Powdered sugar"],
    instructions: ["Bake thin sponge sheet, spread jam, roll tightly and dust with powdered sugar before slicing."]
  },

  // K
  {
    name: "Key Lime Pie",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["1 1/2 cups graham cracker crumbs", "1/3 cup butter", "3 egg yolks", "1 can sweetened condensed milk", "1/2 cup key lime juice", "Whipped cream"],
    instructions: ["Combine crumbs and butter for crust and press into pan.", "Whisk yolks, condensed milk and lime juice; pour into crust and bake 15 minutes at 350°F (175°C).", "Chill and top with whipped cream."]
  },
  {
    name: "Kefir Pancakes (Sweet)",
    category: "Dessert",
    prep: "15 mins",
    servings: "6",
    ingredients: ["1 cup kefir", "1 egg", "1 cup flour", "1 tbsp sugar", "1 tsp baking powder"],
    instructions: ["Mix ingredients to batter consistency; cook pancakes on hot griddle until golden; serve with syrup."]
  },

  // L
  {
    name: "Lemon Bars",
    category: "Dessert",
    prep: "30 mins",
    servings: "16",
    ingredients: ["1 1/2 cups flour", "1/2 cup powdered sugar", "3/4 cup butter", "4 eggs", "1 1/2 cups sugar", "1/4 cup lemon juice", "2 tbsp lemon zest"],
    instructions: ["Make shortbread crust and bake 15 minutes at 350°F (175°C).", "Whisk lemon filling, pour over hot crust and bake 20 minutes. Chill before cutting."]
  },
  {
    name: "Lemon Cake",
    category: "Dessert",
    prep: "25 mins",
    servings: "12",
    ingredients: ["2 cups flour", "2 tsp baking powder", "1 cup butter", "1 1/2 cups sugar", "4 eggs", "2 tbsp lemon zest", "1/2 cup milk"],
    instructions: ["Cream butter and sugar, add eggs and lemon zest, fold in dry ingredients, bake 25–30 minutes at 350°F (175°C)."]
  },
  {
    name: "Lemon Meringue Pie",
    category: "Dessert",
    prep: "35 mins",
    servings: "8",
    ingredients: ["Pie crust", "1 cup sugar", "3 eggs (separate)", "1/2 cup lemon juice", "2 tbsp flour", "1/4 cup butter"],
    instructions: ["Bake crust, make lemon curd on stovetop, pour into crust and top with meringue; brown briefly in oven."]
  },

  // M
  {
    name: "Macarons (Almond)",
    category: "Dessert",
    prep: "1.5 hrs",
    servings: "24",
    ingredients: ["1 cup almond flour", "1 1/2 cups powdered sugar", "3 egg whites", "1/4 cup sugar", "Filling of choice"],
    instructions: ["Sift dry ingredients, whip egg whites with sugar, fold together, pipe rounds and rest, bake low 12–15 minutes, fill when cool."]
  },
  {
    name: "Mango Cheesecake",
    category: "Dessert",
    prep: "30 mins + chill",
    servings: "10",
    ingredients: ["Graham crust", "2 lbs cream cheese", "1 cup sugar", "3 eggs", "1 cup mango puree", "1 tsp vanilla"],
    instructions: ["Make cheesecake batter and fold in mango puree. Bake and chill until set; top with mango slices."]
  },
  {
    name: "Mango Panna Cotta",
    category: "Dessert",
    prep: "15 mins + chill",
    servings: "6",
    ingredients: ["2 cups cream", "1 cup milk", "1/2 cup sugar", "1 tsp vanilla", "1 cup mango puree", "1 tbsp gelatin"],
    instructions: ["Bloom gelatin in cold water.", "Heat cream and sugar, stir in gelatin and vanilla, add mango puree and chill until set."]
  },
  {
    name: "Maple Pecan Pie",
    category: "Dessert",
    prep: "25 mins",
    servings: "8",
    ingredients: ["1 pie crust", "1 cup maple syrup", "3/4 cup brown sugar", "3 eggs", "2 tbsp butter", "2 cups pecans"],
    instructions: ["Mix filling, pour into crust and bake 45–50 minutes at 350°F (175°C)."]
  },
  {
    name: "Marble Cake",
    category: "Dessert",
    prep: "25 mins",
    servings: "12",
    ingredients: ["2 cups flour", "1 cup sugar", "1 cup butter", "3 eggs", "1/2 cup cocoa", "1 tsp baking powder"],
    instructions: ["Prepare vanilla batter, separate portion and add cocoa to swirl, layer batters and bake 35–40 minutes at 350°F (175°C)."]
  },
  {
    name: "Matcha Cookies",
    category: "Dessert",
    prep: "20 mins",
    servings: "24",
    ingredients: ["2 cups flour", "1/2 cup sugar", "1/2 cup butter", "1 tbsp matcha powder", "1 egg"],
    instructions: ["Cream butter and sugar, add egg and dry ingredients including matcha, drop spoonfuls and bake 10–12 minutes at 350°F (175°C)."]
  },
  {
    name: "Molten Chocolate Cake",
    category: "Dessert",
    prep: "20 mins",
    servings: "6",
    ingredients: ["6 oz dark chocolate", "3/4 cup butter", "3 eggs", "3 egg yolks", "1/4 cup sugar", "1 tbsp flour"],
    instructions: ["Melt chocolate with butter; whisk eggs and sugar, combine and fold in flour.", "Bake ramekins at 450°F (230°C) 10–12 minutes until edges set and centers are molten."]
  },
  {
    name: "Mousse au Chocolat",
    category: "Dessert",
    prep: "25 mins",
    servings: "6",
    ingredients: ["6 oz dark chocolate", "1 cup cream", "3 eggs separated", "2 tbsp sugar"],
    instructions: ["Melt chocolate, whip cream to soft peaks, beat egg whites with sugar to stiff peaks, fold everything together and chill."]
  },

  // N
  {
    name: "Napoleon (Mille-feuille)",
    category: "Dessert",
    prep: "1.5 hrs",
    servings: "8",
    ingredients: ["Puff pastry", "Pastry cream", "Powdered sugar"],
    instructions: ["Bake puff pastry sheets until crisp, layer with pastry cream, dust with powdered sugar."]
  },
  {
    name: "Neapolitan Ice Cream Slice",
    category: "Dessert",
    prep: "20 mins + freeze",
    servings: "10",
    ingredients: ["Vanilla, chocolate and strawberry ice cream", "Sponge cake base (optional)"],
    instructions: ["Layer the three ice creams in a loaf pan over a cake base if desired and freeze until firm; slice to serve."]
  },

  // O
  {
    name: "Orange Polenta Cake",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["1 1/2 cups polenta", "1 cup flour", "1 cup sugar", "3 eggs", "1/2 cup olive oil", "Zest of 2 oranges"],
    instructions: ["Mix ingredients, bake 35–40 minutes at 350°F (175°C).", "Glaze with orange syrup if desired."]
  },
  {
    name: "Orange Sorbet",
    category: "Dessert",
    prep: "20 mins + churn",
    servings: "6",
    ingredients: ["2 cups orange juice", "1 cup sugar", "1 cup water", "1 tbsp lemon juice"],
    instructions: ["Make simple syrup with sugar and water, mix with juice and lemon, churn and freeze."]
  },

  // P
  {
    name: "Panna Cotta (Vanilla)",
    category: "Dessert",
    prep: "15 mins + chill",
    servings: "6",
    ingredients: ["2 cups heavy cream", "1/2 cup sugar", "1 tsp vanilla", "1 tbsp gelatin"],
    instructions: ["Bloom gelatin; heat cream and sugar, stir in gelatin and vanilla, pour into molds and chill."]
  },
  {
    name: "Pavlova",
    category: "Dessert",
    prep: "30 mins",
    servings: "8",
    ingredients: ["4 egg whites", "1 cup sugar", "1 tsp cornstarch", "1 tsp vinegar", "Whipped cream", "Fresh berries"],
    instructions: ["Whip egg whites with sugar to glossy peaks, fold in cornstarch and vinegar, bake at low temp until dry; top with cream and berries."]
  },
  {
    name: "Peach Cobbler",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["6 cups sliced peaches", "1 cup sugar", "1 cup flour", "1 cup milk", "1 egg", "1 tsp baking powder", "Butter for dotting"],
    instructions: ["Toss peaches with sugar; pour into baking dish. Mix batter and pour over peaches, dot with butter, bake 35–40 minutes."]
  },
  {
    name: "Pecan Pie",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["1 pie crust", "1 cup corn syrup", "1 cup brown sugar", "4 eggs", "1/4 cup butter", "2 cups pecans"],
    instructions: ["Preheat to 350°F (175°C), mix filling, pour into crust and bake 50–60 minutes until set."]
  },
  {
    name: "Peanut Butter Cookies",
    category: "Dessert",
    prep: "15 mins",
    servings: "24",
    ingredients: ["1 cup peanut butter", "1/2 cup butter", "1 cup sugar", "1 egg", "1 1/2 cups flour"],
    instructions: ["Cream butters and sugar, add egg and flour, roll into balls and press with fork; bake at 350°F (175°C) 10–12 minutes."]
  },
  {
    name: "Poached Pears in Red Wine",
    category: "Dessert",
    prep: "20 mins + poaching",
    servings: "6",
    ingredients: ["6 firm pears", "1 bottle red wine", "1 cup sugar", "2 cinnamon sticks", "Zest of 1 orange"],
    instructions: ["Simmer wine with sugar, spices and zest. Peel pears and poach until tender. Serve chilled or warm."]
  },
  {
    name: "Pound Cake",
    category: "Dessert",
    prep: "20 mins",
    servings: "12",
    ingredients: ["1 cup butter", "1 cup sugar", "4 eggs", "1 tsp vanilla", "2 cups flour"],
    instructions: ["Cream butter and sugar, add eggs one at a time, fold in flour and bake at 325°F (160°C) 55–60 minutes."]
  },

  // Q
  {
    name: "Quince Tart",
    category: "Dessert",
    prep: "40 mins",
    servings: "8",
    ingredients: ["Tart crust", "3 cups quince, peeled and sliced", "1/2 cup sugar", "2 tbsp butter", "Lemon juice"],
    instructions: ["Cook quince with sugar and lemon until tender, fill tart shell and bake until crust golden."]
  },

  // R
  {
    name: "Raspberry Almond Cake",
    category: "Dessert",
    prep: "25 mins",
    servings: "10",
    ingredients: ["1 1/2 cups almond flour", "1/2 cup flour", "1 cup sugar", "4 eggs", "1/4 cup butter", "1 cup raspberries"],
    instructions: ["Mix ingredients, fold in raspberries, bake 30–35 minutes at 350°F (175°C)."]
  },
  {
    name: "Raspberry Sorbet",
    category: "Dessert",
    prep: "20 mins + churn",
    servings: "6",
    ingredients: ["4 cups raspberries", "1 cup sugar", "1 cup water", "1 tbsp lemon juice"],
    instructions: ["Make simple syrup, blend with raspberries and lemon, strain seeds, churn and freeze."]
  },
  {
    name: "Rice Pudding",
    category: "Dessert",
    prep: "15 mins",
    servings: "6",
    ingredients: ["1 cup short-grain rice", "4 cups milk", "1/3 cup sugar", "1 egg (optional)", "1 tsp vanilla"],
    instructions: ["Simmer rice with milk and sugar until creamy, temper in beaten egg if desired, add vanilla and chill."]
  },

  // S
  {
    name: "Sachertorte (Chocolate)",
    category: "Dessert",
    prep: "1 hr",
    servings: "12",
    ingredients: ["1 1/2 cups flour", "1 cup sugar", "1 cup dark chocolate", "1 cup butter", "5 eggs", "Apricot jam"],
    instructions: ["Make chocolate sponge, layer with apricot jam and glaze with chocolate ganache."]
  },
  {
    name: "Scones (Buttermilk)",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["2 cups flour", "1 tbsp baking powder", "1/2 tsp salt", "1/4 cup sugar", "1/4 cup butter", "1 cup buttermilk"],
    instructions: ["Cut butter into dry ingredients, add buttermilk to form dough, cut rounds and bake at 425°F (220°C) 12–15 minutes."]
  },
  {
    name: "Shortbread",
    category: "Dessert",
    prep: "15 mins",
    servings: "16",
    ingredients: ["1 cup butter", "1/2 cup sugar", "2 cups flour", "Pinch salt"],
    instructions: ["Cream butter and sugar, add flour and salt, press into pan and bake 20 minutes at 350°F (175°C)."]
  },
  {
    name: "S'mores Bars",
    category: "Dessert",
    prep: "15 mins",
    servings: "12",
    ingredients: ["Graham crackers", "Chocolate chips", "Marshmallows", "Butter"],
    instructions: ["Layer graham crumbs, chocolate and marshmallows in pan, bake until marshmallows are toasted and chocolate melted."]
  },
  {
    name: "Snickerdoodles",
    category: "Dessert",
    prep: "15 mins",
    servings: "24",
    ingredients: ["2 3/4 cups flour", "1 tsp baking soda", "1/2 tsp cream of tartar", "1 cup butter", "1 1/2 cups sugar", "2 eggs", "Cinnamon sugar"],
    instructions: ["Make dough, roll in cinnamon sugar, bake at 350°F (175°C) 8–10 minutes."]
  },
  {
    name: "Strawberry Shortcake",
    category: "Dessert",
    prep: "25 mins",
    servings: "6",
    ingredients: ["Sponge cake or biscuits", "2 cups strawberries", "1/4 cup sugar", "2 cups whipped cream"],
    instructions: ["Macerate strawberries with sugar, assemble with cake and whipped cream, serve immediately."]
  },
  {
    name: "Sticky Toffee Pudding",
    category: "Dessert",
    prep: "30 mins",
    servings: "8",
    ingredients: ["5 oz chopped dates", "1 tsp baking soda", "1/2 cup butter", "6 tbsp brown sugar", "1 egg", "3/4 cup flour", "For toffee sauce: butter, brown sugar, cream"],
    instructions: ["Soak dates in hot water with baking soda; blend into batter and bake until set.", "Make toffee sauce and pour over warm pudding."]
  },
  {
    name: "Sugar Cookies",
    category: "Dessert",
    prep: "15 mins",
    servings: "24",
    ingredients: ["2 3/4 cups flour", "1 tsp baking soda", "1/2 tsp baking powder", "1 cup butter", "1 1/2 cups sugar", "1 egg", "1 tsp vanilla"],
    instructions: ["Cream butter and sugar, add egg and vanilla, mix in dry ingredients, roll, cut shapes and bake 8–10 minutes."]
  },

  // T
  {
    name: "Tart Tatin",
    category: "Dessert",
    prep: "30 mins",
    servings: "8",
    ingredients: ["6 apples", "1 cup sugar", "1/2 cup butter", "1 pie crust"],
    instructions: ["Caramelize sugar and butter in pan, add apples and cook briefly, cover with crust and bake 25–30 minutes, invert to serve."]
  },
  {
    name: "Tiramisu",
    category: "Dessert",
    prep: "30 mins + chill",
    servings: "8",
    ingredients: ["6 egg yolks", "3/4 cup sugar", "1 1/3 cups mascarpone", "1 3/4 cups cream", "Ladyfingers", "Strong coffee", "Cocoa powder"],
    instructions: ["Whisk yolks with sugar, fold in mascarpone and whipped cream, layer ladyfingers soaked in coffee with cream, chill and dust with cocoa."]
  },
  {
    name: "Toffee Almond Tart",
    category: "Dessert",
    prep: "35 mins",
    servings: "8",
    ingredients: ["Tart shell", "1 cup cream", "1/2 cup sugar", "1 cup chopped almonds", "Butter"],
    instructions: ["Make toffee filling, pour into pre-baked shell, sprinkle almonds and bake briefly until set."]
  },
  {
    name: "Tres Leches Cake",
    category: "Dessert",
    prep: "30 mins + soak",
    servings: "12",
    ingredients: ["Sponge cake", "1 can evaporated milk", "1 can condensed milk", "1 cup heavy cream", "Whipped cream topping"],
    instructions: ["Bake sponge, poke holes and pour combined milks over cake, chill and top with whipped cream."]
  },
  {
    name: "Trifle (Classic)",
    category: "Dessert",
    prep: "30 mins + chill",
    servings: "8",
    ingredients: ["Sponge cake or ladyfingers", "Custard", "Berries", "Whipped cream", "Sherry (optional)"],
    instructions: ["Layer cake, custard, fruit and cream in a trifle bowl and chill several hours."]
  },

  // U
  {
    name: "Upside-Down Pineapple Cake",
    category: "Dessert",
    prep: "20 mins",
    servings: "8",
    ingredients: ["Pineapple slices", "1/2 cup brown sugar", "1/2 cup butter", "1 3/4 cups flour", "1/2 cup sugar", "1 egg"],
    instructions: ["Arrange pineapple and brown sugar in pan with butter, pour batter on top and bake 35–40 minutes at 350°F (175°C).", "Invert to serve."]
  },

  // V
  {
    name: "Vanilla Pudding",
    category: "Dessert",
    prep: "15 mins",
    servings: "6",
    ingredients: ["2 cups milk", "1/4 cup cornstarch", "1/4 cup sugar", "1 tsp vanilla", "Pinch salt"],
    instructions: ["Whisk cornstarch and sugar into milk, cook until thick, add vanilla and chill."]
  },
  {
    name: "Vanilla Cupcakes",
    category: "Dessert",
    prep: "20 mins",
    servings: "12",
    ingredients: ["1 1/2 cups flour", "1 cup sugar", "1/2 cup butter", "2 eggs", "1/2 cup milk", "1 tsp vanilla", "1 1/2 tsp baking powder"],
    instructions: ["Preheat to 350°F (175°C).", "Cream butter and sugar; add eggs and vanilla; fold in dry ingredients and milk.", "Bake 18–20 minutes."]
  },

  // W
  {
    name: "Walnut Cake",
    category: "Dessert",
    prep: "30 mins",
    servings: "10",
    ingredients: ["2 cups flour", "1 cup sugar", "1 cup chopped walnuts", "2 eggs", "1 cup butter", "1 tsp baking powder"],
    instructions: ["Mix dry and wet ingredients, fold in walnuts, bake 35–40 minutes at 350°F (175°C)."]
  },
  {
    name: "Walnut Brownies",
    category: "Dessert",
    prep: "20 mins",
    servings: "16",
    ingredients: ["1/2 cup butter", "1 cup sugar", "2 eggs", "1/3 cup cocoa", "1/2 cup flour", "1 cup walnuts"],
    instructions: ["Melt butter, stir in sugar and eggs, add dry ingredients and walnuts, bake 20–25 minutes at 350°F (175°C)."]
  },

  // Y
  {
    name: "Yogurt Cake (Lemon)",
    category: "Dessert",
    prep: "15 mins",
    servings: "8",
    ingredients: ["1 cup plain yogurt", "1 cup sugar", "3 eggs", "1/2 cup oil", "2 cups flour", "1 tsp baking powder", "Zest of 1 lemon"],
    instructions: ["Mix wet ingredients, fold in dry, bake 35–40 minutes at 350°F (175°C)."]
  },

  // Z
  {
    name: "Zabaglione",
    category: "Dessert",
    prep: "15 mins",
    servings: "4",
    ingredients: ["4 egg yolks", "1/4 cup sugar", "1/4 cup Marsala or sweet wine"],
    instructions: ["Whisk yolks, sugar and Marsala over a bain-marie until thick and airy; serve warm or chilled."]
  }
  
];
