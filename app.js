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
    }else{
        if (listaDeAmigos.includes(nombreAmigo) == true) {
            alert(`El nombre ${nombreAmigo}, ya esta añadido`)
        }else {
            listaDeAmigos.push(nombreAmigo);
            console.log(listaDeAmigos);
        }
    }

    // limpio el input
    document.getElementById("amigo").value = "";
    // aqui muestra la lista de los amigos que vayas agregando
    mostrarListaDeAmigos();
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

// funcion para elegir a un amigo de la lista de amgigos de manera aleatoria
function sortearAmigo() {
    let numeroDeAmigos = listaDeAmigos.length;
    let numAleatorio = 0;
    let mostrarResultado;

    if (numeroDeAmigos < 3) {
        alert("Por favor, inserte mas nombres, minimo 3");
    } else {
        numAleatorio = Math.floor(Math.random() * numeroDeAmigos);
        mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = `El amigo secreto es: ${listaDeAmigos[numAleatorio]}`
    }
}

// ---------------------------------------------------
