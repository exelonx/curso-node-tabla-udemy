
const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs')
// console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
      .then(nombreArchiv => console.log(nombreArchiv.rainbow, 'creado'))
      .catch(err => console.log(err));