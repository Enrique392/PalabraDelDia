window.onload = function () {
    let palabra=['azul','amarillo','rojo','rosa','verde','turquesa','morado','malva','blanco','negro','marron','naranja','violeta','lila','beige'];
    let palabraSeleccionada=palabra[seleccionarPalabra()]
    console.log(palabraSeleccionada)
    crearBotones()
    let cantidadLetras=palabraSeleccionada.split(""); //se crea un array de las letras en la palabra seleccionada aleatoriamente
    console.log(cantidadLetras.length)//nos muestra la cantidad de letras en dicha palabra
    crearCuadrados(cantidadLetras.length)
}

function seleccionarPalabra() {
    let indiceSeleccionado=parseInt(Math.random()*14)
    return indiceSeleccionado;
}

function crearBotones() {
    let divLetras=document.getElementById("divLetras")
    let letras='qwertyuiopasdfghjlñzxcvbnm'.split('');
    letras.forEach(function(letra,indice) {
        if (indice==10|| indice==19){
            let salto=document.createElement("br");
            divLetras.appendChild(salto)
        }
        var boton = document.createElement("button");
        boton.textContent = letra.toUpperCase(); // Convertir la letra a mayúscula
        boton.value=letra.toUpperCase(); // Agregar el valor de la letra
        boton.classList.add("boton"); // Agregar la clase "boton"
        boton.classList.add("boton-letra"); // Agregar la clase "boton-letra"
        divLetras.appendChild(boton);
        console.log(boton.value)
    });
}

function crearCuadrados(longitud) {
    console.log(longitud);
    let letrasAdivinar=document.querySelector(".letras");
    for (let i = 0; i < longitud; i++) {
        letrasAdivinar.classList.add("letras");
        letrasAdivinar.classList.add("col-3");
        letrasAdivinar.classList.add("centrado")
        let unaLetra=document.createElement("span");
        letrasAdivinar.appendChild(unaLetra);
    }
}