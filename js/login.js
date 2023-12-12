import * as env from "./env.js";
import { login as autenticar } from "./metodoServer.js";

const login = document.getElementById("login");

login.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email_input").value;
  const password = document.getElementById("passw_input").value;

  let json = "";
  if (email.includes("@")) {
    const response = await autenticar({
      email: email,
      password: password,
    });

    json = await response.json();
    console.log(json);

    if (response.ok) {
      localStorage.setItem("idUser", json.user.id);
      localStorage.setItem("name", json.user.name);
      localStorage.setItem("email", json.user.email);
      localStorage.setItem('email_reserva', json.user.email_reserva)
      localStorage.setItem("password", password);

      setTimeout(()=>{
        if(window.location.pathname.includes('/Wikimedic/'))
        {
          window.location.pathname = "/Wikimedic/"
        }
        else
        {
          window.location.pathname = '/index.html'
        }
        
      }, 100)
    }
  }
});
