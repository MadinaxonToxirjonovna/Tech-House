function setYear() {
  document.querySelectorAll("#year").forEach(y => {
    y.textContent = new Date().getFullYear();
  });
}

function getCart() {
  try { return JSON.parse(localStorage.getItem("cart")) || []; }
  catch { return []; }
}

function getFavs() {
  try { return JSON.parse(localStorage.getItem("favorites")) || []; }
  catch { return []; }
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const total = getCart().reduce((s, i) => s + (i.qty || 0), 0);
  el.textContent = `(${total})`;
}

function updateFavCount() {
  const el = document.getElementById("favCount");
  if (!el) return;
  el.textContent = `(${getFavs().length})`;
}

function initContactForm() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Xabaringiz yuborildi ✅");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  updateCartCount();
  updateFavCount();
  initContactForm();
});
