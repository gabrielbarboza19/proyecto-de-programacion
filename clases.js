class Turno {
    constructor(dia, turno, libre) {
        this.dia = dia
        this.turno = turno
        this.libre = libre
    }

    // mostrarTurno(){
    //     console.log(`Dia: ${this.dia} Hora: ${this.hora} libre: ${this.libre}`)
    // }
}

class Cliente{
    constructor(nombre,dni,telefono){
        this.nombre = nombre
        this.dni = dni
        this.telefono = telefono
    }
}

// const miTurno = new Turno("lunes",2,true)

// miTurno.mostrarTurno();

module.exports = {Turno,Cliente};
