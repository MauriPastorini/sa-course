# Ejercicio: Patron de arquitectura **_CQRS_**

Se puede usar el patrón arquitectónico CQRS para separar las operaciones que leen datos, de las operaciones que actualizan datos.

Propuesta: Ejercicio con command/query (CQRS) que le llegan eventos con distintas prioridades y escriben en una base relacional que se sincroniza a través de publish/suscribe (utilizando bull y redis) con la base para lecturas en Mongo.

# Ejercicio Banco

Se desea modelar un banco de manera simplificada. Supondremos que se manejan las siguientes entidades: 
- **Usuarios**: de los que sabemos el nombre completo y el email
- **Cuentas**: cada cuenta pertenece a un usuario, y un usuario puede tener mas de una cuenta, de las cuentas interesa conocer su tipo de moneda (Dolares, Pesos, Euros etc)
- **Transacciones**: las transacciones se realizan sobre una unica cuenta, y una cuenta puede tener muchas transacciones, de estas interesa saber el monto y el concepto (deposito o retiro). Por el momento no se validará que una cuenta tenga saldo suficiente para poder retirar dinero pero interesa poder validar en el futuro.

El banco desea poder crear nuevos usuarios, cuentas y transacciones de manera segura y manteniendo la integridad de los datos. Tambien se desea poder generar reportes sobre el balance de las cuentas de los usuarios, siendo el **balance** el monto total de una cuenta en un momento dado, tambien interesa poder ver las ultimas tres transacciones realizadas sobre cada cuenta.

## Se pide:

- Para simular actividad sobre las cuentas, realizar un script que genere usuarios, cuentas y muchas transacciones sobre las mismas.
- Utilizar mongo para guardar la información de los reportes
- Utilizar bull para sincronizar la base de datos transaccional con la base de datos de reportes. 


## Para pensar:
- En que me beneficia separar los modelos de lectura y escritura?
- Que complejidades extra agrega la sincronización de datos? 
- Es necesario utilizar prioridades en la cola de mensajes? 
- Cree necesario implementar logica de re-intentos en caso de fallo al sincronizar?
- Que sucede si de alguna manera se pierden los datos de redis (si no se estan guardando en disco), como podria asegurar integridad en la sincronización? 

## Sobre la solución:
- Se implemento una rest-api utilizando express que expone los servicios para crear usuarios, cuentas, transacciones y obtener reportes de balance.
- Se implementaron scripts que permiten "simular" la actividad del banco:
    * **setup.js** inicializa la base de escritura
    * **write.js** genera usuarios, cuentas y transacciones
    * **read.js** genera un reporte utilizando la base de escritura
    * **read-mongo.js** genera un reporte utilizando la base de lectura
    * **sync.js** se encarga de sincronizar ambas bases de datos
    * **arena.js** corre arena en 0.0.0.0:4567 para monitorear bull
Para poder simular hay que correr primero el setup, y luego dejar corriendo en consolas separadas write, read-mongo y sync.
