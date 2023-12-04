import * as env from "./env.js"
import { login as autenticar } from "./metodoServer.js"

const login = document.getElementById('login')

login.addEventListener('click', async e =>{
    e.preventDefault()
    const email = document.getElementById('email_input').value
    const password = document.getElementById('passw_input').value

    let json = ""
    if(email.includes('@'))
    {
        const response = await autenticar({
            email : email,
            password : password
        })

        if(response.ok)
        {
            alert('Usuário Autenticado')
            
        }

        json = await response.json()
        console.log(json)
    }
})