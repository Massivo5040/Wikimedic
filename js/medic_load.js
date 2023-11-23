const getURLParameters = () => {
    let queryString = window.location.search.substring(1);
    let urlParameters = queryString.split('&')
    let parametroObj = {};
  
    for (let i = 0; i < urlParameters.length; i++) {
      let keyValue = urlParameters[i].split('=');
      console.log(keyValue)
      let chave = decodeURIComponent(keyValue[0]);
      let valor = decodeURIComponent(keyValue[1]);
      parametroObj[chave] = valor;
    }
  
    return parametroObj;
  }
  
  const returnMedic = async (numProcesso) => { // retorna um medicamento específico por meio do numProcesso
  
    try {
      const response = await fetch(`https://bula.vercel.app/medicamento/${numProcesso}`, {
        "method": "GET"
      })
  
      if (!response.ok) {
        throw new Error("Erro na requisição dos dados")
      }
      else {
        const json = await response.json();
        console.log(json)
        return json
      }
    }
    catch (err) {
      throw err;
    }
  }
  
  const retornarPDF = async (codigoBulaPaciente) => {
  
    let response = await fetch(`https://bula.vercel.app/bula?id=${codigoBulaPaciente}`, {
      "method": "GET"
    })
  
    if (!response.ok) {
      throw new Error("Erro na requisição dos dados")
    }
    else {
      let json = await response.json()
      return json
    }
  }
  
  const main = async () => { // função main, tudo ocorre dentro dela
    const params = getURLParameters()
    const medic = await returnMedic(params.numProcesso) // objeto que representa o medicamento, nele podemos acessar todas as propriedades
    const response = await retornarPDF(medic.codigoBulaPaciente) // pesquisa do pdf
    const linkPDF = response.pdf // link do pdf
    console.log(linkPDF)
  
  
    const title = document.getElementById("nameMed")
    title.textContent = medic.nomeComercial;
  
    const tipoMed = document.getElementById("ClassMed")
    tipoMed.textContent = medic.categoriaRegulatoria;
  
  
    const a_link = document.querySelector("#pdf_a")
    a_link.href = linkPDF // colocando pdf do medicamento
    a_link.textContent = "Download Bula PDF"
  
    const obj = document.querySelector('#obj')
    obj.textContent = medic.principioAtivo
  }
  main()// execução da função main