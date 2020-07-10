//requireds
const fs = require("fs"); //de node
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido base ( ${base} ) no es un número`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor introducido limite ( ${limite} ) no es un número`);
      return;
    }
    let data = "";
    data += "=========================/n".green;
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(data);
    resolve();
  });
};
let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ( ${base} ) no es un número`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor introducido limite ( ${limite} ) no es un número`);
      return;
    }
    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    //const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(`./tablas/tabla-${base}-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else {
        resolve(`tabla-${base}-${limite}.txt`);
      }

      // console.log(`El archivo tabla-${base}.txt ha sido creado`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
