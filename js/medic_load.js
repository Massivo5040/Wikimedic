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
  
  const medWikiResponse = await fetch(serverURL + `/medicamentos/get/?numRegistro=${params.numRegistro}`)

  if(medWikiResponse.ok)
  { //medicamento registrado no Servidor da Wikimedic
    
    const informations = document.querySelector('.informations')
    const section_header = document.querySelector('.header')
    const objMedic = await medWikiResponse.json()
    
    document.querySelector('#medic-name').innerHTML = objMedic.name
    section_header.children[1].children[1].innerHTML = objMedic.indicacao
    informations.children[0].children[2].innerHTML = objMedic.indicacao
    informations.children[1].children[2].innerHTML = objMedic.posologia
    informations.children[2].children[2].innerHTML = objMedic.contraindicacao
    informations.children[3].children[2].innerHTML = objMedic.reacoes_advercas
    informations.children[4].children[2].innerHTML = objMedic.posologia
    informations.children[5].children[2].innerHTML = objMedic.cuidados
    informations.children[6].children[2].innerHTML = objMedic.riscos
    informations.children[7].children[2].innerHTML = objMedic.especiais
    informations.children[8].children[2].innerHTML = objMedic.superdose

    const commentResponse = await fetch(
      serverURL + "/comentarios/numRegistro/" + objMedic.numeroRegistro
    );
    console.log(await commentResponse.json());

  }
  else
  { //medicamento not found
    alert('Esse medicamento não foi registrado por nenhum administrador.')
  } 
};

const medicLoad = async () => {
  const params = getURLParameters();
  render_medic(params)
}

medicLoad()