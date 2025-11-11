window.addEventListener('DOMContentLoaded', () => {
    const puntajeElem = document.getElementById('puntaje');
    if (!puntajeElem) return;

    // Read the current player's data from localStorage (stored by main.js)
    let datosString = localStorage.getItem("datos");
    let datos = null;
    
    if (datosString) {
            datos = JSON.parse(datosString);
    }

    // Display current player's score
    if (!datos || datos.puntaje === null || datos.puntaje === undefined) {
        puntajeElem.innerText = 'No se encontró puntaje. Completa el cuestionario primero.';
    } else {
        const puntuacion = `${datos.puntaje}/10`;
        const nombre = datos.Nombre || datos.nombre || "Anónimo";
        puntajeElem.innerText = `${nombre}, tu puntaje es: ${puntuacion}`;
    }

    const tabla = document.getElementById("tabla-participantes");
    if (tabla) {
        let historial = localStorage.getItem("historialJugadores");
        let jugadores = [];
        
        if (historial) {
                jugadores = JSON.parse(historial);
        }

        if (datos && datos.puntaje !== null && datos.puntaje !== undefined) {
            const nombre = datos.Nombre || datos.nombre || "Anónimo";
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${nombre}</td><td>${datos.puntaje}</td>`;
            tabla.appendChild(tr);
        }

        // Add historical players
        jugadores.forEach((jugador) => {
            if (jugador && jugador.puntaje !== null && jugador.puntaje !== undefined) {
                let tr = document.createElement("tr");
                const nombre = jugador.Nombre || jugador.nombre || "Anónimo";
                tr.innerHTML = `<td>${nombre}</td><td>${jugador.puntaje}</td>`;
                tabla.appendChild(tr);
            }
        });
    }
});