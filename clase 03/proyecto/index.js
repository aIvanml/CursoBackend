// moment - manejos de date / fechas

// Importamos el modulo moment
const moment = require('moment')
const fecActual = moment()
console.log(fecActual);
 

let fecNacimiento = moment('1994-02-04', 'YYYY-MM-DD');
console.log(fecNacimiento);

if(fecNacimiento.isValid() && fecActual.isValid()) {
    let diferenciaDias = fecActual.diff(fecNacimiento, 'years')
    console.log(diferenciaDias);    
}

//4.27