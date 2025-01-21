const listaAmigos = [];
const numeroMaximo = 5; 
let numeroGanador = Math.floor(Math.random() * numeroMaximo); 

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); 
    const nombre = inputAmigo.value.trim(); 

    if (listaAmigos.length >= numeroMaximo) {
        alert("No se pueden agregar más amigos. El máximo es " + numeroMaximo + ".");
        return;
    }

    if (nombre !== "") {
        
        listaAmigos.push(nombre);

        
        mostrarListaEnHTML();

        
        inputAmigo.value = "";
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}


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
    ulResultado.innerHTML = "";

    // Obtener el amigo ganador
    const amigoGanador = listaAmigos[numeroGanador];

   
    const liResultado = document.createElement('li');
    liResultado.textContent = `🎉 El amigo sorteado es: ${amigoGanador}`;
    ulResultado.appendChild(liResultado);

  
    listaAmigos.length = 0; // Vaciar la lista en memoria
    const ulListaAmigos = document.getElementById('listaAmigos');
    ulListaAmigos.innerHTML = ""; // Limpiar la lista en el HTML
}

console.log('No hagas trampa!!!');
//Sonrie si llegaste aqui :b
