// ¿Qué hace?

// El método Promise.all() espera que todas las promesas se resuelvan. Si una falla, 
// la promesa resultante se rechaza.

// **********************************************************************************************

// EJEMPLO 1 : Obtener múltiples datos simultáneamente

const usuario = new Promise((resolve) => setTimeout(() => resolve("Datos del usuario"), 1000));
const historial = new Promise((resolve) => setTimeout(() => resolve("Historial de compras"), 2000));

Promise.all([usuario, historial]).then(console.log);

// Explicación:

// Ambas promesas se ejecutan en paralelo.

// Promise.all() devuelve un array con los resultados una vez que todas se han resuelto.

// **********************************************************************************************

// EJEMPLO 2 : Validar varias condiciones antes de continuar

const verificarUsuario = new Promise((resolve) => setTimeout(() => resolve("Usuario válido"), 1000));
const verificarSaldo = new Promise((resolve) => setTimeout(() => resolve("Saldo suficiente"), 1500));

Promise.all([verificarUsuario, verificarSaldo]).then(console.log);
//Explicación:

// Se verifican dos condiciones antes de continuar.

// Promise.all() asegura que ambas promesas se cumplan antes de continuar.


// **********************************************************************************************

// EJEMPLO 3 : Carga de varios archivos JSON

const archivo1 = fetch("datos1.json").then((res) => res.json());
const archivo2 = fetch("datos2.json").then((res) => res.json());

Promise.all([archivo1, archivo2]).then(console.log);

// Explicación:

// Se realizan dos peticiones fetch en paralelo.

// Promise.all() devuelve un array con los datos de ambos archivos JSON

// Conclusión

// Cada método de Promise tiene su utilidad:

// Promise.race(): Devuelve la primera promesa en finalizar.

// Promise.any(): Retorna la primera promesa exitosa.

// Promise.all(): Espera a que todas se completen.