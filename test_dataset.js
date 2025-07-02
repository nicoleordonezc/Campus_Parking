
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

db.usuarios.insertMany([
  {
    "nombre": "Juan Pérez",
    "cedula": "1234567890",
    "cargo": "Vigilante",
    "contacto": {
      "telefono": "123-456-7890",
      "email": "juan@gmail.com",
      "direccion": "Cll 10 #10-10"
    }
  },
  {
    "nombre": "Carlos Gómez",
    "cedula": "2345678901",
    "cargo": "Cajero",
    "contacto": {
      "telefono": "321-654-0987",
      "email": "carlos@gmail.com",
      "direccion": "Cra 5 #5-55"
    }
  },
  {
    "nombre": "Pedro Díaz",
    "cedula": "3456789012",
    "cargo": "Auxiliar de parqueo",
    "contacto": {
      "telefono": "555-123-4567",
      "email": "pedro@gmail.com",
      "direccion": "Cll 20 #20-20"
    }
  },
  {
    "nombre": "Luis Torres",
    "cedula": "4567890123",
    "cargo": "Supervisor",
    "contacto": {
      "telefono": "444-555-6666",
      "email": "luis@gmail.com",
      "direccion": "Cra 7 #7-77"
    }
  },
  {
    "nombre": "Oscar Mejía",
    "cedula": "5678901234",
    "cargo": "Lavador de vehículos",
    "contacto": {
      "telefono": "111-222-3333",
      "email": "oscar@gmail.com",
      "direccion": "Cll 15 #15-15"
    }
  },
  {
    "nombre": "Andres López",
    "cedula": "6789012345",
    "cargo": "Vigilante",
    "contacto": {
      "telefono": "222-333-4444",
      "email": "andres@gmail.com",
      "direccion": "Cra 8 #8-88"
    }
  },
  {
    "nombre": "Diego Rojas",
    "cedula": "7890123456",
    "cargo": "Cajero",
    "contacto": {
      "telefono": "333-444-5555",
      "email": "diego@gmail.com",
      "direccion": "Cll 30 #30-30"
    }
  },
  {
    "nombre": "Jorge Ruiz",
    "cedula": "8901234567",
    "cargo": "Auxiliar de parqueo",
    "contacto": {
      "telefono": "777-888-9999",
      "email": "jorge@gmail.com",
      "direccion": "Cra 6 #6-66"
    }
  },
  {
    "nombre": "Miguel Pardo",
    "cedula": "9012345678",
    "cargo": "Supervisor",
    "contacto": {
      "telefono": "999-888-7777",
      "email": "miguel@gmail.com",
      "direccion": "Cll 40 #40-40"
    }
  },
  {
    "nombre": "Fernando Gil",
    "cedula": "0123456789",
    "cargo": "Lavador de vehículos",
    "contacto": {
      "telefono": "666-555-4444",
      "email": "fernando@gmail.com",
      "direccion": "Cra 9 #9-99"
    }
  }
]
)

// Inserción de clientes

