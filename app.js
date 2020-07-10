const { argv } = require("./config/yargs");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
const colors = require("colors");

console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
      .then(() => {
        console.log(`Listado mostrado`);
      })
      .catch((err) => {
        console.log(err.red);
      });
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => {
        console.log(`Archivo creado:`.white + ` ${archivo}`.green);
      })
      .catch((err) => {
        console.log(err.red);
      });
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
//console.log(process.argv);
// console.log(multiplicar);

// let argv2 = process.argv;

console.log("base", argv.base);

// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split("=")[1];
