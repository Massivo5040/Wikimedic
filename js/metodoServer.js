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
        console.log(response);
        return await response.json();
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
  }
