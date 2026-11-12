
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

let currentTheme = localStorage.getItem("theme") || "night";

function applyTheme() {
    root.dataset.theme = currentTheme;

    const isNight = currentTheme === "night";

    themeToggle.innerHTML = `
        <i data-lucide="${isNight ? "moon" : "sun"}"></i>
    `;

    themeToggle.setAttribute(
        "aria-label",
        isNight ? "Switch to light theme" : "Switch to night theme"
    );

    lucide.createIcons();
}

themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "night" ? "light" : "night";

    localStorage.setItem("theme", currentTheme);

    applyTheme();
});

applyTheme();
