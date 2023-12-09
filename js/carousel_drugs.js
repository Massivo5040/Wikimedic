const carousels = document.querySelectorAll(".carousel-container .carousel");
const btns = document.querySelectorAll(".carousel-container span");
const medicine_width = carousels[0].querySelector(".medicine").clientWidth;
const scroll = medicine_width + (carousels[0].clientWidth / 100) * 5;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = btn.parentElement.children[1].dataset.number;

    switch (btn.id) {
      case "left":
        carousels[num].scrollLeft += -scroll;
        break;
      case "right":
        carousels[num].scrollLeft += scroll;
        break;
    }
  });
});
