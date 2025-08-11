function loadHTML(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.querySelector(selector).innerHTML = data);
}

function loadCSS(filename) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = filename;

  // Log when CSS is loaded successfully
  link.onload = () => {
    console.log(`CSS file loaded: ${filename}`);
  };

  // Log if there is an error loading CSS
  link.onerror = () => {
    console.error(`Failed to load CSS file: ${filename}`);
  };

  document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#header-v2")) {
    loadHTML("#header-v2", "/header-v2.html");

    const pathSegments = window.location.pathname.split("/").filter(Boolean);

    let cssPath;

    if (pathSegments.length === 0 || pathSegments[pathSegments.length - 1] === "index.html") {
      // Root index page or /folder/index.html
    } else {
      // Pages in subfolders
      cssPath = "/css/header-v2.css";
    }

    loadCSS(cssPath);
  }
});

