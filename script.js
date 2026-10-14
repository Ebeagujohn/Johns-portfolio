// // 1. Grab the elements we need from the page
// const menuBtn = document.getElementById("menu-btn");
// const nav = document.getElementById("nav");

// // 2. When the hamburger button is clicked, show or hide the menu
// menuBtn.addEventListener("click", () => {
//     // toggle() adds the "open" class if it's missing, removes it if it's there
//     const isOpen = nav.classList.toggle("open");

//     // Swap the icon: ✕ when open, ☰ when closed
//     menuBtn.textContent = isOpen ? "✕" : "☰";

//     // Tell screen readers whether the menu is expanded
//     menuBtn.setAttribute("aria-expanded", isOpen);
// });

// // 3. Close the menu after a link is tapped (so it doesn't cover the page)
// nav.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//         nav.classList.remove("open");
//         menuBtn.textContent = "☰";
//         menuBtn.setAttribute("aria-expanded", "false");
//     });
// });
// ### 3. Updated JavaScript (`script.js`)
// This setup script evaluates active states, hooks up the toggler event listener, updates the button icons (`☀️` / `🌙`), and caches preferences.

// ```javascript
// // 1. Grab the elements we need from the page
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// ================= THEME TOGGLE SYSTEM =================

// Check for saved theme or fall back to system user preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  htmlElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
} else {
  htmlElement.setAttribute("data-theme", "light");
  themeToggle.textContent = "🌙";
}

// Toggle logic
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  let newTheme = "light";

  if (currentTheme === "light") {
    newTheme = "dark";
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});


// ================= NAVIGATION MOBILE SYSTEM =================

// 2. When the hamburger button is clicked, show or hide the menu
menuBtn.addEventListener("click", () => {
  // toggle() adds the "open" class if it's missing, removes it if it's there
  const isOpen = nav.classList.toggle("open");
  
  // Swap the icon: ✕ when open, ☰ when closed
  menuBtn.textContent = isOpen ? "✕" : "☰";
  
  // Tell screen readers whether the menu is expanded
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// 3. Close the menu after a link is tapped (so it doesn't cover the page)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});