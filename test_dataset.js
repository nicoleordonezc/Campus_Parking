
// Inserción de zonas

db.zonas.insertMany([
  { "nombre": "Zona cubierta", "cupo": 10, "precio": 5000, "vehiculo_permitido": "Carro" },
  { "nombre": "Zona descubierta", "cupo": 25, "precio": 3500, "vehiculo_permitido": "Camión" },
  { "nombre": "Zona de motos", "cupo": 12, "precio": 4000, "vehiculo_permitido": "Moto" },
  { "nombre": "Zona para minusvalidos", "cupo": 5, "precio": 4500, "vehiculo_permitido": "Carro" },
  { "nombre": "Zona de lavado", "cupo": 8, "precio": 6000, "vehiculo_permitido": "Carro" },
  { "nombre": "Zona cubierta", "cupo": 18, "precio": 7000, "vehiculo_permitido": "Bicicleta" },
  { "nombre": "Zona descubierta", "cupo": 20, "precio": 3000, "vehiculo_permitido": "Bicicleta" },
  { "nombre": "Zona de motos", "cupo": 7, "precio": 3200, "vehiculo_permitido": "Moto" },
  { "nombre": "Zona para minusvalidos", "cupo": 4, "precio": 3800, "vehiculo_permitido": "Carro" },
  { "nombre": "Zona de lavado", "cupo": 6, "precio": 5500, "vehiculo_permitido": "Camión" },
  { "nombre": "Zona cubierta", "cupo": 22, "precio": 4800, "vehiculo_permitido": "Carro" },
  { "nombre": "Zona descubierta", "cupo": 14, "precio": 5200, "vehiculo_permitido": "Bicicleta" },
  { "nombre": "Zona de motos", "cupo": 9, "precio": 3700, "vehiculo_permitido": "Moto" },
  { "nombre": "Zona para minusvalidos", "cupo": 3, "precio": 3100, "vehiculo_permitido": "Carro" },
  { "nombre": "Zona de lavado", "cupo": 11, "precio": 6300, "vehiculo_permitido": "Carro" }
])

// Inserción de empleados

let empleado1 = db.empleados.insertOne({
  "nombre": "Juan Pérez",
  "cedula": "1234567890",
  "cargo": "Vigilante",
  "contacto": {
    "telefono": "123-456-7890",
    "email": "juan@gmail.com",
    "direccion": "Cll 10 #10-10"
  }
}).insertedId;

let empleado2 = db.empleados.insertOne( {
  "nombre": "Carlos Gómez",
  "cedula": "2345678901",
  "cargo": "Cajero",
  "contacto": {
    "telefono": "321-654-0987",
    "email": "carlos@gmail.com",
    "direccion": "Cra 5 #5-55"
  }
}).insertedId;

let empleado3 = db.empleados.insertOne({
  "nombre": "Pedro Díaz",
  "cedula": "3456789012",
  "cargo": "Auxiliar de parqueo",
  "contacto": {
    "telefono": "555-123-4567",
    "email": "pedro@gmail.com",
    "direccion": "Cll 20 #20-20"
  }
}).insertedId;

let empleado4 = db.empleados.insertOne({
  "nombre": "Luis Torres",
  "cedula": "4567890123",
  "cargo": "Supervisor",
  "contacto": {
    "telefono": "444-555-6666",
    "email": "luis@gmail.com",
    "direccion": "Cra 7 #7-77"
  }
},).insertedId;

let empleado5 = db.empleados.insertOne({
  "nombre": "Oscar Mejía",
  "cedula": "5678901234",
  "cargo": "Lavador de vehículos",
  "contacto": {
    "telefono": "111-222-3333",
    "email": "oscar@gmail.com",
    "direccion": "Cll 15 #15-15"
  }
}).insertedId;

let empleado6 = db.empleados.insertOne({
  "nombre": "Andres López",
  "cedula": "6789012345",
  "cargo": "Vigilante",
  "contacto": {
    "telefono": "222-333-4444",
    "email": "andres@gmail.com",
    "direccion": "Cra 8 #8-88"
  }
}).insertedId;

