const { Turno,Cliente } = require('./clases.js')

function testTurno(){
    const miTurno = new Turno("lunes",2,true)
    console.log(miTurno.dia == 'lunes')
    console.log(miTurno.hora == 2)
    console.log(miTurno.libre == true)
}
function testCliente() {
    const miCliente = new Cliente("Alfredo", 46328689, 1);
    console.log(miCliente.nombre === 'Alfredo');
    console.log(miCliente.dni === 46328689);
    console.log(miCliente.telefono === 1);
}

testCliente();
testTurno();

