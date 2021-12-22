const {crearArchivo} = require('./helpers/multiplicar')
const argv =require('./config/yargs');
const colors = require('colors')


console.clear() //limpiar la consola de comandos


//const base=5;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err))