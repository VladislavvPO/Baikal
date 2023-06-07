const toTopBtn = document.querySelector(".scroll__btn");
toTopBtn.addEventListener("click", (() => {
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth"
  })
}
));
