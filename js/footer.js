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
    loadHTML("#footer", "footer.html");

    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "" || currentPage === "index.html") {
      // On index page
      loadCSS("css/footer-v1.css");
    } else {
      // On other pages
      loadCSS("css/footer-v2.css");
    }
  }
});
