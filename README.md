# 🚗 Campus Parking — Sistema de Gestión de Parqueaderos

**Campus Parking** es una empresa que administra múltiples parqueaderos ubicados en distintas ciudades de Colombia. Este proyecto tiene como objetivo modernizar la gestión de información migrando desde hojas de cálculo locales a una solución basada en **MongoDB**, eliminando la duplicidad de datos, reduciendo errores y facilitando el acceso unificado y seguro.

---
## Nombre de Autor:

* Nicole Ordoñez
---

## 📌 **Justificación del uso de MongoDB**

Se eligió **MongoDB** debido a:

* Su **flexibilidad** para modelar datos no estructurados y semi-estructurados, adaptándose a la naturaleza dinámica de los parqueos y zonas.
* La posibilidad de trabajar con **documentos embebidos** y **referencias**, optimizando consultas y reportes.
* Soporte nativo para **agregaciones avanzadas**, **transacciones multi-documento** y **control de acceso por roles**.
* Capacidad de **escala horizontal**, ideal para un sistema que crecerá en número de sedes y registros.

---

## 🗂 **Diseño del modelo de datos**

### 📌 Colecciones creadas

| Colección   | Descripción                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| `usuarios`  | Información general de clientes.  |
| `empleados` | Información general de empleados. |
| `vehiculos` | Datos de los vehículos registrados, vinculados a sus propietarios.              |
| `sedes`     | Sedes físicas con datos de ciudad, empleados asignados y zonas.                        |
| `zonas`     | Zonas con cupo, tipo de vehículo permitido y tarifa.       |
| `parqueos`  | Historial de ingresos y salidas de vehículos.                                   |

---

### 📌 Decisiones de modelado

✅ **Referencias**:

* `usuarios._id` referenciado en `vehiculos.propietario`.
* `empleados._id` referenciado en `sedes.empleados`.
* Decidí referenciar estos datos ya que la mutabilidad es baja y a la hora de hacer consultas en las colecciones referenciadas no son datos que se utilicen comunmente. 

✅ **Embebidos**:

* Datos de las sedes y zonas dentro del documento `sedes`.
* Datos básicos del vehiculo y propietario dentro del documento `parqueos`.
* Datos de zona en el `parqueos` para trazabilidad histórica aunque la zona cambie.
* Decidí embeber estos datos con el fin de que las consultas sean eficientes, rápidas y no necesiten analizar diferentes colecciones para obtener la información que se necesita. Especificamente para la colección `parqueos` legí embeber la información ya que es la colección que más se usa para hacer consultas y entender la dinámica del funcionamiento del parqueadero.

---

### 📌 Validaciones con `$jsonSchema`

Todas las colecciones incluyen validaciones estrictas:

* Tipos de datos
* Campos requeridos
* Reglas con `enum` (por ejemplo, `rol`: "Administrador", "Empleado", "Cliente")
* Estructuras embebidas consistentes

💡 Colección de `usuarios`:

```json
{
  "bsonType": "object",
  "required": ["_id","nombre", "cedula", "contacto"],
  "properties": {
    "_id_": { "bsonType": "objectId" },
    "nombre": { "bsonType": "string" },
    "cedula": { "bsonType": "string" },
    "contacto": { "bsonType": "object" },
  }
}
```
* En la colección usuarios  decidí usar nombre como string con un pattern: "^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(\\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$" para que cada nombre ingresado empiece en mayúscula, para cedula decií que fuera string y poner un maxLength: 10 notificando en la descripcion que la cedula debe ponerse sin puntos o comas. Por último para contacto lo hice un object para ingresar el telefono como string con el pattern: "\\d{3}-\\d{3}-\\d{4}", y el email como string con el attern: "@\\w+\\.com$".

💡 Colección de `empleados`:

```json
{
  "bsonType": "object",
  "required": ["_id","nombre", "cedula", "cargo", "contacto"],
  "properties": {
    "_id_": { "bsonType": "objectId" },
    "nombre": { "bsonType": "string" },
    "cedula": { "bsonType": "string" },
    "cargo": { "bsonType": "string" },
    "contacto": { "bsonType": "object" },
  }
}
```
* En la colección empleado s podemos encontrar los mismos datos que el usuario sumandole el requerimiento cargo que es un enum:["Vigilante", "Cajero", "Auxiliar de parqueo", "Supervisor", "Lavador de vehículos"], para que solo se puedan elegir los cargos seleccionados y adicionalmente se sumó el dato dirección a contácto como string con el pattern: "^(Cll|Cra)".


