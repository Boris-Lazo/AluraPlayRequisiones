async function listarVideos(){
    const conexion = await fetch('http://localhost:3001/videos');

    const conexionConvertida = conexion.json(); //Para consumir una API, necesitamos trabajar con asincronía, que en este caso se ha manejado con async await. Luego, convertimos la respuesta a JSON a un objeto de JavaScript utilizando el método .json().

    //console.log(conexionConvertida);
    return conexionConvertida
} 

async function crearVideo(){
    const conexion = await fetch('http://localhost:3001/videos',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ //convierte el objeto enviado al body en una cadena de texto.
            titulo:titulo,
            descripcion:descripcion,
            url:url,
            imagen:imagen
        })
    })
    const conexionConvertida= conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    listarVideos,crearVideo
}

//se llama a la función para que ocurra.
//listarVideos();