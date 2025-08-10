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
  if (document.querySelector("#footer")) {
    loadHTML("#footer", "/footer.html");

    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    // e.g. "/" → []
    // "/vfx/" → ["vfx"]
    // "/resume/" → ["resume"]
    // "/resume/index.html" → ["resume", "index.html"]

    let cssPath;

    if (pathSegments.length === 0 || pathSegments[pathSegments.length - 1] === "index.html") {
      // root index or /folder/index.html
      cssPath = "/css/footer-v1.css";
    } else {
      // inside a folder (e.g., /resume/resume.html)
      cssPath = "/css/footer-v2.css";
    }

    loadCSS(cssPath);
  }
});