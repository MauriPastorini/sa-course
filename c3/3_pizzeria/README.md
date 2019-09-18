# Ejercicio: Patron de arquitectura **_Pipes and filters_**

Se puede usar el patrón arquitectónico Pipes & Filters para dividir una tarea de procesamiento grande en una secuencia de pequeñas tareas independientes (filters) conectadas a través de canales (pipes).

Cada filtro expone una interfaz muy sencilla, simplemente recibe un mensaje desde el pipe de entrada procesa el mensaje y lo deposita en el/los pipe de salida. La conexión entre un filtro y un pipe se llama port.
Por ejemplo, supongamos que necesitamos procesar un pedido de un usuario, un primer filtro puede ser formatear ese pedido a un formato conocido por nuestro sistema, luego podemos pasar a otro filtro que procese el pago de dicho pedido y finalmente un último filtro que almacene el pedido.

Ejercicio que cubre 4 tácticas - Encapsulamiento - Intermediarios - Restringir dependencias - Diferir enlaces

Propuesta: pipes & filters haciendo transformaciones de datos en archivos y queues y terminando en un filter que tenga layers y guardado en base de datos con inversión de dependencias (clean architecture).

# Ejercicio Pizzeria

Simular el proceso de solicitud de pizzas en una pizzeria

Tener en cuenta para el sistema:

- Pedir una pizza de 12cm o 24cm
- Simular entidad "Moza" o "Mozo" donde reciben el pedido.
- Simular entidad chef que recibe la orden
- Considerar que se mantienen 3 recipientes de salsa, da para 4 pizzas de 12cm cada uno. Cada vez que agotan dos botellas se comienza a preparar otra.
- Considerar que se mantienen 2 porciones de masa donde da para 3 pizzas de 12cm cada uno. Cada vez que se agota un bolo, se comienza a prepara otro
- Considerar que hay al menos 4 etapas distintas con distintos responsables:
  - Chef: Recibir el pedido del "Moza" o "Mozo"
  - Salsero: Preparar la salsa (Pensar como que hay una "sub cocina" que lo prepara) y la vierte a la pizza
  - Masero: Preparar la masa (Pensar como que hay una "sub cocina" que lo prepara) y amasar la pizza deseada
  - Vertidero: Vertir otros ingredientes como el (jamon y aceitunas)
  - Chef: Devolver
- Salsero: Suponer preparar la salsa lleva 10 segundos
- Masero: Suponer preparar la masa lleva 25 segundos
- Vertidero: Suponer ir a buscar los ingredientes lleva 5 segundos

Pizzas disponibles: - Pizza con salsa y muzzarella - Pizza con salsa, muzzarella y jamon - Pizza con salsa, muzzarella y aceitunas

Funcionalidades

- Obtener menu
- Pedir Pizza con salsa y muzzarella
- Pedir Pizza con salsa, muzzarella y jamon
- Pedir Pizza con salsa, muzzarella y aceitunas

Conceptos a tener en cuenta

- Proceso de preparacion de pizza
  - Se prepara la masa
  - Se prepara la salsa
  - Se obtienen los ingredientes
