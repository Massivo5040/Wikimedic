const PesquisarMedicamentos = async (name) => {
  // conecta a api ajudando a retornar
  try {
    const response = await fetch(
      `https://bula.vercel.app/pesquisar?nome=${name}&pagina=1`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Erro na requisição.");
    }

    const json = await response.json();
    return json.content;
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
      
      let url = "./html/medic.html"
      if(window.location.pathname == "/Wikimedic/html/medic.html")
      {
        url = "./medic.html"
      }
      localStorage.setItem("numProcesso", medicamento.numProcesso);
      anchorElement.href = url + `?numRegistro=${medicamento.numRegistro}&name=${medicamento.name}`;
      console.log(url);

      nomeProdutoElement.appendChild(searchIcon);
      nomeProdutoElement.appendChild(anchorElement);
      /*
       * Cria um elemento div para o nome do produto
       * e adiciona o texto com o nome do produto
       */
      anchorElement.textContent = medicamento.nomeProduto;

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
