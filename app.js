// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables:
let listaDeAmigos = [];
// --------------------------------------------------
// funciones:
// funcion para el boton añadir - añade un amigo a la lista de listaDeAmigos
function agregarAmigo() {
    // aqui obtengo el contenido del input
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(typeof(nombreAmigo));
    
    // verifica si esta vacio la variable nombreAmigo o no
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
    } else {
        listaDeAmigos.push(nombreAmigo);
        console.log(listaDeAmigos);
    }

    // limpio el input
    document.getElementById("amigo").value = "";
}

// funcion para mostrar en pantalla a los amigos que agregas a tu lista 
function mostrarListaDeAmigos() {
    // aqui conecto la lista de HTML con java por medio del ID de HTML
    let listaDeAmigosHtml = document.getElementById("listaAmigos");

    // aqui se limpia la lista para no mostrar duplicados
    listaDeAmigosHtml.innerHTML = "";

    // aqui recorre el lista y se crea un nuevo elemento de la lista
    listaDeAmigos.forEach(amigo => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaDeAmigosHtml.appendChild(nuevoElemento);
    });
}

// ---------------------------------------------------