let empleado7 = db.empleados.insertOne({
  "nombre": "Diego Rojas",
  "cedula": "7890123456",
  "cargo": "Cajero",
  "contacto": {
    "telefono": "333-444-5555",
    "email": "diego@gmail.com",
    "direccion": "Cll 30 #30-30"
  }
}).insertedId;


let empleado8 = db.empleados.insertOne({
  "nombre": "Jorge Ruiz",
  "cedula": "8901234567",
  "cargo": "Auxiliar de parqueo",
  "contacto": {
    "telefono": "777-888-9999",
    "email": "jorge@gmail.com",
    "direccion": "Cra 6 #6-66"
  }
}).insertedId;

let empleado9 = db.empleados.insertOne({
  "nombre": "Miguel Pardo",
  "cedula": "9012345678",
  "cargo": "Supervisor",
  "contacto": {
    "telefono": "999-888-7777",
    "email": "miguel@gmail.com",
    "direccion": "Cll 40 #40-40"
  }
}).insertedId;

let empleado10 = db.empleados.insertOne({
  "nombre": "Fernando Gil",
  "cedula": "0123456789",
  "cargo": "Lavador de vehículos",
  "contacto": {
    "telefono": "666-555-4444",
    "email": "fernando@gmail.com",
    "direccion": "Cra 9 #9-99"
  }
}).insertedId;


// Inserción de clientes

let cliente1 = db.usuarios.insertOne({ "nombre": "Ana Torres", "cedula": "1122334455", "contacto": { "telefono": "123-123-1234", "email": "ana@gmail.com" }}).insertedId;
let cliente2 = db.usuarios.insertOne({ "nombre": "Laura Rojas", "cedula": "2233445566", "contacto": { "telefono": "234-234-2345", "email": "laura@gmail.com" }}).insertedId;
let cliente3 = db.usuarios.insertOne({ "nombre": "Sofia Pérez", "cedula": "3344556677", "contacto": { "telefono": "345-345-3456", "email": "sofia@gmail.com" } }).insertedId;
let cliente4 = db.usuarios.insertOne({ "nombre": "María Díaz", "cedula": "4455667788", "contacto": { "telefono": "456-456-4567", "email": "maria@gmail.com" } }).insertedId;
let cliente5 = db.usuarios.insertOne({ "nombre": "Camila Ruiz", "cedula": "5566778899", "contacto": { "telefono": "567-567-5678", "email": "camila@gmail.com" } }).insertedId;
let cliente6 = db.usuarios.insertOne({ "nombre": "Valentina Gil", "cedula": "6677889900", "contacto": { "telefono": "678-678-6789", "email": "valentina@gmail.com" } }).insertedId;
let cliente7 = db.usuarios.insertOne({ "nombre": "Isabella López", "cedula": "7788990011", "contacto": { "telefono": "789-789-7890", "email": "isabella@gmail.com" } }).insertedId;
let cliente8 = db.usuarios.insertOne({ "nombre": "Daniela Pardo", "cedula": "8899001122", "contacto": { "telefono": "890-890-8901", "email": "daniela@gmail.com" } }).insertedId;
let cliente9 = db.usuarios.insertOne({ "nombre": "Paula Mejía", "cedula": "9900112233", "contacto": { "telefono": "901-901-9012", "email": "paula@gmail.com" } }).insertedId;
let cliente10 = db.usuarios.insertOne({ "nombre": "Juliana Torres", "cedula": "1011121314", "contacto": { "telefono": "012-012-0123", "email": "juliana@gmail.com" } }).insertedId;
let cliente11 = db.usuarios.insertOne({ "nombre": "Sara Gómez", "cedula": "2021222324", "contacto": { "telefono": "123-234-3456", "email": "sara@gmail.com" } }).insertedId;
let cliente12 = db.usuarios.insertOne({ "nombre": "Lucía Rojas", "cedula": "3031323334", "contacto": { "telefono": "234-345-4567", "email": "lucia@gmail.com" } }).insertedId;
let cliente13 = db.usuarios.insertOne({ "nombre": "Emma Díaz", "cedula": "4041424344", "contacto": { "telefono": "345-456-5678", "email": "emma@gmail.com" } }).insertedId;
let cliente14 = db.usuarios.insertOne({ "nombre": "Olivia Ruiz", "cedula": "5051525354", "contacto": { "telefono": "456-567-6789", "email": "olivia@gmail.com" } }).insertedId;
let cliente15 = db.usuarios.insertOne({ "nombre": "Mónica Gil", "cedula": "6061626364", "contacto": { "telefono": "567-678-7890", "email": "monica@gmail.com" } }).insertedId;

