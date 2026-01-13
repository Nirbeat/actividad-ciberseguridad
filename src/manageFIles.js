import fs from 'fs/promises';

async function crearArchivo(nombre, contenido){
    await fs.writeFile(`${nombre}.txt`, contenido, {encoding:"utf-8"})
}