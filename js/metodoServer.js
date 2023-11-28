import { serverURL } from "./env.js"

export async function saveUser(user) {
  const url = serverURL + '/users/register';

  const data = {
    name: user.name,
    email: user.email,
    email_reserva: user.email_reserva,
    password: user.password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Erro na solicitação:', error);
  }
}

export async function autenticar(auth)
{
  try {
    const url = serverURL + "/users/login"

    const data = {
      auth
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    return response
  } catch (error) {
    console.log(error)
  }
}

export async function login(auth)
{
  const jsonResponse = await autenticar(auth)

  if(jsonResponse.ok) // sucesso no login
  {
    localStorage.setItem('email', auth.email)
    localStorage.setItem('password', auth.password)
  }
  else
  {
    // caso o login dê errado
    
  }

  console.log(await jsonResponse.json())
}
