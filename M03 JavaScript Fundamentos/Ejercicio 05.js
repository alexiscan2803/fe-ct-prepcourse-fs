/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0){
      return "Es positivo";
   } else if (num < 0){
      return "Es negativo";
   } else {
      return false;
   }
}
console.log(esPositivo(21)); // devuelve "Es positivo"
console.log(esPositivo(-2)); // devuelve "Es negativo"
console.log(esPositivo(0)); // devuelve FALSE

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + "!"
}
console.log = agregarSimboloExclamacion("hello world"); // devuelve hello world!

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return nombre + " " + apellido;
}

console.log(combinarNombres("Alexis", "Cantero"));

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola " + nombre + "!"
}
console.log(obtenerSaludo("Alexis"));

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   const area = alto * ancho;
   return area + " m2";
}
console.log(obtenerAreaRectangulo(5, 4))

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   const perimetro = lado * 4
   return perimetro + " cm";
}
console.log(retornarPerimetro(12)) // devuelve "48 cm"

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   const area = base * altura
   return area + " cm2"
}
console.log(areaDelTriangulo(12, 2)); //devuelve "24 cm2"

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   const dolar = euro * 1.20;
   return dolar + " USD" ;
}
console.log(deEuroAdolar(5))

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

   if (letra.length === 1 && vocales.includes(letra)) {
      return "Es vocal";
   } else {
      return "Dato incorrecto";
   }
}
console.log(esVocal("a"));
console.log(esVocal("z"));
console.log(esVocal("ae"));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
