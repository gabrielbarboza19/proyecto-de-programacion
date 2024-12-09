const Controlador = require('./controlador.js');

function nuevoTurno(data) {
    console.log("--seguridad--");
    console.log(data);
    data.libre = data.libre !== undefined; // Simplificación para booleano
    console.log(data);

    if (data.token === "lkjrt4v3wmtiqoprmmor98") {
        Controlador.nuevoTurno(data);
    }
}

function nuevoCliente(data) {
    console.log("--seguridad nuevo cliente--");
    console.log(data);

    // Aquí podrías añadir validaciones o lógica específica
    Controlador.nuevoCliente(data);
}

module.exports = { nuevoTurno, nuevoCliente };
