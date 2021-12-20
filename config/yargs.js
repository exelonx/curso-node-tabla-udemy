const argv = require('yargs')
                  .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Define la base a multiplicar'
                  })
                  .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Lista la tabla a multiplicar'
                  })
                  .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Especifica hasta donde debe llegar la multiplicación'
                  })
                  .check((argv, options)=>{
                        if(isNaN(argv.b) || isNaN(argv.h)){  //Validaciones para parametro base
                            throw 'Solo parametros numéricos'
                        }else if(argv.h<1){ //validaciones para parametro hasta
                            throw 'Parametro invalido, parametros permitidos: 1-Infinito'
                        }
                        return true
                  })
                  .argv;

module.exports = argv;