const scrollHint = document.querySelector(".scroll_hint");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollHint.style.opacity = "0";
  } else {
    scrollHint.style.opacity = "1";
  }
});

// const dropdownBtn = document.querySelector(".dropdown_btn");
// const dropdownMenu = document.querySelector(".dropdown_content");

// dropdownBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   dropdownMenu.classList.toggle("show");
// });
