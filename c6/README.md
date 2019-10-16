# Arquitectura de Software

## SEGURIDAD

- Detects attacks
    - Verify message integrity: Ejercicio crear un checksum de un archivo de configuracion y levantarlo solo si cumple el check sum

- Resist attacks
    - Limit access: 
        - Ejemplo: Tabla de rutas en una instancia de AWS
        - Ejemplo: Deshabilitar usuario root en linux
    - Change default settings: 
        - Ejemplo cambiar puerto de la base de datos: mongod --port 23456
    - Autenticar y autorizar actores: Ejercicio JWT y OAUTH  
    - Encryptar datos: Ejercicio modulo crypt de node