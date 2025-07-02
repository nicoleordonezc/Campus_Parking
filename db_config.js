//COLECCION DE ZONAS 

db.createCollection("zonas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "cupo",
                "precio",
                "vehiculo_permitido"
            ],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description: "Identificador único"
                },
                nombre: {
                    bsonType: "string",
                    enum: ["Zona cubierta", "Zona descubierta", "Zona de motos", "Zona para minusvalidos", "Zona de lavado"],
                    description: "El nombre solo puede tomar estos valores: Zona curbierta, Zona descubierta, Zona de motos, Zona para minusvalidos, Zona de lavado"
                },
                cupo:{
                    bsonType: "int",
                    maximum: 30,
                    description: "El cupo máximo es de 30"
                },
                precio:{
                    bsonType: "int",
                    minimum: 3000,
                    description: "El precio mínimo es de $3000"
                },
                vehiculo_permitido:{
                    bsonType: "string",
                    enum: ["Carro", "Moto", "Camión", "Bicicleta"],
                    description: "Los vehículos permitidos solo pueden tomar estos valores: Carro, Moto, Camión, Bicicleta"
                }
            },
            additionalProperties: false
        }
    }
}),

//COLECCION DE SEDES

db.createCollection("sedes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "ciudad",
                "empleados",
                "zonas"
            ],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description: "Identificador único"
                },
                ciudad: {
                    bsonType: "string",
                    pattern: "^[A-Z]",
                    description: "La ciudad debe iniciar con mayúscula"
                },
                empleados:{
                    bsonType: "array",
                    description: "El campo 'empleados' es una lista",
                    items: {
                        bsonType: "objectId",
                        description: "Cada elemento debe ser un ObjectId"}
                },
                zonas:{
                bsonType: "array",
                description: "Lista de zonas",
                items:{
                    bsonType:"object",
                    required: [
                    "nombre",
                    "cupo",
                    "precio",
                    "vehiculo_permitido"
                ],
                properties:{
                    nombre: {
                        bsonType: "string",
                        enum: ["Zona cubierta", "Zona descubierta", "Zona de motos", "Zona para minusvalidos", "Zona de lavado"],
                        description: "El nombre solo puede tomar estos valores: Zona curbierta, Zona descubierta, Zona de motos, Zona para minusvalidos, Zona de lavado"
                    },
                    cupo:{
                        bsonType: "int",
                        maximum: 30,
                        description: "El cupo máximo es de 30"
                    },
                    precio:{
                        bsonType: "int",
                        minimum: 3000,
                        description: "El precio mínimo es de $3000"
                    },
                    vehiculo_permitido:{
                        bsonType: "string",
                        enum: ["Carro", "Moto", "Camión", "Bicicleta"],
                        description: "Los vehículos permitidos solo pueden tomar estos valores: Carro, Moto, Camión, Bicicleta"
                    }
                },
                additionalProperties: false
            }
                    },
                },
                additionalProperties: false
            }
        }
})

//COLECCION DE USUARIOS


db.createCollection("usuarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "cedula"
            ],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description: "Identificador único"
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(\\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$",
                    description: "El nombre y apellido deben iniciar con mayúscula"
                },
                cedula:{
                    bsonType: "string",
                    maxLength: 10,
                    description: "La cédula no incluye puntos o comas y tiene máximo 10 caracteres"
                },
                cargo:{
                    bsonType: "string",
                    enum:["Vigilante", "Cajero", "Auxiliar de parqueo", "Supervisor", "Lavador de vehículos"],
                    description: "El cargo solo puede tener los siguiente valore: Vigilante, Cajero, Auxiliar de parqueo, Supervisor, Lavador de vehículos"
                },
                contacto:{
                    bsonType: "object",
                    description: "Contácto tiene: telefono, email y dirección",
                    required:[
                        "telefono",
                        "email"
                    ],
                    properties: {
                        telefono:{
                            bsonType: "string",
                            pattern: "\\d{3}-\\d{3}-\\d{4}",
                            description: "El patrón del telefono debe ser xxx-xxx-xxxx"
                        },
                        email: {
                            bsonType: "string",
                            pattern: "@\\w+\\.com$",
                            description: "El email debe tener @ y finalizar en .com"
                        },
                        direccion:{
                            bsonType:"string",
                            pattern: "^(Cll|Cra)",
                            description: "La diección debe iniciar con Cll o Cra"
                        }
                    },                    
                        additionalProperties: false
                }
            },
            additionalProperties: false
        }
    }
})


//COLECCION DE VEHICULOS

