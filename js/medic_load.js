import { serverURL, userInfo} from "./env.js";
import { saveUser, login, saveComentario } from "./metodoServer.js";

const getURLParameters = () => {
  let queryString = window.location.search.substring(1);
  let urlParameters = queryString.split('&')
  let parametros = {};

  for (let i = 0; i < urlParameters.length; i++) {
    let keyValue = urlParameters[i].split('=');
    /* console.log(keyValue) */
    let chave = decodeURIComponent(keyValue[0]);
    let valor = decodeURIComponent(keyValue[1]);
    parametros[chave] = valor;
  }

  console.log(parametros)
  return parametros;
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

const render_medic = async () => { // função main, tudo ocorre dentro dela
  const params = getURLParameters()
  if(params.numProcesso != null)
  {
    const medic = await returnMedic(params.numProcesso) // objeto que representa o medicamento, nele podemos acessar todas as propriedades

    const title = document.getElementById("medic-name")
    title.textContent = medic.nomeComercial;

    /* const tipoMed = document.getElementById("ClassMed")
    tipoMed.textContent = medic.categoriaRegulatoria; */


    const response = await retornarPDF(medic.codigoBulaPaciente) // pesquisa do pdf
    const linkPDF = response.pdf // link do pdf
    const a_link = document.querySelector("#medic-pdf")
    a_link.href = linkPDF // colocando pdf do medicamento
    a_link.textContent = "Download Bula PDF"
    console.log(linkPDF)

    /* const obj = document.querySelector('#obj')
    obj.textContent = medic.principioAtivo */

    //carregando comentários

    const commentResponse = await fetch(serverURL + "/comentarios/numProcesso/" + params.numProcesso)
    console.log(await commentResponse.json())

    /* const userReponse = await saveUser({
      name : "Teste",
      email : "diaso.andre@outlook.com",
      email_reserva : "null",
      password : "12345"
    })

    console.log(userReponse) */

    // TESTES

    /* await login({ // login de exemplo
      email : 'email@gmail.com',
      password : '1234'
    }) */

    

    const newComentario = {
      email : localStorage.getItem('email'),
      numProcesso : params.numProcesso,
      content : "Comentário de Teste"
    }
    
    const cReponse = await saveComentario(newComentario)

    console.log(await cReponse.json())

    //console.log(localStorage.getItem('email') + " : "+ localStorage.getItem('password'))
    
  }
  else
  {
    console.warn('Erro!! Sem parâmetros de consulta')
  }
}

try
{
  render_medic()
}
catch (err)
{
  console.log(err)
}// execução da função que renderiza as informações na tela
