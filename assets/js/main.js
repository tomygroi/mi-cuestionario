let boton = document.getElementById("btnEnviar");
if (boton) {
    boton.addEventListener("click", () => {
        let puntaje = 0;

        for (let i = 1; i <= 10; i++) {
            const opciones = document.getElementsByName(`q${i}`);
            if (!opciones || opciones.length === 0) continue;
            for (let j = 0; j < opciones.length; j++) {
                if (!opciones[j]) continue;
                if (opciones[j].checked) {
                    const esCorrecto = (opciones[j].dataset && opciones[j].dataset.correcto === "true") || opciones[j].value === "correcto";
                    if (esCorrecto) puntaje++;
                    break;
                }
            }
        }

        // Parte con JSON y localStorage
        const nombreInput = document.getElementById("Nombree");
        const nombre = nombreInput ? nombreInput.value.trim() : "";
let jugador = {"Nombre":nombre,"puntaje":puntaje};
    localStorage.setItem("datos",JSON.stringify(jugador));
window.location.href = "resultado.html";
});
}