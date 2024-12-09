const Clases = require('./clases.js')
const Modelo = require('./modelo.js')

function nuevoTurno(data) {
    try {
        console.log("--Controlador--");
        const unTurno = new Clases.Turno(data.dia, data.turno, data.libre);
        console.log(unTurno);
        Modelo.nuevoTurno(unTurno);
    } catch (error) {
        console.error("Error al crear un nuevo turno:", error.message);
    }
}

function nuevoCliente(data) {
    try {
        console.log("--Controlador--");
        if (!data.nombre || !data.dni || !data.telefono) {
            throw new Error("Datos incompletos para crear un cliente.");
        }
        const unCliente = new Clases.Cliente(data.nombre, data.dni, data.telefono);
        console.log(unCliente);
        Modelo.nuevoCliente(unCliente);
    } catch (error) {
        console.error("Error en nuevoCliente:", error.message);
    }
}

module.exports = {nuevoTurno,nuevoCliente}