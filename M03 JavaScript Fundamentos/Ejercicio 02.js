/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

const resultado1 = devolverString("Perro");
console.log(resultado1);

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:

   return x + y
}  
   const resultado2 = suma(5, 3);
   console.log(resultado2);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:

   return x - y
}
   const resultado3 = resta(8, 4)
   console.log(resultado3);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y
}
const resultado4 = divide(20, 2);
console.log(resultado4);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y
}
const resultado5 = multiplica(20, 8);
console.log(resultado5);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y
}
const resultado6 = obtenerResto(21, 5)
console.log(resultado6);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
