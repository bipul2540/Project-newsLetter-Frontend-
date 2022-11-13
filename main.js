window.onload = function digital_fn() {
  // toggle button
  let toggle = document.querySelector(".btn-toggle");
  let body = document.querySelector(".body");
  let html = document.querySelector(".html")
  let nav = document.querySelector(".nav-area");
  toggle.addEventListener("click", () => {
    console.log("clicked");
    if (toggle.classList.contains("fa-bars")) {
      toggle.classList.replace("fa-bars", "fa-times");
      nav.classList.add("active");
      body.classList.add("disable-scroll");
      html.classList.add("disable-scroll");
    } else {
      toggle.classList.replace("fa-times", "fa-bars");
      nav.classList.remove("active");
      body.classList.remove("disable-scroll");
      html.classList.remove("disable-scroll");
    }
  });
};
