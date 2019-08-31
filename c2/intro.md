# Nodejs
Javascript en el backend
Wrapper alrededor un VM como V8
Platform for tools

#Cuando usar Node
- Entrada y salida 
- Built in modules
- Asynchronous APIs (no threads)
- C++ addons 
- NPM module dependency manager
#Cuando no usar Node
- Tareas pesadas para la CPU.
# Desventajas
- Different way of thinking


#Thinking Async
- Process-Per-Client (Multi-process)
- Thread-per-client (Multi-threaded)
- Event Loop ("Single threaded")

## How Node is different?
El uso inteligente de los clientes es la responsabilidad de tu aplicacion

## Callback
A function that Node will "call back" at a later point of the program

function cb(data) {
    // something
}

someAsyncMethod(cd);

## Repl 
Read Eval Print Loop
.editor
.help

## Timers
var timeoutId = setTimeout(() => {}, 1000)

clearTimeout(timeoutId)

## Environment variables
TEST=1 node testEnv.js

## Más de process
setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!');

## Npm: Package repository
### Commands
npm init
npm install --save moment
npm install --save-dev mocha

### Carpetas y Archivos
Ejemplo: 0_versioning_&_update
package.json
package-lock.json
node_modules

### Semantic versioning
4.2.0
- 4: Major - Breaking changes
- 2: Minor - Backward compatibilities
- 0: Patch - Bug fixes

~4.2.0

~: Puede instalar cualquier patch
^: Puede instalar cualquier Minor 
=: Igual a la version 


~4.2.x
x: Cualquiera desde 0

## Paquetes locales y globales
`npm i loadash`

`npm i -g create-react-app`

## Update NPM Packages
`npm update`
`npm show request versions`
Ejemplo: 0_versioning_&_update 

## Creando y publicando un paquete NPM
- Primero crea un carpeta con un proyecto de node (con package.json). Para esto dentro de la carpeta ejecutamos `npm init`. 
- Recuerda que dentro de package.json tiene que tener la propiedad "main: index.js" u otro archivo para que 
    la libreria sabe que exponer cuando otros clientes la requieran
- `npm login` 
- `npm publish` 
- Recuerda: cuando utilices esta librería en un proyecto cliente, procura que la carpeta de la libreria no este dentro de tus carpetas del proyecto cliente, ya que `npm install tu-libreria` detecta que existe la carpeta `tu-libreria` y utiliza esta en vez de considerarla como una libreria normal de internet 
Ejemplo '1_publish-npm'

# Module
Todo archivo o carpeta que contiene codigo.
Ejemplo: '2_module'

# Node globals
Ejemplo: '3_node_globals'

# Variables de entorno
Ejemplo: '4_envs'

# Event Loop
Ejemplo: 5_Event_loop
Ejemplo: blocking-vs-non-blocking.js

# Crear servidor 
Ejemplo: node-example.js
Ejemplo blockear servidor: node-example.js // Descomentar blockeo

# Servidor Express 
Ejemplo: 
  express-example
  express-time-service