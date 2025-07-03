//Administrador

db.createUser({
    user:"nicolAdmin",
    pwd:"admin123",
    roles:[
        {role:"dbAdmin", db:"admin"},
        {role:"readWrite", db:"admin"}
    ]
})

//Empleado de sede

db.createUser({
    user:"juanP",
    pwd:"1234567890",
    roles:[
        {role:"acceso_empleados", db:"campus_parking"}
    ]
})

db.createRole({
    role:"acceso_empleados",
    privileges:[
        {
            resource:{db:"campus_parking", collection:"vehiculos"},
            actions:["find"]
        },
        {
            resource:{db:"campus_parking", collection: "parqueos"},
            actions:["insert", "update", "find"]
        },
        {
            resource:{db:"campus_parking", collection:"sedes"},
            actions:["find"]
        },
         {
            resource:{db:"campus_parking", collection:"zonas"},
            actions:["find"]
        }
    ]
})

//Cliente

db.createUser({
    user:"anaT",
    pwd:"1122334455",
    roles:[
        {role:"acceso_cliente", db:"campus_parking"}
    ]
})

db.createRole({
    role:"acceso_cliente",
    privileges:[
        {
            resource:{db:"campus_parking", collection:"usuarios"},
            actions:["find"]
        },
        {
            resource:{db:"campus_parking", collection:"zonas"},
            actions:["find"]
        },
        {
            resource:{db:"campus_parking", collection: "parqueos"},
            actions:["find"]
        }
    ]
})