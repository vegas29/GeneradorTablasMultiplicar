import { writeFileSync } from 'node:fs';

const crearArchivo = async ( base, listar = false, hasta = 10) => {

    try {
        
        if ( listar ) {
            console.log('===========================');
            console.log(`Tabla del ${base}`);
            console.log('===========================');
        }
        
        let salida = '';
        
        for ( let i = 0; i <= hasta; i++ ) {
            salida += `${ base } x ${ i } =  ${ base * i }\n`;
        }

        if ( listar ) {
            console.log(salida);
        }
        
        writeFileSync(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log('Tabla creada');
        })

        return `tabla-${base}.txt`;
        
    } catch (error) {
        console.log(error)
    }

}

export { crearArchivo }