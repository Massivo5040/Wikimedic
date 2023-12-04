import { serverURL, userInfo } from "./env.js"

export async function saveUser(user) {
  const url = serverURL + '/users/register';
  console.log("Salvando Usuário")

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

    return await response
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
  const response = await autenticar(auth)

  if(response.ok) // sucesso no login
  {
    localStorage.setItem('email', auth.email)
    localStorage.setItem('password', auth.password)
  }
  else
  {
    // caso o login dê errado
  }
  return response
}

/* const loginResponse = await login({ 
  email : 'deoliveiradiasandre@gmail.com',
  password : '1234'
})

if(loginResponse.ok)
{
  const json = await loginResponse.json()
  console.log(json)
  
  localStorage.setItem('idUser', json.user.id)

   userInfo = {
    id : localStorage.getItem('idUser'),
    email : localStorage.getItem('email'),
    password : localStorage.getItem('password')
  }
  console.log(userInfo)
} */


export async function saveComentario(comentario)
{
  try {
    const url = serverURL + "/comentarios/register"

    let auth = {}

    if(localStorage.getItem('login') != "true") // se o login estiver no local storage
    {
      auth = {
        email : localStorage.getItem('email'),
        password : localStorage.getItem('password')
      }
    }
    else
    {
      // se não estiver
    }
    const data = {
      email : comentario.email,
      numProcesso : comentario.numProcesso,
      content : comentario.content,
      auth
    }
    /* 
      comentario = {
        email : (email usuário),
        numProcesso : (numProcesso do medicamento)
        content : ( conteúdo do medicamento )
      }
    */

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

export async function saveFavorito()
{
  
}