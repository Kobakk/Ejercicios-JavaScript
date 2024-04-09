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
//ValidarCorreoElectronico
const $labelEmail = document.getElementsByClassName("col-sm-2 col-form-label");
const input = document.getElementById("inputEmail");
input.addEventListener("input", function(event){
    let contenidoInput = input.value;
    limpiarNodo2($labelEmail[0]);
    if(!contenidoInput.includes('@') || (!contenidoInput.includes('.'))){
        $labelEmail[0].appendChild(mensajeError('debe contener @ y .'));
    }else{
        $labelEmail[0].appendChild(mensajeValido());
    }
});

//Validar Chek
const $chek = document.getElementById('gridCheck1');
const $chekDiv = document.getElementsByClassName('form-check-label');
$chek.addEventListener("change", function(){
    limpiarNodo2($chekDiv[0]);
    if(this.checked){
        $chekDiv[0].appendChild(mensajeValido());
    } else{
        $chekDiv[0].appendChild(mensajeError('Debes de aceptar los terminos y condiciones'));
    }
});

//Validar Password
const $inputPwd = document.getElementById('inputPassword');
const $labelPwd = document.getElementsByClassName('col-sm-2 col-form-label');
let pwdContent = $pwd[0].textContent;
$inputPwd.addEventListener("input", function(event){
    limpiarNodo2($labelPwd[1]);
    let contenidoInput = $inputPwd.value;
    if(contenidoInput != pwdContent){
        $labelPwd[1].appendChild(mensajeError('Contraseña Diferente'));
    } else{
        $labelPwd[1].appendChild(mensajeValido());
    }
});
//Validar Unidades Pedidas
const $labelCantidad = document.getElementsByClassName('col-sm-2 col-form-label');
const $inputCantiad = document.getElementById('inputCantidad');
$inputCantiad.addEventListener("input", function(event){
    limpiarNodo2($labelCantidad[2]);
    if($inputCantiad.value > 5){
        $labelPwd[2].appendChild(mensajeError('No puedes elegir mas de 5')); 
    } else{
        limpiarNodo2($labelCantidad[2]);
    }
});
