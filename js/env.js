// variáveis de ambiente
export const serverURL = "https://server-wikimedic.onrender.com"; //essa é a url do servidor
export let userInfo = {
  // informações do usuário
  id: localStorage.getItem("idUser"),
  name: localStorage.getItem("username"),
  email_reserva: localStorage.getItem("email_reserva"),
  email: localStorage.getItem("email"),
  password: localStorage.getItem("password"),
  login: localStorage.getItem("login"),
};

export const indesHTML_path = '/index.html' // esse path é relativo, no github pages ele fica '/Wikimedic/index.html'
