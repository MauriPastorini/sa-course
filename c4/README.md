# Eficiencia

# Categorías de QA

- Describen el sistema en **_tiempo de ejecución_**
  - Disponibilidad
  - Performance
  - Usabilidad
- Describen el **_desarrollo del sistema_**
  - Modificabilidad
  - Testing

### Eficiencia o Performance

# Command and Query Responsibility Segregation (CQRS) pattern

Segregate operations that read data from operations that update data by using separate interfaces. This can maximize performance, scalability, and security. Supports the evolution of the system over time through higher flexibility, and prevents update commands from causing merge conflicts at the domain level.

# Ejercicio Performance

Se pide modelar los Usuarios, Cuentas y Transacciones de un banco (de forma simplificada). 
De que manera podría verse comprometida la performance del sistema a la hora de dar un reporte de "balance" a un usuario x? y al momento de realizar una transacción? 