db.usuarios.insertMany([
  { "nombre": "Ana Torres", "cedula": "1122334455", "contacto": { "telefono": "123-123-1234", "email": "ana@gmail.com" } },
  { "nombre": "Laura Rojas", "cedula": "2233445566", "contacto": { "telefono": "234-234-2345", "email": "laura@gmail.com" } },
  { "nombre": "Sofia Pérez", "cedula": "3344556677", "contacto": { "telefono": "345-345-3456", "email": "sofia@gmail.com" } },
  { "nombre": "María Díaz", "cedula": "4455667788", "contacto": { "telefono": "456-456-4567", "email": "maria@gmail.com" } },
  { "nombre": "Camila Ruiz", "cedula": "5566778899", "contacto": { "telefono": "567-567-5678", "email": "camila@gmail.com" } },
  { "nombre": "Valentina Gil", "cedula": "6677889900", "contacto": { "telefono": "678-678-6789", "email": "valentina@gmail.com" } },
  { "nombre": "Isabella López", "cedula": "7788990011", "contacto": { "telefono": "789-789-7890", "email": "isabella@gmail.com" } },
  { "nombre": "Daniela Pardo", "cedula": "8899001122", "contacto": { "telefono": "890-890-8901", "email": "daniela@gmail.com" } },
  { "nombre": "Paula Mejía", "cedula": "9900112233", "contacto": { "telefono": "901-901-9012", "email": "paula@gmail.com" } },
  { "nombre": "Juliana Torres", "cedula": "1011121314", "contacto": { "telefono": "012-012-0123", "email": "juliana@gmail.com" } },
  { "nombre": "Sara Gómez", "cedula": "2021222324", "contacto": { "telefono": "123-234-3456", "email": "sara@gmail.com" } },
  { "nombre": "Lucía Rojas", "cedula": "3031323334", "contacto": { "telefono": "234-345-4567", "email": "lucia@gmail.com" } },
  { "nombre": "Emma Díaz", "cedula": "4041424344", "contacto": { "telefono": "345-456-5678", "email": "emma@gmail.com" } },
  { "nombre": "Olivia Ruiz", "cedula": "5051525354", "contacto": { "telefono": "456-567-6789", "email": "olivia@gmail.com" } },
  { "nombre": "Mónica Gil", "cedula": "6061626364", "contacto": { "telefono": "567-678-7890", "email": "monica@gmail.com" } }
]
)

// Inserción de sedes

db.sedes.insertMany([{
    ciudad: "Bogotá",
    empleados:[ObjectId("68648eb9abbadc05da3a509d"), ObjectId("68648eb9abbadc05da3a509e"), ObjectId("68648eb9abbadc05da3a509f"), ObjectId("68648eb9abbadc05da3a50a0")],
    zonas:[
         { "nombre": "Zona cubierta", "cupo": 10, "precio": 5000, "vehiculo_permitido": "Carro" },
        { "nombre": "Zona descubierta", "cupo": 25, "precio": 3500, "vehiculo_permitido": "Camión" },
        { "nombre": "Zona de motos", "cupo": 12, "precio": 4000, "vehiculo_permitido": "Moto" },
        { "nombre": "Zona para minusvalidos", "cupo": 5, "precio": 4500, "vehiculo_permitido": "Carro" },
        { "nombre": "Zona de lavado", "cupo": 8, "precio": 6000, "vehiculo_permitido": "Carro" }
    ]
},
{
    ciudad: "Bucaramanga",
    empleados:[ObjectId("68648eb9abbadc05da3a50a1"), ObjectId("68648eb9abbadc05da3a50a2"), ObjectId("68648eb9abbadc05da3a50a3")],
    zonas:[
         { "nombre": "Zona cubierta", "cupo": 18, "precio": 7000, "vehiculo_permitido": "Bicicleta" },
        { "nombre": "Zona descubierta", "cupo": 20, "precio": 3000, "vehiculo_permitido": "Bicicleta" },
        { "nombre": "Zona de motos", "cupo": 7, "precio": 3200, "vehiculo_permitido": "Moto" },
        { "nombre": "Zona para minusvalidos", "cupo": 4, "precio": 3800, "vehiculo_permitido": "Carro" },
        { "nombre": "Zona de lavado", "cupo": 6, "precio": 5500, "vehiculo_permitido": "Camión" }
    ]
},
{
    ciudad: "Medellín",
    empleados:[ObjectId("68648eb9abbadc05da3a50a4"), ObjectId("68648eb9abbadc05da3a50a5"), ObjectId("68648eb9abbadc05da3a50a6")],
    zonas:[
        { "nombre": "Zona cubierta", "cupo": 22, "precio": 4800, "vehiculo_permitido": "Carro" },
        { "nombre": "Zona descubierta", "cupo": 14, "precio": 5200, "vehiculo_permitido": "Bicicleta" },
        { "nombre": "Zona de motos", "cupo": 9, "precio": 3700, "vehiculo_permitido": "Moto" },
        { "nombre": "Zona para minusvalidos", "cupo": 3, "precio": 3100, "vehiculo_permitido": "Carro" },
        { "nombre": "Zona de lavado", "cupo": 11, "precio": 6300, "vehiculo_permitido": "Carro" }
    ]
}])

