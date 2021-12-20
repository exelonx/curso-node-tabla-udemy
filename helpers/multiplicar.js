const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{
    try {
        let salida = '';

        console.clear();
        



        for(i = 1; i<=hasta; i++){
            salida += `${base} ${'x'} ${i} = ${base*i}\n`
        }

        if(listar){
            console.log(colors.red("===================="))
            console.log(`${colors.italic("    Tabla del")} ${colors.green(base)}:`)
            console.log(colors.inverse("===================="))
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}-hasta-${hasta}.txt`,salida)

        return `tabla-${base}-hasta-${hasta}.txt`
    } catch (error) {
        return error;
    }
    
}

module.exports = {
    crearArchivo
}