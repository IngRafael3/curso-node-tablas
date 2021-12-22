const fs = require("fs");
const colors = require('colors')

const crearArchivo = async (base = 5, listar=false, hasta =10) => {
  try {

    

    let salida, consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`; //concatenar la variable salida con el resultado, el salto de linea se hace con \n
      consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`; //se le añade colores a la salida
    }

    if(listar){ //imprime si la bandera listar se envia en la consola
      console.log("===========================".green);
      console.log("      TABLA DEL: ".red,colors.blue(base));
      console.log("===========================".green);
      console.log(consola);

    }

    fs.writeFileSync(`./salida/tabla-$${base}.txt`, salida); // para crear un archivo txt con el resultado en la carpeta donde esta app

    return `tabla-$${base}.txt creado`;
  } catch (err) {
      throw err;
  }
};

module.exports = {
  crearArchivo
};
