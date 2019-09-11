# Modificabilidad

# Categorías de QA
- Describen el sistema en ***tiempo de ejecución***
    - Disponibilidad
    - Performance 
    - Usabilidad
- Describen el ***desarrollo del sistema***
    - Modificabilidad
    - Testing


### Modificabilidad
- Que puede cambiar?
- Cual es la probabilidad del cambio?
- Cuando se realiza el cambio y quien lo realiza?
- Cual es el costo del cambio?

Estas tacticas tienen el fin de controlar la complejidad de un cambio, como tambien el costo y el tiempo de hacer estos cambios

***Acoplamiento:*** La probabilidad de que un cambio en un modulo afecte a otros modulos propagados

***Cohesion:*** es la probabilidad de que un cambio en un escenario que afecta cambie un modulo, cambie a otro modulo

# Nodejs Project Structure
Para organizar los archivos y carpetas de node existen muchas formas distintas. La más conocida y simple para comenzar a organizar proyectos de Node, es la de MVC. En el curso veremos esta misma.

## Project Structure: MVC
Ver ejemplo estructura de carpetas en `nodejs_structure`

![node](https://i2.wp.com/www.coreycleary.me/wp-content/uploads/2018/11/Express-REST-API-Struc.png?w=741&ssl=1 "Node project structure")

- controllers: Define las rutas y a que controlador derivarlo
- util: Codigo comun y de utilidad para el proyecto en general Ejemplo, una function como mergeTwoArrays(arr1, arr2).
- middlewares: Funciones o logica intermediaria entre las requests antes de derivarlo al controlador que indica la ruta.
    Ejemplo: 
        router.post('/login', auth, controller.login) aquí auth es un middleware function definida en middlewares/auth.js.
- models: Intermediario entre el controller y la database. Puedes definir schemas y hacer mas validaciones antes de escribir en la base de datos. Por ejemplo, podrias utilizar un ORM como Mongoose el cual posee grandes funcionalidades y metodos para user en el schema por si solo
- routes: Define las rutas de la aplicacion con verbos HTTP
    Ejemplo
        ```router.post('/users/create', controller.create)
        router.put('/users/:userId', controller.update)
        router.get('/users', controller.getAll)```
- public: Almacena archivos estaticos como imagenes, javascripts, css, etc. Esta carpeta cuando se construyen API de servidor, por lo general no se utiliza
- views: Contiene templates para ser renderizados por el servidor. Esta carpeta tampoco se suele utilizar cuando se construye una API
- tests: Todo codigo de pruebas unitarias unit tests o pruebas de aceptacion para el servidor API.
- app.js: Actua como el archivo de entrada del proyecto donde se inicializa la aplicacion y otros elementos del proyecto
- package.json: Maneja las dependencias, scripts para corrar con npm y el versionado del proyecto
- config: todo archivo relacionado a la configuracion del proyecto

Lectura adicional:
https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way/

## Project Structure: Features
Cuando el proyecto comienza a crecer o es un sistema grande, conviene en vez de tener todos los controladores, servicios y modelos en las carpeta correspondiente, organizamos por funcionalidad de la siguiente forma:
- Users
    - userController.js
    - userService.js
    - userModel.js
- Pizza
    - pizzaController.js
    - pizzaService.js
    - pizzaModel.js
Etc.

## Project Structure: Fractal
Este modo de organizar carpetas es más complejo pero más generico y abarcativo. Puede leerse más sobre esto en: https://codeburst.io/fractal-a-nodejs-app-structure-for-infinite-scale-d74dda57ee11 

# Ejercicio Modificabilidad
Estudiar el proyecto y las responsabilidades de cada carpeta. En el mismo podemos destacar varias tacticas de modificabilidad, listar al menos uno para cada tactica.

# Ejercicio: Patron de arquitectura ***Pipes and filters***

Se puede usar el patrón arquitectónico Pipes & Filters para dividir una tarea de procesamiento grande en una secuencia de pequeñas tareas independientes (filters) conectadas a través de canales (pipes).

Cada filtro expone una interfaz muy sencilla, simplemente recibe un mensaje desde el pipe de entrada procesa el mensaje y lo deposita en el/los pipe de salida. La conexión entre un filtro y un pipe se llama port.
Por ejemplo, supongamos que necesitamos procesar un pedido de un usuario, un primer filtro puede ser formatear ese pedido a un formato conocido por nuestro sistema, luego podemos pasar a otro filtro que procese el pago de dicho pedido y finalmente un último filtro que almacene el pedido.

Ejercicio que cubre 4 tácticas 
    - Encapsulamiento 
    - Intermediarios 
    - Restringir dependencias 
    - Diferir enlaces
    
Propuesta: pipes & filters haciendo transformaciones de datos en archivos y queues y terminando en un filter que tenga layers y guardado en base de datos con inversión de dependencias (clean architecture).


# Ejercicio Pizzeria
Simular el proceso de solicitud de pizzas en una pizzeria

Tener en cuenta para el sistema: 
- Pedir una pizza de 12cm o 24cm
- Simular entidad "Moza" o "Mozo" donde reciben el pedido.
- Simular entidad chef que recibe la orden
- Considerar que se mantienen 3 recipientes de salsa, da para 4 pizzas de 12cm. Cada vez que agotan dos botellas se comienza a preparar otra.
- Considerar que se mantienen 2 porciones de masa donde da para 3 pizzas de 12cm. Cada vez que se agota un bolo, se comienza a prepara otro
- Considerar que hay al menos 4 etapas distintas con distintos responsables:
    - Chef: Recibir el pedido del "Moza" o "Mozo"
    - Salsero: Preparar la salsa (Pensar como que hay una "sub cocina" que lo prepara) y la vierte a la pizza
    - Masero: Preparar la masa (Pensar como que hay una "sub cocina" que lo prepara) y amasar la pizza deseada
    - Vertidero: Vertir otros ingredientes como el (jamon y aceitunas)
    - Chef: Devolver
- Salsero: Suponer preparar la salsa lleva 10 segundos
- Masero: Suponer preparar la masa lleva 25 segundos
- Vertidero: Suponer ir a buscar los ingredientes lleva 5 segundos

Pizzas disponibles:
    - Pizaa con salsa y muzzarella
    - Pizza con salsa, muzzarella y jamon
    - Pizza con salsa, muzzarella y aceitunas
    - Faina

Funcionalidades
- Obtener menu
- Pedir Pizaa con salsa y muzzarella
- Pedir Pizza con salsa, muzzarella y jamon
- Pedir Pizza con salsa, muzzarella y aceitunas

Conceptos a tener en cuenta
- Proceso de preparacion de pizza
    - Se prepara la masa
    - Se prepara la salsa
    - Se obtienen los ingredientes 