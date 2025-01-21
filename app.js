const listaAmigos = [];
const numeroMaximo = 5; // Máximo de amigos
let numeroGanador = Math.floor(Math.random() * numeroMaximo); // Número aleatorio inicial de 0 a 4

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtener el input
    const nombre = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios

    if (listaAmigos.length >= numeroMaximo) {
        alert("No se pueden agregar más amigos. El máximo es " + numeroMaximo + ".");
        return;
    }

    if (nombre !== "") {
        // Agregar el nombre al array
        listaAmigos.push(nombre);

        // Actualizar las listas en el HTML
        mostrarListaEnHTML();

        // Limpiar el campo de entrada
        inputAmigo.value = "";
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para actualizar las listas en el HTML
function mostrarListaEnHTML() {
    const ulListaAmigos = document.getElementById('listaAmigos');
    ulListaAmigos.innerHTML = ""; // Limpiar la lista actual

    listaAmigos.forEach((amigo, index) => {
        const liListaAmigos = document.createElement('li');
        liListaAmigos.textContent = ` ${amigo}`;
        ulListaAmigos.appendChild(liListaAmigos);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length < numeroMaximo) {
        alert("Número de amigos insuficiente. Agrega al menos " + numeroMaximo + " para continuar.");
        return;
    }

    // Generar un nuevo número ganador
    numeroGanador = Math.floor(Math.random() * numeroMaximo);

    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = ""; // Limpiar la lista de resultados

    // Obtener el amigo ganador
    const amigoGanador = listaAmigos[numeroGanador];

    // Mostrar el resultado
    const liResultado = document.createElement('li');
    liResultado.textContent = `🎉 El amigo sorteado es: ${amigoGanador}`;
    ulResultado.appendChild(liResultado);

    // Limpiar la lista de amigos
    listaAmigos.length = 0; // Vaciar la lista en memoria
    const ulListaAmigos = document.getElementById('listaAmigos');
    ulListaAmigos.innerHTML = ""; // Limpiar la lista en el HTML
}
