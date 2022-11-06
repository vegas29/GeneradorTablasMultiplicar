import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();

// const [ , , arg3 = 'base = 5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err))