// variáveis de ambiente
export const serverURL = "http://localhost:8080" //essa é a url padrão do servidor, no meu ambiente de desenvolvimento
export let userInfo = {
    id : localStorage.getItem('idUser'),
    email : localStorage.getItem('email'),
    password : localStorage.getItem('password')
}