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
    loadHTML("#header-v2", "header-v2.html");

    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "" || currentPage === "index.html") {
    } else {
      // On other pages
      loadCSS("css/header-v2.css");
    }
  }
});
