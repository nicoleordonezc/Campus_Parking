
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