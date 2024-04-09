/*
  Gestiona los mensajes de alerta para los elementos html que se validan
*/
export function mensajeError(mensaje){
  const $errorFormulario = document.createElement("div");
  $errorFormulario.classList= "alert alert-danger";
  $errorFormulario.role = "alert";
  $errorFormulario.innerHTML = `
    Error: ${mensaje}
  `;
  return $errorFormulario;
}

export function mensajeValido(){
  const $correcto = document.createElement("div");
  $correcto.classList= "alert alert-success";
  $correcto.role = "alert";
  $correcto.innerHTML = `
   No hay errores en el input 
  `;
  return $correcto;  
}

export function validarFormulario(randomPwd){
  let form = document.getElementById("form");
  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    //Email Controlador
    let email = document.getElementById("inputEmail").value;
    let mensaje = document.getElementById("rowEmail");
    let tieneArroba = false;
    for(let word in email){
      if (email[word] === "@"){
        console.log("tiene @");
        tieneArroba = true;
      } 
    }
    if(!tieneArroba){
      mensaje.appendChild(mensajeError("Falta el @ ."));
    }
    //Contraseña Controlador
    let pwd = document.getElementById("inputPassword").value;
    let mensajePwd = document.getElementById("rowPassword");
    if(pwd == randomPwd ){

    } else{
      mensajePwd  .appendChild(mensajeError("Contraseñas incorrectas."));   
      console.log(pwd + " " + randomPwd);
    }
  })


}