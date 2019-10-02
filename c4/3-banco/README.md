# Ejercicio: Patron de arquitectura **_CQRS_**

Se puede usar el patrón arquitectónico CQRS para separar las operaciones que leen datos, de las operaciones que actualizan datos.

Ejercicio que cubre x tácticas - 

Propuesta: Ejercicio con command/query (CQRS) que le llegan eventos con distintas prioridades y escriben en una base en Mongo que se sincroniza a través de publish/suscribe con la base para lecturas en Redis (en el futuro hay otros interesados en ese evento de actualización).

# Ejercicio Banco

Se pide modelar los Usuarios, Cuentas y Transacciones de un banco (de forma simplificada). 

De que manera podría verse comprometida la performance del sistema a la hora de dar un reporte de "balance" a un usuario x? y al momento de realizar una transacción? 