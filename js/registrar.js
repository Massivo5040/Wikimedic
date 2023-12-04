import { saveUser } from "./metodoServer";
import * as env from "./env"

const btnRegistrar = document.getElementById('registrar-button')

btnRegistrar.addEventListener('submit', async ()=>{
    const name = document.getElementById('name_input').value
    const lastName = document.getElementById('lastname_input').value
    const email = document.getElementById('email_input').value
    const email2 = document.getElementById('email2_input').value
    const passw1 = document.getElementById('passw_input_conf').value
    const passw2 = document.getElementById('passw_input_conf').value

    if(name != "" && lastName != "")
    {
        if(email != "" && email.includes('@') == true)
        {
            if( passw1.length > 8 && passw1 == passw2)
            {
                const user = {
                    name : name,
                    email : email,
                    email_reserva : email2,
                    password : passw1
                }
                const response = await saveUser(user)
                if(response.ok)
                {
                    alert('Usuário Registrado')
                }
                else
                {
                    console.log(await response.json())
                }
            }
        }
    }


})