db.createCollection("vehiculos",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[
                "_id",
                "tipo_vehiculo",
                "propietario"
            ],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description: "Identificador único"
                },
                tipo_vehiculo: {
                    bsonType: "string",
                    enum: ["Carro", "Moto", "Camión", "Bicicleta"],
                    description: "Los vehículos permitidos solo pueden tomar estos valores: Carro, Moto, Camión, Bicicleta"
                },
                placa:{
                    bsonType:"string",
                    pattern:"^[A-Z][A-Z]{2}\\d{3}[A-Z]?",
                    description:"La placa deber escribirse en mayúscula para carro XXX123, para moto XXX123X"
                },
                if: {
                    properties: {tipo_vehiculo:{enum: ["Bicicleta"]}}
                },
                then:{
                    not:{required:["placa"]}
                },
                propietario:{
                    bsonType: "object",
                    required:[
                         "nombre",
                         "cedula"
                    ],
                    properties:{
                        nombre: {
                        bsonType: "string",
                        pattern: "^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(\\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$",
                        description: "El nombre y apellido deben iniciar con mayúscula"
                        },
                        cedula:{
                        bsonType: "string",
                        maxLength: 10,
                        description: "La cédula no incluye puntos o comas y tiene máximo 10 caracteres"
                        }
                    },
                    additionalProperties:false
                }
            }, 
            additionalProperties:false
    }
}}),

// COLECCION PARQUEOS

db.createCollection("parqueos",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:[
                "_id",
                "hora_entrada",
                "total",
                "vehiculo",
                "sede"
            ],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description: "Identificador único"
                },
                hora_entrada:{
                    bsonType:"date",
                    description:"La hora de entrada debe ser contener la fecha completa ISODate('2025-07-01T10:45:00Z')"
                },
                hora_salida:{
                    bsonType:"date",
                    description:"La hora de salida debe ser contener la fecha completa ISODate('2025-07-01T10:45:00Z')"
                },
                total:{
                    bsonType:"int",
                    description:"El total debe ser entero"
                },
                vehiculo:{
                    bsonType:"object",
                    required:[
                        "tipo_vehiculo",
                        "propietario"
                    ],
                    properties:{
                        tipo_vehiculo: {
                            bsonType: "string",
                            enum: ["Carro", "Moto", "Camión", "Bicicleta"],
                            description: "Los vehículos permitidos solo pueden tomar estos valores: Carro, Moto, Camión, Bicicleta"
                        },
                        placa:{
                            bsonType:"string",
                            pattern:"^[A-Z][A-Z]{2}\\d{3}[A-Z]?",
                            description:"La placa deber escribirse en mayúscula para carro XXX123, para moto XXX123X"
                        },
                        if: {
                            properties: {tipo_vehiculo:{enum: ["Bicicleta"]}}
                        },
                        then:{
                            not:{required:["placa"]}
                        },
                        propietario:{
                            bsonType: "object",
                            required:[
                                "nombre",
                                "cedula"
                            ],
                            properties:{
                                nombre: {
                                bsonType: "string",
                                pattern: "^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(\\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$",
                                description: "El nombre y apellido deben iniciar con mayúscula"
                                },
                                cedula:{
                                bsonType: "string",
                                maxLength: 10,
                                description: "La cédula no incluye puntos o comas y tiene máximo 10 caracteres"
                                }
                            }
                        }
                    }, 
                    additionalProperties:false
                },
                sede:{
                     bsonType: "object",
                required: [
                    "ciudad",
                    "zonas"
                ],
                properties:{
                    ciudad: {
                        bsonType: "string",
                        pattern: "^[A-Z]",
                        description: "La ciudad debe iniciar con mayúscula"
                    },
                    zonas:{
                    bsonType: "array",
                    description: "Lista de zonas",
                    items:{
                        bsonType:"object",
                        required: [
                        "nombre",
                        "cupo",
                        "precio",
                        "vehiculo_permitido"
                    ],
                    properties:{
                        nombre: {
                            bsonType: "string",
                            enum: ["Zona cubierta", "Zona descubierta", "Zona de motos", "Zona para minusvalidos", "Zona de lavado"],
                            description: "El nombre solo puede tomar estos valores: Zona curbierta, Zona descubierta, Zona de motos, Zona para minusvalidos, Zona de lavado"
                        },
                        cupo:{
                            bsonType: "int",
                            maximum: 30,
                            description: "El cupo máximo es de 30"
                        },
                        precio:{
                            bsonType: "int",
                            minimum: 3000,
                            description: "El precio mínimo es de $3000"
                        },
                        vehiculo_permitido:{
                            bsonType: "string",
                            enum: ["Carro", "Moto", "Camión", "Bicicleta"],
                            description: "Los vehículos permitidos solo pueden tomar estos valores: Carro, Moto, Camión, Bicicleta"
                        }
                    },
                    additionalProperties: false
                }
            }
        }, 
            additionalProperties:false
}},
    additionalProperties:false
}}})