// Inserción de sedes

db.sedes.insertOne({
  ciudad: "Bogotá",
  empleados:[empleado1, empleado2, empleado3, empleado4],
  zonas:[
       { "nombre": "Zona cubierta", "cupo": 10, "precio": 5000, "vehiculo_permitido": "Carro" },
      { "nombre": "Zona descubierta", "cupo": 25, "precio": 3500, "vehiculo_permitido": "Camión" },
      { "nombre": "Zona de motos", "cupo": 12, "precio": 4000, "vehiculo_permitido": "Moto" },
      { "nombre": "Zona para minusvalidos", "cupo": 5, "precio": 4500, "vehiculo_permitido": "Carro" },
      { "nombre": "Zona de lavado", "cupo": 8, "precio": 6000, "vehiculo_permitido": "Carro" }
  ]
});
db.sedes.insertOne({
  ciudad: "Bucaramanga",
  empleados:[empleado5, empleado6, empleado7],
  zonas:[
       { "nombre": "Zona cubierta", "cupo": 18, "precio": 7000, "vehiculo_permitido": "Bicicleta" },
      { "nombre": "Zona descubierta", "cupo": 20, "precio": 3000, "vehiculo_permitido": "Bicicleta" },
      { "nombre": "Zona de motos", "cupo": 7, "precio": 3200, "vehiculo_permitido": "Moto" },
      { "nombre": "Zona para minusvalidos", "cupo": 4, "precio": 3800, "vehiculo_permitido": "Carro" },
      { "nombre": "Zona de lavado", "cupo": 6, "precio": 5500, "vehiculo_permitido": "Camión" }
  ]
});
db.sedes.insertOne({
  ciudad: "Medellín",
  empleados:[empleado8, empleado9, empleado10],
  zonas:[
      { "nombre": "Zona cubierta", "cupo": 22, "precio": 4800, "vehiculo_permitido": "Carro" },
      { "nombre": "Zona descubierta", "cupo": 14, "precio": 5200, "vehiculo_permitido": "Bicicleta" },
      { "nombre": "Zona de motos", "cupo": 9, "precio": 3700, "vehiculo_permitido": "Moto" },
      { "nombre": "Zona para minusvalidos", "cupo": 3, "precio": 3100, "vehiculo_permitido": "Carro" },
      { "nombre": "Zona de lavado", "cupo": 11, "precio": 6300, "vehiculo_permitido": "Carro" }
  ]
});

//Inserción de vehiculos

db.vehiculos.insertMany([
  { tipo_vehiculo: "Carro", placa: "ABC123", propietario: cliente1 },
  { tipo_vehiculo: "Moto", placa: "DEF456G", propietario: cliente2 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente3 },
  { tipo_vehiculo: "Camión", placa: "GHI789", propietario: cliente4 },
  { tipo_vehiculo: "Carro", placa: "JKL234", propietario: cliente5 },
  { tipo_vehiculo: "Moto", placa: "MNO567P", propietario: cliente6 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente7 },
  { tipo_vehiculo: "Camión", placa: "QRS890", propietario: cliente8 },
  { tipo_vehiculo: "Carro", placa: "TUV345", propietario: cliente9 },
  { tipo_vehiculo: "Moto", placa: "WXY678Z", propietario: cliente10 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente11 },
  { tipo_vehiculo: "Camión", placa: "ABC567", propietario: cliente12 },
  { tipo_vehiculo: "Carro", placa: "DEF890", propietario: cliente13 },
  { tipo_vehiculo: "Moto", placa: "GHI123J", propietario: cliente14 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente15 },
  { tipo_vehiculo: "Carro", placa: "JKL456", propietario: cliente1 },
  { tipo_vehiculo: "Moto", placa: "MNO789P", propietario: cliente2 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente3 },
  { tipo_vehiculo: "Camión", placa: "QRS234", propietario: cliente4 },
  { tipo_vehiculo: "Carro", placa: "TUV567", propietario: cliente5 },
  { tipo_vehiculo: "Moto", placa: "WXY890Z", propietario: cliente6 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente7 },
  { tipo_vehiculo: "Camión", placa: "ABC345", propietario: cliente8 },
  { tipo_vehiculo: "Carro", placa: "DEF678", propietario: cliente9 },
  { tipo_vehiculo: "Moto", placa: "GHI901J", propietario: cliente10 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente11 },
  { tipo_vehiculo: "Camión", placa: "JKL123", propietario: cliente12 },
  { tipo_vehiculo: "Carro", placa: "MNO456", propietario: cliente13 },
  { tipo_vehiculo: "Moto", placa: "QRS789P", propietario: cliente14 },
  { tipo_vehiculo: "Bicicleta", propietario: cliente15 }
]
)

