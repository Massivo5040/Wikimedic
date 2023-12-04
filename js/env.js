// variáveis de ambiente
export const serverURL = "http://localhost:8080" //essa é a url do servidor
export let userInfo = { // informações do usuário
    id : localStorage.getItem('idUser'),
    name : localStorage.getItem('username'),
    email_reserva : localStorage.getItem('email_reserva'),
    email : localStorage.getItem('email'),
    password : localStorage.getItem('password'),
    login : localStorage.getItem('login')
}