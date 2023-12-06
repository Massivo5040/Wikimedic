const chevrons = document.querySelectorAll(".fa-solid");
const texts = document.querySelectorAll(".informations p");

chevrons.forEach((chevron) => {
  chevron.addEventListener("click", (e) => {
    chevron.classList.toggle("rotate");
    let id_chevron = e.target.id;
    const text = texts[id_chevron];
    if (text.classList.contains("active")) {
      text.classList.remove("active");
      text.classList.add("deactive");
    } else {
      text.classList.remove("deactive");
      text.classList.add("active");
    }
  });
});