//Inserción de parqueos

db.parqueos.insertMany([
  {'hora_entrada': ISODate("2025-06-02T10:30:00Z"), 'total': 3700, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Laura Rojas', 'cedula': '2233445566'}, 'placa': 'DEF456G'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de motos', 'cupo': 9, 'precio': 3700, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-06-02T11:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T09:00:00Z"), 'total': 10400, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Sofia Pérez', 'cedula': '3344556677'}}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona descubierta', 'cupo': 14, 'precio': 5200, 'vehiculo_permitido': 'Bicicleta'}}, 'hora_salida': ISODate("2025-07-01T11:00:00Z")},
  {'hora_entrada': ISODate("2025-06-05T10:30:00Z"), 'total': 3700, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Valentina Gil', 'cedula': '6677889900'}, 'placa': 'MNO567P'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de motos', 'cupo': 9, 'precio': 3700, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-06-05T11:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T06:30:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-06-12T06:00:00Z"), 'total': 6300, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de lavado', 'cupo': 11, 'precio': 6300, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-06-12T08:15:00Z"), 'total': 6000, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de lavado', 'cupo': 8, 'precio': 6000, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T06:45:00Z"), 'total': 5200, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Isabella López', 'cedula': '7788990011'}}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona descubierta', 'cupo': 14, 'precio': 5200, 'vehiculo_permitido': 'Bicicleta'}}},
  {'hora_entrada': ISODate("2025-07-02T11:00:00Z"), 'total': 7600, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-02T13:00:00Z")},
  {'hora_entrada': ISODate("2025-07-02T06:30:00Z"), 'total': 6300, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'Daniela Pardo', 'cedula': '8899001122'}, 'placa': 'QRS890'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de lavado', 'cupo': 11, 'precio': 6300, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-02T07:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T11:15:00Z"), 'total': 3500, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'Daniela Pardo', 'cedula': '8899001122'}, 'placa': 'QRS890'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona descubierta', 'cupo': 25, 'precio': 3500, 'vehiculo_permitido': 'Camión'}}},
  {'hora_entrada': ISODate("2025-07-01T11:45:00Z"), 'total': 11100, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Valentina Gil', 'cedula': '6677889900'}, 'placa': 'MNO567P'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de motos', 'cupo': 9, 'precio': 3700, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-07-01T14:45:00Z")},
  {'hora_entrada': ISODate("2025-06-18T06:15:00Z"), 'total': 3200, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Laura Rojas', 'cedula': '2233445566'}, 'placa': 'DEF456G'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona de motos', 'cupo': 7, 'precio': 3200, 'vehiculo_permitido': 'Moto'}}},
  {'hora_entrada': ISODate("2025-06-18T07:30:00Z"), 'total': 3200, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Juliana Torres', 'cedula': '1011121314'}, 'placa': 'WXY678Z'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona de motos', 'cupo': 7, 'precio': 3200, 'vehiculo_permitido': 'Moto'}}},
  {'hora_entrada': ISODate("2025-06-18T09:15:00Z"), 'total': 7000, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Sofia Pérez', 'cedula': '3344556677'}}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona cubierta', 'cupo': 18, 'precio': 7000, 'vehiculo_permitido': 'Bicicleta'}}},
  {'hora_entrada': ISODate("2025-06-18T08:15:00Z"), 'total': 7600, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T10:15:00Z")},
  {'hora_entrada': ISODate("2025-07-01T08:30:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T09:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T08:00:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T06:00:00Z"), 'total': 4000, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Laura Rojas', 'cedula': '2233445566'}, 'placa': 'DEF456G'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de motos', 'cupo': 12, 'precio': 4000, 'vehiculo_permitido': 'Moto'}}},
  {'hora_entrada': ISODate("2025-07-01T09:00:00Z"), 'total': 7400, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Valentina Gil', 'cedula': '6677889900'}, 'placa': 'MNO567P'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de motos', 'cupo': 9, 'precio': 3700, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-07-01T11:00:00Z")},
  {'hora_entrada': ISODate("2025-07-01T10:15:00Z"), 'total': 11000, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'María Díaz', 'cedula': '4455667788'}, 'placa': 'GHI789'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona de lavado', 'cupo': 6, 'precio': 5500, 'vehiculo_permitido': 'Camión'}}, 'hora_salida': ISODate("2025-07-01T12:15:00Z")},
  {'hora_entrada': ISODate("2025-07-01T07:30:00Z"), 'total': 4000, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Laura Rojas', 'cedula': '2233445566'}, 'placa': 'DEF456G'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de motos', 'cupo': 12, 'precio': 4000, 'vehiculo_permitido': 'Moto'}}},
  {'hora_entrada': ISODate("2025-07-01T09:15:00Z"), 'total': 3100, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'María Díaz', 'cedula': '4455667788'}, 'placa': 'GHI789'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 3, 'precio': 3100, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T10:15:00Z")},
  {'hora_entrada': ISODate("2025-06-20T07:00:00Z"), 'total': 11100, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Juliana Torres', 'cedula': '1011121314'}, 'placa': 'WXY678Z'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de motos', 'cupo': 9, 'precio': 3700, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-06-20T10:00:00Z")},
  {'hora_entrada': ISODate("2025-06-20T08:15:00Z"), 'total': 6400, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Juliana Torres', 'cedula': '1011121314'}, 'placa': 'WXY678Z'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona de motos', 'cupo': 7, 'precio': 3200, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-06-20T10:15:00Z")},
  {'hora_entrada': ISODate("2025-06-20T06:15:00Z"), 'total': 12000, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de lavado', 'cupo': 8, 'precio': 6000, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-06-20T08:15:00Z")},
  {'hora_entrada': ISODate("2025-06-20T07:45:00Z"), 'total': 9300, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 3, 'precio': 3100, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-06-20T10:45:00Z")},
  {'hora_entrada': ISODate("2025-07-01T07:30:00Z"), 'total': 9300, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'Daniela Pardo', 'cedula': '8899001122'}, 'placa': 'QRS890'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 3, 'precio': 3100, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T10:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T09:15:00Z"), 'total': 4500, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 5, 'precio': 4500, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T10:15:00Z"), 'total': 5000, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona cubierta', 'cupo': 10, 'precio': 5000, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T07:00:00Z"), 'total': 5500, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'Daniela Pardo', 'cedula': '8899001122'}, 'placa': 'QRS890'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona de lavado', 'cupo': 6, 'precio': 5500, 'vehiculo_permitido': 'Camión'}}},
  {'hora_entrada': ISODate("2025-07-01T06:00:00Z"), 'total': 8000, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Juliana Torres', 'cedula': '1011121314'}, 'placa': 'WXY678Z'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de motos', 'cupo': 12, 'precio': 4000, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-07-01T08:00:00Z")},
  {'hora_entrada': ISODate("2025-07-01T11:15:00Z"), 'total': 14400, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona cubierta', 'cupo': 22, 'precio': 4800, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T14:15:00Z")},
  {'hora_entrada': ISODate("2025-07-01T06:30:00Z"), 'total': 6000, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de lavado', 'cupo': 8, 'precio': 6000, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T10:30:00Z"), 'total': 3500, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'Daniela Pardo', 'cedula': '8899001122'}, 'placa': 'QRS890'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona descubierta', 'cupo': 25, 'precio': 3500, 'vehiculo_permitido': 'Camión'}}, 'hora_salida': ISODate("2025-07-01T11:30:00Z")},
  {'hora_entrada': ISODate("2025-06-25T11:15:00Z"), 'total': 4800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona cubierta', 'cupo': 22, 'precio': 4800, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-06-25T10:45:00Z"), 'total': 3000, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Isabella López', 'cedula': '7788990011'}}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona descubierta', 'cupo': 20, 'precio': 3000, 'vehiculo_permitido': 'Bicicleta'}}, 'hora_salida': ISODate("2025-06-25T11:45:00Z")},
  {'hora_entrada': ISODate("2025-06-25T06:15:00Z"), 'total': 3100, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 3, 'precio': 3100, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-06-25T07:15:00Z")},
  {'hora_entrada': ISODate("2025-07-01T08:00:00Z"), 'total': 6300, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de lavado', 'cupo': 11, 'precio': 6300, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T07:45:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T09:00:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T08:30:00Z"), 'total': 15600, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Sofia Pérez', 'cedula': '3344556677'}}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona descubierta', 'cupo': 14, 'precio': 5200, 'vehiculo_permitido': 'Bicicleta'}}, 'hora_salida': ISODate("2025-07-01T11:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T07:30:00Z"), 'total': 3700, 'vehiculo': {'tipo_vehiculo': 'Moto', 'propietario': {'nombre': 'Laura Rojas', 'cedula': '2233445566'}, 'placa': 'DEF456G'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona de motos', 'cupo': 9, 'precio': 3700, 'vehiculo_permitido': 'Moto'}}, 'hora_salida': ISODate("2025-07-01T08:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T10:15:00Z"), 'total': 5500, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'María Díaz', 'cedula': '4455667788'}, 'placa': 'GHI789'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona de lavado', 'cupo': 6, 'precio': 5500, 'vehiculo_permitido': 'Camión'}}, 'hora_salida': ISODate("2025-07-01T11:15:00Z")},
  {'hora_entrada': ISODate("2025-07-01T11:00:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}},
  {'hora_entrada': ISODate("2025-07-01T06:15:00Z"), 'total': 7000, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Sofia Pérez', 'cedula': '3344556677'}}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona cubierta', 'cupo': 18, 'precio': 7000, 'vehiculo_permitido': 'Bicicleta'}}},
  {'hora_entrada': ISODate("2025-07-01T11:00:00Z"), 'total': 3100, 'vehiculo': {'tipo_vehiculo': 'Camión', 'propietario': {'nombre': 'Daniela Pardo', 'cedula': '8899001122'}, 'placa': 'QRS890'}, 'sede': {'ciudad': 'Medellín', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 3, 'precio': 3100, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T12:00:00Z")},
  {'hora_entrada': ISODate("2025-07-01T09:45:00Z"), 'total': 18000, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Camila Ruiz', 'cedula': '5566778899'}, 'placa': 'JKL234'}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona de lavado', 'cupo': 8, 'precio': 6000, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-07-01T12:45:00Z")},
  {'hora_entrada': ISODate("2025-06-28T07:15:00Z"), 'total': 7600, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Ana Torres', 'cedula': '1122334455'}, 'placa': 'ABC123'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}, 'hora_salida': ISODate("2025-06-28T09:15:00Z")},
  {'hora_entrada': ISODate("2025-06-28T06:30:00Z"), 'total': 10500, 'vehiculo': {'tipo_vehiculo': 'Bicicleta', 'propietario': {'nombre': 'Isabella López', 'cedula': '7788990011'}}, 'sede': {'ciudad': 'Bogotá', 'zona': {'nombre': 'Zona descubierta', 'cupo': 25, 'precio': 3500, 'vehiculo_permitido': 'Camión'}}, 'hora_salida': ISODate("2025-06-28T09:30:00Z")},
  {'hora_entrada': ISODate("2025-07-01T10:30:00Z"), 'total': 3800, 'vehiculo': {'tipo_vehiculo': 'Carro', 'propietario': {'nombre': 'Paula Mejía', 'cedula': '9900112233'}, 'placa': 'TUV345'}, 'sede': {'ciudad': 'Bucaramanga', 'zona': {'nombre': 'Zona para minusvalidos', 'cupo': 4, 'precio': 3800, 'vehiculo_permitido': 'Carro'}}}
]);