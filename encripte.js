const d = document;
const textArea = d.querySelector(".form_input");
const imagenmuneco = d.querySelector(".result_image");
const loaderring = d.querySelector(".spinner");
const resultadoTitulo = d.querySelector(".result_title");
const resultadotexto = d.querySelector(".result_text");
const botonencriptado = d.querySelector(".form__btn");
const botondesencriptar = d.querySelectorAll(".form__btn");
const botoncopiar = d.querySelector (".result__btn");


const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];



function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje [i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves [j][0]) {
                encriptada = llaves [j] [1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
  
    return mensajeEncriptado
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves [i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado
}

textArea.addEventListener("input", (e) =>{

    imagenmuneco.style.display = "none";
    loaderring.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje."
    resultadotexto.textContent = "";
});

botonencriptado.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadotexto.textContent = mensajeEncriptado;
    botoncopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:"
});
botondesencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadotexto.textContent = mensajeDesencriptado;
    botoncopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:"

});
botoncopiar.addEventListener ('click', () => {
    let textocopiado = resultadotexto.textContent;
    navigator.clipboard.writeText(textocopiado).then(()=>{
        imagenmuneco.style.display = "block";
        loaderring.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se ha copiado";
        botoncopiar.classList.add("hidden");
        resultadotexto.textContent = ""
    })
})