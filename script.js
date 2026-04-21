// Page Loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Temple Seva Page Loaded");
});

/* Optional: Highlight rows on hover */
const tables = document.querySelectorAll("table");

tables.forEach((table) => {
  const rows = table.querySelectorAll("tr");

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "#ffe0b2";
    });

    row.addEventListener("mouseleave", () => {
      row.style.backgroundColor = "";
    });
  });
});

/* Optional: Smooth scroll (if you add navigation later) */
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});
