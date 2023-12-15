import { serverURL } from "./env.js"
const PesquisarMedicamentos = async (n) => {
  // conecta a api ajudando a retornar
  const data = {
    name : n
  }
  console.log(data)
  try {
    const response = await fetch(
      serverURL+`/medicamentos/search`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }
    );

    if (!response.ok) {
      throw new Error("Erro na requisição.");
    }

    const json = await response.json();
    return json
  } catch (error) {
    throw error;
  }
};

// método retorna medicamentos em um array
// porém o array deve ser criado antes, e o valor será atribuído a ele
const pesquisar = async (name) => {
  try {
    const medicamentos = await PesquisarMedicamentos(name);
    console.log(medicamentos);
    // Seleciona o elemento pai onde você deseja adicionar os resultados
    const parentElement = document.getElementById("result");

    // Limpa quaisquer elementos filhos existentes
    parentElement.innerHTML = "";

    // Itera sobre os medicamentos e cria elementos para cada um
    medicamentos.forEach((medicamento) => {
      const nomeProdutoElement = document.createElement("div");
      nomeProdutoElement.style.minWidth = "370px";

      const searchIcon = document.createElement("span");
      searchIcon.classList.add("material-symbols-rounded");
      searchIcon.textContent = "search";

      const anchorElement = document.createElement("a");

      //const pdf = await retornarPDF(medicamento.codigoBulaPaciente)&idB
      //?numProcesso=${medicamento.numProcesso}&name=${medicamento.nomeProduto.replace(" ", "_")}

      let url = "./html/medic.html";
      if (window.location.pathname.startsWith('/Wikimedic/html/')) {
        url = "./medic.html";
      }
      else if(window.location.pathname.startsWith('/html/'))
      {
        url = "./medic.html"
      }

      localStorage.setItem("numRegistro", medicamento.numProcesso);
      const medicName = medicamento.name
      anchorElement.href =
        url +
        `?numRegistro=${medicamento.numRegistro}&name=${medicName.replace(" ", "-")}`;
      console.log(url);

      nomeProdutoElement.appendChild(searchIcon);
      nomeProdutoElement.appendChild(anchorElement);
      /*
       * Cria um elemento div para o nome do produto
       * e adiciona o texto com o nome do produto
       */
      anchorElement.textContent = medicamento.name;

      // Adiciona o novo elemento ao elemento pai
      parentElement.appendChild(nomeProdutoElement);
    });

    console.log("ok... process finished");
  } catch (err) {
    console.log(err);
    alert("Erro interno");
  }
};

const searchResultsDiv = document.getElementById("result");
const searchBar = document.getElementById("search");

searchBar.addEventListener("change", async () => {
  console.log("Pesquisando");
  await pesquisar(searchBar.value);
});

document.addEventListener("click", (e) => {
  const search_result = document.querySelector("#result");
  let click_inside =
    search_result.contains(e.target) || searchBar.contains(e.target);
  click_inside
    ? (search_result.style.display = "block")
    : (search_result.style.display = "none");
});
