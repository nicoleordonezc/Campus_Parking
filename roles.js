//Administrador

db.createUser({
    user:"admin",
    pwd:"admin123",
    roles:[
        {role:"dbAdmin", db:"campus_parking"},
        {role:"readWrite", db:"campus_parking"}
    ]
})

//Empleado de sede

db.createRole({
    role:"acceso_empleados",
    privileges:[
        {
            resource:{db:"campus_parking", collection:"usuarios"},
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
    ], roles:[]
});

db.createUser({
    user:"juanPerez",
    pwd:"1234567890",
    roles:[]
});

db.grantRolesToUser(
    "juanPerez",
    [{role:"acceso_empleados", db:"campus_parking"}]
);

//Cliente

db.createRole({
    role:"acceso_cliente",
    privileges:[
        {
            resource:{db:"campus_parking", collection:"usuarios"},
            actions:["find"]
        },
        {
            resource:{db:"campus_parking", collection:"sedes"},
            actions:["find"]
        },
        {
            resource:{db:"campus_parking", collection: "parqueos"},
            actions:["find"]
        }
    ], roles:[]
})

db.createUser({
    user:"anaTorres",
    pwd:"1122334455",
    roles:[]
});

db.grantRolesToUser(
    "anaTorres",
    [{role:"acceso_cliente", db:"campus_parking"}]
)