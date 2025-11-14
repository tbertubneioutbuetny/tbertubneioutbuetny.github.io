// === Load recipe data from recipes-large.js ===
// window.recipes is already defined in recipes-large.js

// Ensure recipes exist and normalize fields
window

  /* ====== ELEMENTS ====== */
  const searchBox = document.getElementById("search-box");
  const list = document.getElementById("recipe-list");

  const recipesNav = document.querySelector('a[href="#recipes"]');
  const recipesSection = document.getElementById("recipes");

  /* ====== MAKE NAV OPEN RECIPES SECTION ====== */
  if (recipesNav && recipesSection) {
    recipesNav.addEventListener("click", (e) => {
      e.preventDefault();
      recipesSection.style.display = "block";
      recipesSection.scrollIntoView({ behavior: "smooth" });
      renderTiles(window.recipes);
    });
  }

  /* ====== INITIAL RENDER ====== */
  renderTiles(window.recipes);

  /* ====== SEARCH FILTER ====== */
  searchBox.addEventListener("input", () => {
    const q = searchBox.value.toLowerCase();
    const filtered = window.recipes.filter(r =>
      r.name.toLowerCase().includes(q)
    );
    renderTiles(filtered);
  });
;

/* ====== TILE RENDERING ====== */

function renderTiles(recipes) {
  const list = document.getElementById("recipe-list");

  list.innerHTML = recipes
    .map(r => `
      <div class="recipe-tile" onclick="openRecipe('${r.name.replace(/'/g, "\\'")}')">
        <h4>${r.name}</h4>
        <p class="subtle">${r.prep} • Serves ${r.servings}</p>
      </div>
    `)
    .join("");
}

/* ====== MODAL ====== */

function openRecipe(name) {
  const recipe = window.recipes.find(r => r.name === name);
  if (!recipe) return;

  const modal = document.getElementById("recipe-modal");
  const box = document.getElementById("modal-content");

  box.innerHTML = `
    <button id="close-modal" class="close-btn">×</button>
    <h2>${recipe.name}</h2>

    <p><strong>Prep:</strong> ${recipe.prep}</p>
    <p><strong>Servings:</strong> ${recipe.servings}</p>

    <h3>Ingredients</h3>
    <ul>
      ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Instructions</h3>
    <ol>
      ${recipe.instructions.map(s => `<li>${s}</li>`).join("")}
    </ol>
  `;

  modal.style.display = "flex";

  // Bind close button again
  document.getElementById("close-modal").addEventListener("click", closeModal);
}

function closeModal() {
  document.getElementById("recipe-modal").style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("recipe-modal");
  if (e.target === modal) closeModal();
});