//Inserción de vehiculos

db.vehiculos.insertMany([
  { tipo_vehiculo: "Carro", placa: "ABC123", propietario: { nombre: "Ana Torres", cedula: "1122334455" } },
  { tipo_vehiculo: "Moto", placa: "DEF456G", propietario: { nombre: "Laura Rojas", cedula: "2233445566" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Sofia Pérez", cedula: "3344556677" } },
  { tipo_vehiculo: "Camión", placa: "GHI789", propietario: { nombre: "María Díaz", cedula: "4455667788" } },
  { tipo_vehiculo: "Carro", placa: "JKL234", propietario: { nombre: "Camila Ruiz", cedula: "5566778899" } },
  { tipo_vehiculo: "Moto", placa: "MNO567P", propietario: { nombre: "Valentina Gil", cedula: "6677889900" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Isabella López", cedula: "7788990011" } },
  { tipo_vehiculo: "Camión", placa: "QRS890", propietario: { nombre: "Daniela Pardo", cedula: "8899001122" } },
  { tipo_vehiculo: "Carro", placa: "TUV345", propietario: { nombre: "Paula Mejía", cedula: "9900112233" } },
  { tipo_vehiculo: "Moto", placa: "WXY678Z", propietario: { nombre: "Juliana Torres", cedula: "1011121314" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Sara Gómez", cedula: "2021222324" } },
  { tipo_vehiculo: "Camión", placa: "ABC567", propietario: { nombre: "Lucía Rojas", cedula: "3031323334" } },
  { tipo_vehiculo: "Carro", placa: "DEF890", propietario: { nombre: "Emma Díaz", cedula: "4041424344" } },
  { tipo_vehiculo: "Moto", placa: "GHI123J", propietario: { nombre: "Olivia Ruiz", cedula: "5051525354" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Mónica Gil", cedula: "6061626364" } },
  { tipo_vehiculo: "Carro", placa: "JKL456", propietario: { nombre: "Ana Torres", cedula: "1122334455" } },
  { tipo_vehiculo: "Moto", placa: "MNO789P", propietario: { nombre: "Laura Rojas", cedula: "2233445566" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Sofia Pérez", cedula: "3344556677" } },
  { tipo_vehiculo: "Camión", placa: "QRS234", propietario: { nombre: "María Díaz", cedula: "4455667788" } },
  { tipo_vehiculo: "Carro", placa: "TUV567", propietario: { nombre: "Camila Ruiz", cedula: "5566778899" } },
  { tipo_vehiculo: "Moto", placa: "WXY890Z", propietario: { nombre: "Valentina Gil", cedula: "6677889900" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Isabella López", cedula: "7788990011" } },
  { tipo_vehiculo: "Camión", placa: "ABC345", propietario: { nombre: "Daniela Pardo", cedula: "8899001122" } },
  { tipo_vehiculo: "Carro", placa: "DEF678", propietario: { nombre: "Paula Mejía", cedula: "9900112233" } },
  { tipo_vehiculo: "Moto", placa: "GHI901J", propietario: { nombre: "Juliana Torres", cedula: "1011121314" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Sara Gómez", cedula: "2021222324" } },
  { tipo_vehiculo: "Camión", placa: "JKL123", propietario: { nombre: "Lucía Rojas", cedula: "3031323334" } },
  { tipo_vehiculo: "Carro", placa: "MNO456", propietario: { nombre: "Emma Díaz", cedula: "4041424344" } },
  { tipo_vehiculo: "Moto", placa: "QRS789P", propietario: { nombre: "Olivia Ruiz", cedula: "5051525354" } },
  { tipo_vehiculo: "Bicicleta", propietario: { nombre: "Mónica Gil", cedula: "6061626364" } }
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