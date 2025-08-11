// Modified loadHTML function to accept a callback
function loadHTML(selector, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#header-v2")) {
    loadHTML("#header-v2", "/header-v2.html", () => {
      // Initialize hamburger menu toggle after header is loaded
      const menuIcon = document.getElementById('menuIcon');
      const menuOverlay = document.getElementById('menuOverlay');

      if (menuIcon && menuOverlay) {
        menuIcon.addEventListener('click', () => {
          menuIcon.classList.toggle('active');
          menuOverlay.classList.toggle('active');
        });
      }
    });

    // Load header CSS as before (keep your existing CSS logic here)
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    let cssPath;

    if (pathSegments.length === 0 || pathSegments[pathSegments.length - 1] === "index.html") {
      // Root index page or /folder/index.html
    } else {
      // Pages in subfolders
      cssPath = "/css/header-v2.css";
    }

    if(cssPath) {
      loadCSS(cssPath);
    }
  }
});
