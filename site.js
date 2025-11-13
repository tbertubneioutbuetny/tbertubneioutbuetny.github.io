// site.js — Optimized and modernized

// ===== Global Helpers =====
document.addEventListener("DOMContentLoaded", () => {
  // Update footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Simple smooth scroll for header nav
  document.querySelectorAll(".site-header nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      // Hide all sections except target
      document.querySelectorAll("main section").forEach(sec => {
        sec.style.display = sec === target ? "block" : "none";
      });

      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Initialize recipe + drinks sections
  initRecipes();
  initDrinks();
});

// ===== Recipes Section =====
function initRecipes() {
  if (typeof recipes === "undefined") return;

  const list = document.getElementById("recipe-list");
  const searchBox = document.getElementById("search-box");

  const render = (items) => {
    list.innerHTML = "";
    items.forEach(r => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <h4>${r.name}</h4>
        <p><strong>Category:</strong> ${r.category}</p>
        <p><strong>Time:</strong> ${r.time}</p>
        <p><strong>Servings:</strong> ${r.servings}</p>
        <h5>Ingredients:</h5>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <h5>Instructions:</h5>
        <ol>${r.instructions.map(step => `<li>${step}</li>`).join("")}</ol>
      `;
      list.appendChild(card);
    });
  };

  render(recipes);

  searchBox.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    const filtered = recipes.filter(r => r.name.toLowerCase().includes(q));
    render(filtered);
  });
}

// ===== Drinks Section (Lazy Loading + Search) =====
function initDrinks() {
  if (typeof drinks === "undefined") return;

  const list = document.getElementById("drinks-list");
  const searchBox = document.getElementById("drinks-search-box");
  const loadMoreBtn = document.createElement("button");

  loadMoreBtn.textContent = "Load more drinks";
  loadMoreBtn.id = "load-more-drinks";
  Object.assign(loadMoreBtn.style, {
    display: "none",
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    border: "none",
    background: "#d4845c",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
  });
  list.after(loadMoreBtn);

  const PAGE_SIZE = 12;
  let currentPage = 1;
  let filtered = [...drinks];

  const render = () => {
    list.innerHTML = "";
    const visible = filtered.slice(0, currentPage * PAGE_SIZE);

    visible.forEach(d => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <h4>${d.name}</h4>
        <p><strong>Category:</strong> ${d.category || "Drink"}</p>
        <h5>Ingredients:</h5>
        <ul>${d.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        ${d.instructions ? `<p>${d.instructions}</p>` : ""}
      `;
      list.appendChild(card);
    });

    loadMoreBtn.style.display = visible.length < filtered.length ? "block" : "none";
  };

  searchBox.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    filtered = drinks.filter(d =>
      d.name.toLowerCase().includes(q) ||
      (d.category && d.category.toLowerCase().includes(q))
    );
    currentPage = 1;
    render();
  });

  loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    render();
  });

  render();
}
