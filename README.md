# Simple Recipes — Static Recipe Site

A no-contact recipe website with featured desserts and tools to look up more recipes.

## Files included

- `index.html` — main recipe site (no contact section per your family rule)
- `style.css` — warm, recipe-friendly styles
- `recipes.js` — sample recipes (Chocolate Chip Cookies, Classic Brownies, Vanilla Cupcakes)
- `site.js` — small helpers (footer year, smooth scrolling)
- `dessert_ai.py` — Python tool to fetch recipes from TheMealDB API

## Preview locally

1. Open the folder `/Users/easton/Desktop/recipe-site` in your terminal:
```bash
cd ~/Desktop/recipe-site
python3 -m http.server 8000
```

2. Open your browser to: `http://localhost:8000`

## Deploy to GitHub Pages

1. Create a new repository on GitHub named: `tbertubneioutbuetny.github.io`
2. From the `recipe-site` folder, run:

```bash
cd ~/Desktop/recipe-site
git init
git add .
git commit -m "Recipe site launch"
git remote add origin https://github.com/tbertubneioutbuetny/tbertubneioutbuetny.github.io.git
git branch -M main
git push -u origin main
```

3. Visit: `https://tbertubneioutbuetny.github.io` — your site will be live in ~1 minute.

## Customizing recipes

- Edit `recipes.js`: add or remove recipes in the `recipes` array.
- Each recipe object has: `name`, `category`, `time`, `servings`, `ingredients`, `instructions`.

## Python tool (dessert_ai.py)

Run it locally to search for dessert recipes:
```bash
python3 dessert_ai.py
```

Then choose to search by name or ingredient. Requires the `requests` library:
```bash
pip install requests
```

## Next steps

- Add more recipes to `recipes.js`.
- Customize colors in `style.css` (the `:root` variables).
- Replace sample recipes with your own.
- Consider adding a recipe search or filter if you expand the site.
