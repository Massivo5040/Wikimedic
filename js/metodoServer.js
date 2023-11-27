import { serverURL } from "./env.js"

export async function saveUser(user)
{
    const response = await fetch(serverURL + '/users/register', {
        method: 'POST',
        body:{
            name : user.name,
            email : user.email,
            email_reserva : user.email_reserva,
            password : user.password
        }
    })
    console.log(response)
    if(response.status == 201)
    {
        return await response.json()
    }
}