💡 Colección de `zonas`:

```json
{
  "bsonType": "object",
  "required": ["_id","nombre", "cupo", "precio", "vehiculo_permitido"],
  "properties": {
    "_id_": { "bsonType": "objectId" },
    "nombre": { "bsonType": "string" },
    "cupo": { "bsonType": "int" },
    "precio": { "bsonType": "int" },
    "vehiculo_permitido": { "bsonType": "string" },
  }
}
```
* En la colección zonas el egí que el nombre y vehiculo_permitido fueran enum para que se pueda seleccionar solo las opciones puestas, adicional para cupo y precio decidí que fueran int para poner un valor mínimo y máximo.

💡 Colección de `sedes`:

```json
{
  "bsonType": "object",
  "required": ["_id","ciudad", "zonas"],
  "properties": {
    "_id_": { "bsonType": "objectId" },
    "ciudad": { "bsonType": "string" },
    "zonas": { "bsonType": "array" }
  }
}
```
* En la colección sedes de cidí incluir las zonas y empleados como arrays para ingresar mas de un documento. Para zonas hice un array de objectos y para empleados hice un array de objectId, este campo no lo puse en required para que los datos se creen y despues ingresarle los empleados.

💡 Colección de `vehiculos`:

```json
{
  "bsonType": "object",
  "required": ["_id","tipo_vehiculo", "propietario"],
  "properties": {
    "_id_": { "bsonType": "objectId" },
    "tipo_vehiculo": { "bsonType": "string" },
    "propietario": { "bsonType": "objectId" }
  }
}
```
* En la colección vehiculos el tipo_vehiculo tiene un  enum: ["Carro", "Moto", "Camión", "Bicicleta"] con un condicional si es Bicicleta no requiere placa, y el propietario se referencia el usuario con su _id.

💡 Colección de `parqueos`:

```json
{
  "bsonType": "object",
  "required": ["_id","hora_entrada", "total", "vehiculo", "sede"],
  "properties": {
    "_id_": { "bsonType": "objectId" },
    "hora_entrada": { "bsonType": "date" },
    "total": { "bsonType": "int" },
    "vehiculo": { "bsonType": "object" },
    "sede": { "bsonType": "object" },
  }
}
```
* En la colección parqueos escogí ingresar hora_entrada y hora_salida como date para obtener la fecha y hora de entrada y salida del vehiculo, sin embargo la hora_salida no esta en required ya que el documento debe poder ingresarse in hora de salida. Adicionalmente los campos vehiculo y sede son objectos para embeber la información que estos traen.


---

### 📌 Índices creados

| Índice                             | Colección   | Justificación                              |
| -------------------------          | ----------- | -------------------------                  |
| `placa` (simple)                   | `vehiculos` | Búsqueda rápida por placa                  |
| `nombre + cedula` (compuesto)      | `usuarios`  | Consultas por nombre y cédula              |
| `sede + zona` (compuesto)          | `parqueos`  | Consultas por tipo de vehiculo             |
| `vehiculo.tipo_vehiculo` (simple)  | `parqueos`  | Búsqueda rápida por cédula del propietario |
| `nombre + cedula` (compuesto)      | `empleados` | Consultas por nombre y cédula              |
| `ciudad + zona` (compuesto)        | `sedes`     | Consultas por ubicación                    |
| `nombre + cupo` (simple)           | `zonas`     | Consultas por disponibilidad               |

---

## 🛠 **Estructura del repositorio**

```
📁 [Directorio del proyecto]
├── db_config.js           # Esquemas, validaciones e índices
├── test_dataset.js        # Poblamiento con datos de prueba
├── aggregations.js        # Consultas analíticas
├── roles.js               # Roles y permisos
├── transactions.js        # Registro de ingreso con transacción
└── README.md              # Documentación
```

---

## 🔑 **Estructura de los datos de prueba**

✅ 3 sedes en distintas ciudades
✅ 5 zonas por sede
✅ 10 empleados, vinculados a sedes
✅ 15 clientes
✅ 30 vehículos de 4 tipos
✅ 50 parqueos (activos e históricos)


