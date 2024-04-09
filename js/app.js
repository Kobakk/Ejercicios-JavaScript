import { validarFormulario, mensajeError, mensajeValido } from "./Alert.js";
import { passkey } from "./Passkey.js";

let $alertSucces = document.getElementById('alertas').childNodes[1];
let $alertDanger = document.getElementById('alertas').childNodes[3];
$alertDanger.classList += ' visually-hidden';
$alertSucces.classList += ' visually-hidden';
// Contraseña Aleatoria
const $pwd = document.getElementsByTagName("strong");
let pwd = '';
pwd = passkey();
$pwd[0].innerHTML = pwd;
//LimpiarSegundoNodo
function limpiarNodo2(elemento){
    let tamano = elemento.childNodes.length;
    if(tamano >1 ){
        elemento.removeChild(elemento.childNodes[1]);
    }
}
const $formPrincipal = document.getElementsByTagName("form");
//Email DOM
const $labelEmail = document.getElementsByClassName("col-sm-2 col-form-label");
const $inputEmail = document.getElementById("inputEmail");
// Pwd DOM
const $inputPwd = document.getElementById('inputPassword');
const $labelPwd = document.getElementsByClassName('col-sm-2 col-form-label');
let pwdContent = $pwd[0].textContent;
//Cantidad DOM
const $labelCantidad = document.getElementsByClassName('col-sm-2 col-form-label');
const $inputCantiad = document.getElementById('inputCantidad')
//CheckList Dom
const $inputChek = document.getElementById('gridCheck1');
const $labelCheck = document.getElementsByClassName('form-check-label');

$formPrincipal[0].addEventListener("submit", function(event){
    event.preventDefault();

    if(!$inputEmail.value.includes('@') || !$inputEmail.value.includes('.')){
        $labelEmail[0].appendChild(mensajeError('Debe contener . y @.'));
    } else{
        $labelEmail[0].appendChild(mensajeValido());        
    }

    if(pwdContent != $inputPwd.value){
       $labelPwd[1].appendChild(mensajeError('La contraseña no coincide.')) ;
    } else{
        $labelPwd[1].appendChild(mensajeValido());
    }
    if($inputCantiad.value > 5){
       $labelCantidad[2].appendChild(mensajeError('No puedes seleccionar mas de 5 unidades.')) ;
    }else{
        $labelCantidad[2].appendChild(mensajeValido());
    }
    if(!$inputChek.checked){
       $labelCheck[0].appendChild(mensajeError('Tienes que aceptar las condiciones')) ;        
    }else{
       $labelCheck[0].appendChild(mensajeValido());        
    }
});
