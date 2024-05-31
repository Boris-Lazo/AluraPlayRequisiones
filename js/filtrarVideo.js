import { conexionAPI } from "./conexionAPI.js";

async function filtrarVideo(){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector('[data-busqueda]');
    const busqueda = conexionAPI.buscarVideos(datosDeBusqueda);

    console.log(busqueda);
}

const boton = document.querySelector('[data-boton-busqueda]')

boton.addEventListener('click', evento=>filtrarVideo(evento))