```javascript
// Inserta zonas
db.zonas.insertMany([...]);

// Inserta empleados y guarda los IDs
let empleado1 = db.empleados.insertOne({...}).insertedId;
let empleado2 = db.empleados.insertOne({...}).insertedId;
// (continúa con los demás empleados)

// Inserta usuarios (clientes) y guarda los IDs
let cliente1 = db.usuarios.insertOne({...}).insertedId;
let cliente2 = db.usuarios.insertOne({...}).insertedId;
// (continúa con los demás clientes)

// Inserta sedes (utilizando los IDs de empleados)
db.sedes.insertOne({...});
db.sedes.insertOne({...});
db.sedes.insertOne({...});

// Inserta vehículos (utilizando los IDs de clientes)
db.vehiculos.insertMany([...]);

// Inserta parqueos
db.parqueos.insertMany([...]);
```

---

## 📊 **Explicación de las agregaciones**

### 1️⃣ ¿Cuántos parqueos se registraron por sede en el último mes?

```js
db.parqueos.aggregate([
  { $match: { hora_entrada: { $gte: ISODate("2025-06-01"), $lte: ISODate("2025-06-30") } } },
  { $group: { _id: { sede: "$sede.ciudad" }, total: { $sum: 1 } } },
  { $sort: { total: 1 } },
  { $project: { _id: 0, Sede: "$_id.sede", parqueosUltimoMes: "$total" } }
])
```

👉 **Descripción**:
Esta consulta filtra los registros de parqueos cuya `hora_entrada` corresponde al mes de junio de 2025. Luego agrupa por ciudad de la sede (`sede.ciudad`) y cuenta el total de parqueos. Finalmente, ordena de menor a mayor cantidad y proyecta un resultado claro con sede y número de parqueos.

---

### 2️⃣ ¿Cuáles son las zonas más ocupadas en cada sede?

```js
db.parqueos.aggregate([
  { $group: { _id: { sede: "$sede.ciudad", zona: "$sede.zona.nombre" }, total: { $sum: 1 } } },
  { $sort: { "_id.sede": 1, total: -1 } },
  { $project: { _id: 0, Sede: "$_id.sede", Zona: "$_id.zona", totalParqueos: "$total" } }
])
```

👉 **Descripción**:
Agrupa todos los parqueos por sede y nombre de la zona, sumando la cantidad de parqueos por combinación. Luego ordena primero por sede (alfabéticamente) y por zonas con más parqueos dentro de cada sede (de mayor a menor). El resultado muestra la sede, zona y el total de parqueos.

---

### 3️⃣ ¿Cuál es el ingreso total generado por parqueo en cada sede?

```js
db.parqueos.aggregate([
  { $group: { _id: { sede: "$sede.ciudad" }, total: { $sum: "$total" } } },
  { $sort: { total: -1 } },
  { $project: { _id: 0, Sede: "$_id.sede", ingresoTotal: "$total" } }
])
```

👉 **Descripción**:
Suma los ingresos generados por los parqueos agrupados por sede. El campo `total` de cada parqueo es el costo generado. Los resultados se ordenan de mayor a menor ingreso.

---

### 4️⃣ ¿Qué cliente ha usado más veces el parqueadero?

```js
db.parqueos.aggregate([
  { $group: { _id: { nombre: "$vehiculo.propietario.nombre", cedula: "$vehiculo.propietario.cedula" }, totalDeIngresos: { $sum: 1 } } },
  { $sort: { totalDeIngresos: -1 } },
  { $project: { _id: 0, nombre: "$_id.nombre", cedula: "$_id.cedula", totalDeIngresos: 1 } },
  { $limit: 1 }
])
```

👉 **Descripción**:
Agrupa los parqueos por cliente (nombre y cédula) y cuenta cuántos ingresos ha realizado. Ordena de mayor a menor y limita el resultado al cliente con más parqueos registrados.

---

### 5️⃣ ¿Qué tipo de vehículo es más frecuente por sede?

```js
db.parqueos.aggregate([
  { $group: { _id: { sede: "$sede.ciudad", vehiculo: "$vehiculo.tipo_vehiculo" }, frecuencia: { $sum: 1 } } },
  { $sort: { "_id.sede": 1, frecuencia: -1 } },
  { $group: { _id: "$_id.sede", vehiculoMasFrecuente: { $first: "$_id.vehiculo" }, cantidad: { $first: "$frecuencia" } } },
  { $project: { _id: 0, Sede: "$_id", vehiculoMasFrecuente: 1, cantidad: 1 } }
])
```

