import requests

def get_dessert_recipe(dessert):
    url = f"https://www.themealdb.com/api/json/v1/1/search.php?s={dessert}"
    try:
        response = requests.get(url)
        result = response.json()
        if result.get('meals') and len(result['meals']) > 0:
            meal = result['meals'][0]
            print(f"\nRecipe for {meal['strMeal']}:")
            # Print ingredients and measures
            print("\nIngredients:")
            for i in range(1, 21):
                ingredient = meal.get(f"strIngredient{i}")
                measure = meal.get(f"strMeasure{i}")
                if ingredient and ingredient.strip():
                    print(f"- {ingredient.strip()} ({measure.strip() if measure else ''})")
            print("\nInstructions:")
            print(meal['strInstructions'])
        else:
            print("Sorry, I could not find that dessert.")
    except Exception as e:
        print("Error fetching recipe:", e)

def search_by_ingredient(ingredient):
    url = f"https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}"
    try:
        response = requests.get(url)
        result = response.json()
        meals = result.get('meals')
        if meals:
            print(f"\nRecipes with ingredient '{ingredient}':")
            for idx, meal in enumerate(meals, 1):
                print(f"{idx}. {meal['strMeal']}")
            choice = input("\nEnter the number of the recipe to see details, or press Enter to cancel: ").strip()
            if choice.isdigit():
                idx = int(choice) - 1
                if 0 <= idx < len(meals):
                    selected_meal = meals[idx]['strMeal']
                    get_dessert_recipe(selected_meal)
                else:
                    print("Invalid selection.")
            else:
                print("No recipe selected.")
        else:
            print(f"No recipes found with ingredient '{ingredient}'.")
    except Exception as e:
        print("Error searching by ingredient:", e)

def ask_dessert():
    while True:
        mode = input("\nSearch by (1) dessert name, (2) ingredient, or (3) cancel? Enter 1, 2, or 3: ").strip()
        if mode == '1':
            answer = input("Ask me about a dessert recipe: ")
            get_dessert_recipe(answer)
        elif mode == '2':
            ingredient = input("Enter an ingredient to search for: ")
            search_by_ingredient(ingredient)
        elif mode == '3':
            print("Exiting the program.")
            break
        else:
            print("Please enter 1, 2, or 3.")

ask_dessert()
