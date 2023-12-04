// variáveis de ambiente
export const serverURL = "https://server-wikimedic.onrender.com/" //essa é a url do servidor
export let userInfo = {
    id : localStorage.getItem('idUser'),
    email : localStorage.getItem('email'),
    password : localStorage.getItem('password')
}