👉 **Descripción**:
Primero agrupa por sede y tipo de vehículo contando cuántas veces se estacionaron. Luego ordena por sede y por mayor frecuencia. Después se agrupa nuevamente por sede y se toma el tipo de vehículo más frecuente por cada sede con su cantidad.

---

### 6️⃣ Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo)

```js
db.parqueos.aggregate([
  { $match: { "vehiculo.propietario.cedula": "9900112233" } },
  { $project: {
      _id: 0,
      nombre: "$vehiculo.propietario.nombre",
      cedula: "$vehiculo.propietario.cedula",
      fecha: { $dateToString: { format: "%Y-%m-%d", date: "$hora_entrada" } },
      sede: "$sede.ciudad",
      zona: "$sede.zona.nombre",
      tipoVehiculo: "$vehiculo.tipo_vehiculo",
      tiempoMinutos: {
        $dateDiff: {
          startDate: "$hora_entrada",
          endDate: { $ifNull: ["$hora_salida", "$$NOW"] },
          unit: "minute"
        }
      },
      costo: "$total"
  }}
])
```

👉 **Descripción**:
Filtra los parqueos de un cliente por cédula, luego proyecta la información relevante: nombre, cédula, fecha formateada, sede, zona, tipo de vehículo, duración del parqueo en minutos y el costo.

---

### 7️⃣ Mostrar los vehículos parqueados actualmente en cada sede

```js
db.parqueos.aggregate([
  { $match: { hora_salida: null } },
  { $group: { _id: { sede: "$sede.ciudad", vehiculo: "$vehiculo.tipo_vehiculo", hora: "$hora_entrada", placa: "$vehiculo.placa" } } },
  { $sort: { "_id.sede": 1, "_id.hora": -1 } },
  { $project: { _id: 0, Sede: "$_id.sede", horaEntrada: "$_id.hora", Vehiculo: "$_id.vehiculo", placa: "$_id.placa" } }
])
```

👉 **Descripción**:
Filtra los parqueos que aún no tienen `hora_salida` (actualmente activos), agrupa la información relevante y ordena por sede y por hora de entrada (de más reciente a más antiguo). El resultado muestra sede, hora de entrada, tipo de vehículo y placa.

---

### 8️⃣ Listar zonas que han excedido su capacidad de parqueo en algún momento

```js
db.parqueos.aggregate([
  { $group: { _id: { sede: "$sede.ciudad", zona: "$sede.zona.nombre", cupo: "$sede.zona.cupo" }, total: { $sum: 1 } } },
  { $match: { $expr: { $gt: ["$total", "$_id.cupo"] } } },
  { $project: { _id: 0, Sede: "$_id.sede", Zona: "$_id.zona", CupoMaximo: "$_id.cupo", CupoExcedido: "$total" } }
])
```

👉 **Descripción**:
Agrupa los parqueos por sede y zona, contabilizando cuántos parqueos se registraron. Luego filtra las zonas donde el total de parqueos superó el cupo máximo registrado para esa zona. Finalmente, muestra la sede, zona, cupo máximo y cuántos parqueos la excedieron.

---

## 💼 **Transacción MongoDB**

🎯 **Escenario:** Al registrar un ingreso:

* Se inserta un nuevo `parqueo`
* Se actualiza el cupo disponible en `zonas`
* Operación dentro de una transacción
* Con manejo de commit, abort y rollback

