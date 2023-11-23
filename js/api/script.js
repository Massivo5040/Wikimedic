const search = document.querySelector("#search");
/* const height = screen.height;
const width = screen.width;

if (search != null) {
  if (width <= 600) {
    search.placeholder = "Procurar...";
  } else {
    search.placeholder = "Procurar remédio"
  }
} */

const Resultados = document.querySelector('#searchResultsDiv')

search.addEventListener('focus', ()=>{
  Resultados.style.display = 'block';
})

search.addEventListener('blur', ()=>{
  setTimeout(()=>{
    Resultados.style.display = 'none';
  }, 200)
  
})