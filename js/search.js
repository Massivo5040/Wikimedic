const PesquisarMedicamentos = async (name) => { // conecta a api ajudando a retornar
    try {
      const response = await fetch(`https://bula.vercel.app/pesquisar?nome=${name}&pagina=1`, {
        method: "GET"
      });
  
      if (!response.ok) {
        throw new Error('Erro na requisição.');
      }
  
      const json = await response.json();
      return json.content;
    }
    catch (error) {
      throw error;
    }
  };
  
  // método retorna medicamentos em um array
  // porém o array deve ser criado antes, e o valor será atribuído a ele
  const toArrayMedicSearch = async (name, lista) => {
    if (!lista) {
      console.log("param 2º: array, from method toArrayMedicSearch(name, array)");
      return [];
    } else {
      try {
        const medicamentos = await PesquisarMedicamentos(name);
        console.log(medicamentos)
        // Seleciona o elemento pai onde você deseja adicionar os resultados
        const parentElement = document.getElementById('searchResultsDiv'); // Substitua 'resultadoContainer' pelo ID correto
  
        // Limpa quaisquer elementos filhos existentes
        parentElement.innerHTML = '';
  
        // Itera sobre os medicamentos e cria elementos para cada um
        medicamentos.forEach((medicamento) => {
          const nomeProdutoElement = document.createElement('div');
  
          const anchorElement = document.createElement('a');
  
          //const pdf = await retornarPDF(medicamento.codigoBulaPaciente)
          const url = `https://wikimedic.arthursantos243.repl.co/html/medic.html?numProcesso=${medicamento.numProcesso}&name=${medicamento.nomeProduto.replace(" ", "_")}`
          anchorElement.href = url
          console.log(url)
  
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
        alert("Erro interno")
      }
    }
  }
  
  const searchResultsDiv = document.getElementById("searchResultsDiv")
  const searchBar = document.getElementById("search")
  
  const createElement = (name, innerHTML = "", value = "", hrefValue = "") => {
    const element = document.createElement(name)
    element.innerHTML = innerHTML
    element.value = value
    element.href = hrefValue
    return element
  }
  
  
  const displayResult = (resultados) => {
    //searchResultsDiv.innerHTML = ""
    for (let i = 0; i < resultados.length; i++) {
      const medicamento = resultados[i]
      const div = createElement('div', medicamento.name)
      const li = createElement("li")
      li.appendChild(div)
      li.classList.add('iconResult')
      searchResultsDiv.appendChild(div)
      console.log("icon added")
    }
  }
  
  const searchFunction = async () => {
    let resultados = await viewResults(searchBar.value)
    displayResult(resultados)
  }
  
  searchBar.addEventListener("change", async () => searchFunction);