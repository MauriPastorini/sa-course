# Arquitectura de Software
## Seguridad
- CIA
    - Consistency
    - Integrity 
    - Availability

- Soporte al CIA
    - Autenticacion
    - No rechazo
    - Autorizacion

- Detects attacks
    - Ejemplo env_example
    - Ejemplo checksum_files_example
    - Verify message integrity: Ejercicio crear un checksum de un archivo de configuracion y levantarlo solo si cumple el check sum

- Resist attacks
    - Limit access: 
        - Ejemplo: Tabla de rutas en una instancia de AWS
        - Ejemplo: Deshabilitar usuario root en linux
    - Change default settings: 
        - Ejemplo cambiar puerto de la base de datos: mongod --port 23456
    - Autenticar y autorizar actores: Ejercicio JWT y OAUTH  
    - Encryptar datos: Ejemplo modulo crypt de node

## Clase 6 - Autenticación y autorización con JWT y Publish/Suscribe
### Objetivos

## SEGURIDAD

### Ejercicio

Exponer un API REST con JSON como formato de intercambio de mensajes.
Los endpoints son los siguientes:

1. **GET** */users?offset=0&limit=2*
	```json
    {
        "offset": 0,
        "limit": 2,
        "size": 2,
        "data": [
            {
              "id": 1,
              "firstName": "Nombre 1",
              "lastName": "Apellido 1",
              "email": "example@example.com"
            },
            {
              "id": 2,
              "firstName": "Nombre 2",
              "lastName": "Apellido 2",
              "email": "example2@example.com"
            }
        ]
	}
    ```
2. **GET** */users/:id*
	```json
    {
        "id": 1,
        "firstName": "Nombre 1",
        "lastName": "Apellido 1",
        "email": "example@example.com"
    }
    ```
3. **POST** */users/*
	```json
    {
        "username": "username",
        "password": "pass",
    }
    ```
4. **POST** */users/me/auth/*
	```json
    {
        "username": "username",
        "password": "pass",
    }
    ```

Todos los endpoints excepto */sign in y create/* deben estar protegidos. 
Al momento de implementar la protección de endpoints primero va a tener que generar un token de JWT que será devuelto al cliente y éste lo utilizara en las subsiguiente llamadas.

**POST** *//users/me/auth/*

```json
{
    "username": "client_id",
    "password": "client_secret_shh"
}
```
    
respuesta:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6Im9ydCIsImlhdCI6MTU1MTI5NDkwOX0.1AcM6WjVEcU9iE6OEsAPBOMUXGGF9Mt9o8iCxVzOdZ0"
}
```

**GET** */users/:id*

Agregar el header ```token``` con la informacion

```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6Im9ydCIsImlhdCI6MTU1MTI5NDkwOX0.1AcM6WjVEcU9iE6OEsAPBOMUXGGF9Mt9o8iCxVzOdZ0```

Puede bajar una colección de los endpoints de ejemplo [aquí](User_API.postman_collection.json).

### Posibles Node modules a utilizar

Algunos de los posibles módulos a utilizar (no restringidos a éstos) son:

1. *[koa](https://github.com/koajs/koa)*: web framework
2. *[koa-json](https://github.com/koajs/json)*: convierte objetos en JSON
3. *[koa-logger](https://github.com/koajs/logger)*: logging de cada request y response
4. *[koa-router](https://github.com/ZijianHe/koa-router)*: gestión simple de rutas
5. *[koa-bodyparser](https://github.com/koajs/bodyparser)*: parsing del request body
6. *[koa-jwt](https://github.com/koajs/jwt)*: helper para manejar JWT con koa
7. *[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)*: implementación de JWT

- Resist attacks
    - Limit access: 
        - Ejemplo: Tabla de rutas en una instancia de AWS
        - Ejemplo: Deshabilitar usuario root en linux
    - Change default settings: 
        - Ejemplo cambiar puerto de la base de datos: mongod --port 23456
    - Autenticar y autorizar actores: Ejercicio JWT y OAUTH  
    - Encryptar datos: Ejercicio modulo crypt de node