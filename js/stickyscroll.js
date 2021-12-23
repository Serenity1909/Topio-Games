const header = document.getElementById("sticky-header");
const main = document.getElementById("main");
const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 450) {
    header.classList.add("sticky");
    main.style.paddingTop = "200px";
  } else {
    header.classList.remove("sticky");
    main.style.paddingTop = "0px";
  }
});
