let fs = require('fs'); //requerimos fs

let process = require('process') //requerimos process
let anotaciones = process.argv[2] 


function lecturaJSON() {    
    return JSON.parse(fs.readFileSync('./tareas.json', 'utf-8')) //readFileSync lee nuestro JSON
}


switch (anotaciones) {
    case 'listar':
        console.log(lecturaJSON())
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo que quieres hacer')
        break;
}

