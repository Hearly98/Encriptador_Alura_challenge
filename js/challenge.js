var txta_entrada = document.querySelector('.txt-entrada');
var txta_salida=document.querySelector('.txt-salida');
var botonEncriptar=document.getElementById('btn_encriptar');
var image= document.querySelector('.txt-salida');
var botonDesencriptar= document.getElementById('btn_desencriptar');


function validarTexto(){
    let textoEscrito = document.querySelector(".txt-entrada").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


const encriptar = () =>{

    if(!validarTexto()) {
    //encriptador
        var textoCifrado= txta_entrada.value
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");
    
        txta_salida.value=textoCifrado.toLowerCase(); 
        return txta_entrada;

}}



const btnEncriptador =() =>{
      
    //elimando imagen del textarea
    if(txta_entrada.value != "null"){
        image.style.backgroundImage="none";
        encriptar();
    } else {
        console.log('error');
    }
}

    botonEncriptar.addEventListener('click', btnEncriptador);



function desencriptar(){
    var textoCifrado = txta_entrada.value
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u"); 
    txta_salida.value= textoCifrado; 
    txta_salida.toLowerCase();
}
function btnDesencriptador(){

//elimando imagen del textarea
    if(txta_entrada.value != "null"){
        image.style.backgroundImage="none";
        desencriptar();
    } else {
        console.log('error');
    }

}

botonDesencriptar.addEventListener('click', btnDesencriptador);

function copiar(){
    txta_salida.select();
    navigator.clipboard.writeText(txta_salida.value)
    txta_salida.value = "";
    alert("Texto Copiado")
}

var container_copia=document.querySelector('.container-copia');
var  crearbuttonCopiar= `<button id="copia" class="btn">Copiar</button>`
    container_copia.innerHTML=crearbuttonCopiar;

 var  buttonCopiar=document.querySelector('#copia');
    buttonCopiar.addEventListener('click', copiar)