```js
// Inicia una nueva sesión para la transacción
const session = db.getMongo().startSession();

// Obtiene una referencia al contexto de base de datos dentro de la sesión
const dbSession = session.getDatabase("campus_parking");

// Inicia la transacción
session.startTransaction();

try {
    // 1️⃣ Inserta un nuevo documento en la colección parqueos con los datos del ingreso
    dbSession.parqueos.insertOne({
        'hora_entrada': ISODate("2025-07-02T10:30:00Z"),  // Fecha y hora de entrada
        'hora_salida': ISODate("2025-07-02T15:30:00Z"),  // Fecha y hora de salida
        'total': 3700,  // Total cobrado
        'vehiculo': {
            'tipo_vehiculo': 'Moto',  // Tipo de vehículo
            'placa': 'DEF456G',       // Placa
            'propietario': {
                'nombre': 'Laura Rojas', 
                'cedula': '2233445566'
            }
        },
        'sede': {
            'ciudad': 'Medellín',
            'zona': {
                'nombre': 'Zona de motos',
                'cupo': 9,
                'precio': 3700,
                'vehiculo_permitido': 'Moto'
            }
        }
    });

    // 2️⃣ Actualiza el cupo de la colección zonas solo si hay cupos disponibles (cupo > 0)
    const result = dbSession.zonas.updateOne(
        { nombre: "Zona de motos", precio: 3700, cupo: { $gt: 0 } }, // Condición: zona y cupo mayor a 0
        { $inc: { cupo: -1 } }  // Disminuye el cupo en 1
    );

    // 3️⃣ Verifica si se encontró y actualizó la zona (es decir, si había cupo disponible)
    if (result.matchedCount === 0) {
        // Si no hay cupos disponibles, lanza un error para abortar la transacción
        throw new Error("No hay cupos disponibles para esta zona");
    };

    // 4️⃣ Actualiza el cupo de la zona dentro del array de zonas en la colección sedes
    dbSession.sedes.updateOne(
        { ciudad: "Medellín", "zonas.nombre": "Zona de motos" }, // Busca la sede y zona
        { $inc: { "zonas.$.cupo": -1 } } // Disminuye el cupo de esa zona en el array
    );

    // 5️⃣ Si todo fue exitoso, confirma (commit) la transacción
    session.commitTransaction();
    print("El documento ha sido ingresado exitosamente y las colecciones han sido actualizadas");

} catch (error) {
    // 6️⃣ Si algo falla, aborta (rollback) la transacción
    session.abortTransaction();
    print("Ha ocurrido un error, inténtalo de nuevo");
} finally {
    // 7️⃣ Finaliza la sesión
    session.endSession();
    print("La sesión ha finalizado");
}
```

---

## 🔐 **Roles y permisos**

| Rol               | Permisos                                                         |
| ----------------- | ---------------------------------------------------------------- |
| **Administrador** | Lectura/escritura total, creación de usuarios                    |
| **Empleado**      | Lectura de clientes y vehículos, registro de parqueos de su sede |
| **Cliente**       | Lectura propia y de disponibilidad                               |

Ejemplo:

```javascript
db.createUser({
    user:"admin",
    pwd:"admin123",
    roles:[
        {role:"dbAdmin", db:"campus_parking"},
        {role:"readWrite", db:"campus_parking"}
    ]
})
```
* Para el rol del empleado y del cliente no se pudo especificar que solo vean las sedes y zonas a las que estan regitrados o que el cliente solo vea sus dato ya que estas validaciones se hacen desde el backend.

---

# Conclusiones y mejoras posibles

## ✅ Conclusiones

El desarrollo de **Campus Parking** demuestra cómo MongoDB puede ser una solución flexible y eficiente para gestionar sistemas complejos de parqueaderos distribuidos en múltiples ciudades. Gracias a:

- **Esquemas con validación `$jsonSchema`**, logramos establecer integridad básica de los datos sin perder la naturaleza flexible de NoSQL.
- **Índices bien diseñados**, mejoramos el rendimiento de consultas sobre campos clave como placas de vehículos, cédulas de usuarios y combinaciones sede-zona.
- **Framework de agregaciones**, se implementaron consultas analíticas que permiten obtener reportes dinámicos sobre la operación de los parqueaderos.
- **Uso de transacciones**, se garantizó la consistencia en operaciones críticas como el registro de ingreso de vehículos y la actualización de cupos disponibles.
- **Control de roles**, aseguramos un modelo de seguridad que limita el acceso según el perfil del usuario, lo que refuerza la integridad y privacidad del sistema.

En conjunto, el proyecto logró cubrir los requisitos funcionales, ofreciendo una base de datos robusta, segura y optimizada para el manejo de parqueaderos en un entorno real.

---

## 🚀 Mejoras posibles

Aunque el sistema es funcional y cumple los objetivos iniciales, se identifican las siguientes oportunidades de mejora:

- **Optimización de transacciones:** MongoDB admite transacciones multi-documento, pero su uso puede impactar el rendimiento. 

- **Histórico de cupos:** Guardar un registro temporal del estado de cupos a lo largo del tiempo permitiría análisis más precisos de uso y saturación de zonas.

- **Indexación avanzada:** En la medida que los datos crezcan, analizar y ajustar índices compuestos.

- **Escalabilidad:** Preparar el sistema para un entorno *sharded* de MongoDB si el volumen de datos o la distribución geográfica de sedes lo requiere.

---
