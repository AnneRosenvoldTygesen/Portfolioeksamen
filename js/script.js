const scrollHint = document.querySelector(".scroll_hint");

window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 150) {
    scrollHint.style.opacity = "0";
  } else {
    scrollHint.style.opacity = "1";
  }
});
