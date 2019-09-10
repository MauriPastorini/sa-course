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


Ejercicio que cubre 4 tácticas 
    - Encapsulamiento 
    - Intermediarios 
    - Restringir dependencias 
    - Diferir enlaces
    
Propuesta: pipes & filters haciendo transformaciones de datos en archivos y queues y terminando en un filter que tenga layers y guardado en base de datos con inversión de dependencias (clean architecture).

