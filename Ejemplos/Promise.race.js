// ¿QUE HACE?

// El método Promise.race() recibe un array de promesas y devuelve una nueva promesa que 
// se resuelve o rechaza tan pronto como la primera de ellas finaliza, sin importar su estado.

// **********************************************************************************************

// EJEMPLO 1 : Carrera entre dos promesas

const promesa1 = new Promise((resolve) => setTimeout(() => resolve("Promesa 1"), 2000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa 2"), 1000));

Promise.race([promesa1, promesa2]).then((resultado) => {
    console.log(resultado); // "Promesa 2" porque se resuelve primero
});

// Explicación:

// promesa1 se resuelve en 2 segundos.

// promesa2 se resuelve en 1 segundo.

// Promise.race() devuelve el resultado de promesa2 porque es la primera en resolverse.

// **********************************************************************************************

// EJEMPLO 2 : Implementando un timeout

const tareaLenta = new Promise((resolve) => setTimeout(() => resolve("Tarea completada"), 5000));
const tiempoLimite = new Promise((_, reject) => setTimeout(() => reject("Tiempo agotado"), 3000));

Promise.race([tareaLenta, tiempoLimite])
    .then(console.log)
    .catch(console.error);

//Explicación:

// tareaLenta tarda 5 segundos.

// tiempoLimite se rechaza en 3 segundos.

// Promise.race() rechaza la promesa porque tiempoLimite finaliza primero.

// **********************************************************************************************

// EJEMPLO 3 : Simulando carga de datos desde diferentes servidores

const servidor1 = new Promise((resolve) => setTimeout(() => resolve("Datos del servidor 1"), 2000));
const servidor2 = new Promise((resolve) => setTimeout(() => resolve("Datos del servidor 2"), 1000));

Promise.race([servidor1, servidor2]).then(console.log);

// Explicación:

// Se simulan dos servidores con diferentes tiempos de respuesta.

// Promise.race() devuelve el resultado del servidor más rápido.