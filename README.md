<div style="text-align: justify">

# Proyecto 1 - Juego de preguntas.

<br>

## Etapa 1 - HTML.

El juego debe mostrar una pantalla de bienvenida, un cuestionario con preguntas de opción múltiple y una pantalla final con el puntaje.

> El ejemplo mostrado en las imagenes está basado en Batman, pero cada estudiante podrá elegir su propio tema libremente (por ejemplo: películas, fútbol, informática, historia, música, etc.).

<br>
<br>

## Estructura del proyecto.

El proyecto debe estar compuesto por tres documentos `HTML`.

1. `bienvenida.html` - Muestra el título del juego, una breve descripción del tema y un botón **Iniciar**.
2. `cuestionario.html` - Contiene 10 preguntass con 4 opciones cada una (solo una correcta).
3. `resultado.html` - Muestra el puntaje obtenido y un botón `Volver a jugar`.

- Un archivo `style.css` para los estilos visuales.
- Un archivo `main.js` para la lógica del puntaje y la interactividad.

<br>
<br>

-----

<br>
<br>

**Indicaciones**:

- Usar encabezados (`<h1>`, `<h2>`) y botones (`<button>` o `<input type="submit">`).

- En `cuestionario.html`, agrupar cada pregunta en un `<fieldset>` con su `<legend>`.

- En `resultado.html`, dejar un espacio donde luego se mostrará el puntaje.

<fieldset>
<legend>
Enlazar las páginas entre sí mediante botones
</legend>

`Iniciar` → abre el cuestionario.

`Volver a jugar` → regresa a la bienvenida.

</fieldset>

<br>
<br>

**Ayuda**:

- Estructura de cada pregunta:

```HTML
<fieldset>
    <legend> Pregunta </legend>
    <input type="checkbox" id="r1"><label for="r1">Respuesta</label>
    <input type="checkbox" id="r2"><label for="r2">Respuesta</label>
    <input type="checkbox" id="r3"><label for="r3">Respuesta</label>
    <input type="checkbox" id="r4"><label for="r4">Respuesta</label>
</fieldset>
```

# Imaganes ilustrativas de ejemplo:

![img](Imagenes/imagenes1.png)
![img](Imagenes/imagenes2.png)
![img](Imagenes/imagenes3.png)
![img](Imagenes/imagenes4.png)
![img](Imagenes/imagenes5.png)



</div>