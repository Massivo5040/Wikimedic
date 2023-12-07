import { saveUser } from "./metodoServer.js";
import * as env from "./env.js";

const btnRegistrar = document.getElementById("registrar-button");

btnRegistrar.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name_input").value;
  const lastName = document.getElementById("lastname_input").value;
  const email = document.getElementById("email_input").value;
  const email2 = document.getElementById("email2_input").value;
  const passw1 = document.getElementById("passw_input_conf1").value;
  const passw2 = document.getElementById("passw_input_conf").value;

  if (name != "" && lastName != "") {
    if (email != "" && email.includes("@") == true) {
      if (passw1.length > 8 && passw1 == passw2) {
        let json = "";
        const user = {
          name: name,
          email: email,
          email_reserva: email2,
          password: passw1,
        };
        console.log("Salvando Usuário");
        const response = await saveUser(user);
        json = await response.json();
        if (response.ok) {
          alert("Usuário Registrado");
          window.location.pathname = env.indesHTML_path
        } else {
          alert(json.message);
        }
        console.log(response);
        console.log(json);
      } else if (passw1 != passw2) {
        alert("Senhas Diferentes");
      } else if (passw1 < 7) {
        alert("A senha deve ter no mínimo 8 caracteres.");
      }
    } else if (email.includes("@") == false) {
      alert("Digite um email válido");
    }
  }
});
