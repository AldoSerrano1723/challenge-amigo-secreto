// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables:
let listaDeAmigos = [];
// --------------------------------------------------
// funciones:
// funcion para el boton añadir - añade un amigo a la lista de listaDeAmigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);
    console.log(listaDeAmigos);
    listaDeAmigos.push(nombreAmigo);
    console.log(listaDeAmigos);
}

