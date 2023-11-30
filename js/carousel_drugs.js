const carousel = document.querySelector(".carousel-container .carousel");
const btns = document.querySelectorAll(".carousel-container span");
const figure = carousel.querySelector("figure").clientWidth;
const scroll = figure + (carousel.clientWidth / 100) * 5;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("entrou função");
    switch (btn.id) {
      case "left":
        console.log("sequerda");
        carousel.scrollLeft += -scroll;
        break;
      case "right":
        console.log("direita");
        carousel.scrollLeft += scroll;
        break;
    }
  });
});
