const carousel = document.querySelector(".carousel-container .carousel");
const btns = document.querySelectorAll(".carousel-container span");
const anchor = carousel.querySelector("a").clientWidth;
const scroll = anchor + (carousel.clientWidth / 100) * 5;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "left":
        carousel.scrollLeft += -scroll;
        break;
      case "right":
        carousel.scrollLeft += scroll;
        break;
    }
  });
});
