const stars = document.querySelectorAll(".fa-star");

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    star.classList.toggle("fa-solid");
    console.log(e);
  });
});
