// ¿Qué hace?

// El método Promise.any() devuelve la primera promesa que se resuelve con éxito. 
// Si todas fallan, lanza un AggregateError.

// **********************************************************************************************

// EJEMPLO 1 : Buscando el primer resultado válido

const promesa1 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 1000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa exitosa"), 2000));
const promesa3 = new Promise((_, reject) => setTimeout(() => reject("Error 2"), 1500));

Promise.any([promesa1, promesa2, promesa3]).then(console.log).catch(console.error);

// Explicación:

// promesa1 y promesa3 fallan.

// promesa2 se resuelve con éxito y es devuelta por Promise.any().

// **********************************************************************************************

// EJEMPLO 2 : Múltiples intentos de conexión a una API

const api1 = new Promise((_, reject) => setTimeout(() => reject("API 1 falló"), 1000));
const api2 = new Promise((resolve) => setTimeout(() => resolve("API 2 respondió"), 1500));
const api3 = new Promise((_, reject) => setTimeout(() => reject("API 3 falló"), 1200));

Promise.any([api1, api2, api3]).then(console.log).catch(console.error);

//Explicación:

// tareaLenta tarda 5 segundos.

// Se simulan 3 llamadas a API, solo la segunda tiene éxito.

// Promise.any() devuelve el primer resultado válido.

// **********************************************************************************************

// EJEMPLO 3 : Carga de recursos desde diferentes CDNs

const cdn1 = new Promise((_, reject) => setTimeout(() => reject("CDN 1 falló"), 1000));
const cdn2 = new Promise((resolve) => setTimeout(() => resolve("Recurso cargado desde CDN 2"), 1200));
const cdn3 = new Promise((_, reject) => setTimeout(() => reject("CDN 3 falló"), 900));

Promise.any([cdn1, cdn2, cdn3]).then(console.log).catch(console.error);

// Explicación:

// Solo cdn2 tiene éxito, por lo que Promise.any() la devuelve.