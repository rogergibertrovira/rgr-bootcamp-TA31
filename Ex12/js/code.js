// Valida fecha
let fecha = /^\d{2}\/\d{2}\/\d{4}$/;
console.log("19/19/1999 - valida: " + fecha.test("19/19/1999"));
console.log("111/111/111 - valida: " + fecha.test("111/111/111"));

// Valida email
let email = /^([a-zA-Z0-9.-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,3})+$/;
console.log(
  "roger.gibert-empresa2@gmail.com - valido: " +
    email.test("roger.gibert-empresa2@gmail.com")
);
console.log(
  "roger.gibert_empresa2?@gmail.com - valido: " +
    email.test("roger.gibert_empresa2?@gmail.com")
);
console.log(
  "roger.gibert-empresa2@gmail_gratis.com - valido: " +
    email.test("roger.gibert-empresa2@gmail_gratis.com")
);
console.log(
  "roger.gibert-empresa2@gmail.c_o - valido: " +
    email.test("roger.gibert-empresa2@gmail.c_o")
);

// escapeHTML
var replacements = {
  "&": "&amp;",
  '"': "&quot;",
  "<": "&lt;",
  ">": "&gt;",
};

text = '& < " >';
console.log("Texto original: " + text);
console.log(
  "Texto arreglado: " + text.replace(/[&"<>]/g, (c) => replacements[c])
);

// Gira nombre y apellido
let nomApe = "John Smith";
let nombre = nomApe.split(" ");

console.log(nombre[1] + "," + nombre[0]);

// Elimina etiquetas script de cadena html
let scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g;
let cadenaHTML =
  '<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="./js/code.js"></script><title>Expresiones regulares</title></head><body></body></html>';

console.log("Cadena original: " + cadenaHTML);
console.log("Cadena sin scripts: " + cadenaHTML.replace(scriptRegex, ""));
