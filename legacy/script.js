const root = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");
const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll("main section");
const fadeElements = document.querySelectorAll(".fade-up");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeToggle.textContent = "Light";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    body.classList.add("loaded");
    const loader = document.getElementById("loader");
    if (loader) loader.remove();
  }, 500);
});

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    themeToggle.textContent = "Dark";
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Light";
    localStorage.setItem("theme", "dark");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "d" && !["INPUT", "TEXTAREA"].includes(event.target.tagName)) {
    event.preventDefault();
    themeToggle.click();
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const isVisible = window.scrollY > 500;
  backToTop.classList.toggle("visible", isVisible);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => revealObserver.observe(el));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-list a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.removeAttribute("aria-current"));
        if (activeLink) activeLink.setAttribute("aria-current", "true");
      }
    });
  },
  { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));
