function mostrarDato() {

    const datos = [
        "JavaScript fue creado en 1995 por Brendan Eich.",
        "JavaScript es uno de los lenguajes más utilizados en el desarrollo web.",
        "La mayoría de las páginas web modernas utilizan JavaScript.",
        "JavaScript permite crear animaciones, formularios y contenido interactivo.",
        "JavaScript puede ejecutarse tanto en el navegador como en servidores."
    ];

    const aleatorio = Math.floor(Math.random() * datos.length);

    document.getElementById("mensaje").innerHTML = datos[aleatorio];
}