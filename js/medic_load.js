import { serverURL, userInfo } from "./env.js";


const getURLParameters = () => {
  let queryString = window.location.search.substring(1);
  let urlParameters = queryString.split("&");
  let parametros = {};

  for (let i = 0; i < urlParameters.length; i++) {
    let keyValue = urlParameters[i].split("=");
    /* console.log(keyValue) */
    let chave = decodeURIComponent(keyValue[0]);
    let valor = decodeURIComponent(keyValue[1]);
    parametros[chave] = valor;
  }

  console.log(parametros);
  return parametros;
};

const returnMedic = async (numProcesso) => {
  // retorna um medicamento específico por meio do numProcesso

  try {
    const response = await fetch(
      `https://bula.vercel.app/medicamento/${numProcesso}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Erro na requisição dos dados");
    } else {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (err) {
    throw err;
  }
};

const retornarPDF = async (codigoBulaPaciente) => {
  let response = await fetch(
    `https://bula.vercel.app/bula?id=${codigoBulaPaciente}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Erro na requisição dos dados");
  } else {
    let json = await response.json();
    return json;
  }
};

const render_medic = async (params) => {
  // função main, tudo ocorre dentro dela

  const medic = await returnMedic(params.numProcesso); // objeto que representa o medicamento, nele podemos acessar todas as propriedades

  const title = document.getElementById("medic-name");
  title.textContent = medic.nomeComercial;

  const response = await retornarPDF(medic.codigoBulaPaciente); // pesquisa do pdf
  const linkPDF = response.pdf; // link do pdf

  /* const tipoMed = document.getElementById("ClassMed")
  tipoMed.textContent = medic.categoriaRegulatoria; */

  
  const a_link = document.querySelector("#medic-pdf");
  a_link.href = linkPDF; // colocando pdf do medicamento
  a_link.textContent = "PDF BULA";
  console.log(linkPDF);
  
  console.log(medic.numeroRegistro)
  const medWikiResponse = await fetch(serverURL + `/medicamentos/get/?numRegistro=${medic.numeroRegistro}`)

  if(medWikiResponse.ok)
  { //medicamento registrado no Servidor da Wikimedic
    console.log('Medicamento registrado')
    const informations = document.querySelector('.informations')
    console.log(informations)
    const objMedic = await medWikiResponse.json()
    console.log(objMedic)

    informations.children[0].children[2].textContent = objMedic.indicacao
    informations.children[1].children[2].textContent = objMedic.posologia
    informations.children[2].children[2].textContent = objMedic.contraindicacao
    informations.children[3].children[2].textContent = objMedic.reacoes_advercas
    informations.children[4].children[2].textContent = objMedic.posologia
    informations.children[5].children[2].textContent = objMedic.cuidados
    informations.children[6].children[2].textContent = objMedic.riscos
    informations.children[7].children[2].textContent = objMedic.especiais
    informations.children[8].children[2].textContent = objMedic.superdose

  }
  else
  { //medicamento not found
    alert('Esse medicamento não foi registrado por nenhum administrador.')
  }

  console.log("Credenciais de acesso: ");
  console.info(userInfo);

  const commentResponse = await fetch(
    serverURL + "/comentarios/numRegistro/" + medic.numeroRegistro
  );
  console.log(await commentResponse.json());
};

const medicLoad = async () => {
  const params = getURLParameters();

  if (params.numProcesso != null) {
    try {
      render_medic(params);
    } catch (err) {
      console.log(err);
    } // execução da função que renderiza as informações na tela
  } else {
    console.warn("Erro!! Sem parâmetros de consulta");
    const numProcesso = localStorage.getItem("numProcesso");
    render_medic({ numProcesso });
  }
}

medicLoad()