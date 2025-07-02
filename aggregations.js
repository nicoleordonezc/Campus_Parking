//¿Cuántos parqueos se registraron por sede en el último mes?

db.parqueos.aggregate([
    {$match: {
        hora_entrada:{
            $gte: ISODate("2025-06-01"), 
            $lte: ISODate("2025-06-30")}}},
    {$group:{_id:{sede:"$sede.ciudad"}, total: {$sum:1}}},
    {$sort:{totalPaqueos:1}},
    {$project:{
        _id:0,
        Sede:"$_id.sede",
        parqueosUltimoMes:"$total"
    }}
])

//¿Cuáles son las zonas más ocupadas en cada sede?

db.parqueos.aggregate([
        {$group: 
            {_id:{sede:"$sede.ciudad", zona: "$sede.zona.nombre"}, 
            total:{$sum:1}
        }},
        {$sort:
            {"_id.sede":1, total:-1}
        },
        {$project:{
            _id:0,
            Sede:"$_id.sede",
            Zona:"$_id.zona",
            totalParqueos:"$total"
        }}
    ])

//¿Cuál es el ingreso total generado por parqueo en cada sede?

db.parqueos.aggregate([
    {$group:
        {_id:{sede:"$sede.ciudad"},
            total:{$sum:"$total"}
        }
    },
    {$sort: {total:-1}},
    {$project:{
        _id:0,
        Sede:"$_id.sede",
        ingresoTotal:"$total"
    }}
])

//¿Qué cliente ha usado más veces el parqueadero?

db.parqueos.aggregate([
    {$group:{
        _id:{nombre:"$vehiculo.propietario.nombre", cedula: "$vehiculo.propietario.cedula"},
        totalDeIngresos: {$sum:1}
    }},
    {$sort:{totalDeIngresos:-1}},
    {$project:{
        _id:0,
        nombre:"$_id.nombre",
        cedula:"$_id.cedula",
        totalDeIngresos:1
    }},
    {$limit:1}
])

//Qué tipo de vehículo es más frecuente por sede?

db.parqueos.aggregate([
    {$group:{
        _id:{sede:"$sede.ciudad", vehiculo: "$vehiculo.tipo_vehiculo"},
        frecuencia:{$sum:1}
    }},
    {$sort:{"_id.sede":1, 
        frecuencia:-1}},
    {$group:{
        _id:"$_id.sede",
        vehiculoMasFrecuente: {$first:"$_id.vehiculo"},
        cantidad:{$first:"$frecuencia"}
    }},
    {$project:{
        _id:0,
        Sede:"$_id",
        vehiculoMasFrecuente:1,
        cantidad:1
    }}
])

//Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).

db.parqueos.aggregate([
    {$match:{
       "vehiculo.propietario.cedula":"9900112233"
    }},
    {$project:{
        _id:0,
        nombre:"$vehiculo.propietario.nombre",
        cedula: "$vehiculo.propietario.cedula",
        fecha: {
            $dateToString:{
                format: "%Y-%m-%d",
                date:"$hora_entrada"
            }
        },
        sede:"$sede.ciudad",
        zona:"$sede.zona.nombre",
        tipoVehiculo:"$vehiculo.tipo_vehiculo",
        tiempoMinutos:{
            $dateDiff:{
                startDate:"$hora_entrada",
                endDate: {
                    $ifNull:["$hora_salida", "$$NOW"]
                },
                unit:"minute"},
            },
        costo:"$total"
    }}
])

//Mostrar los vehículos parqueados actualmente en cada sede.

db.parqueos.aggregate([
    {$match:{
        hora_salida:null
    }},
    {$group:
        {_id:{sede:"$sede.ciudad", vehiculo:"$vehiculo.tipo_vehiculo", hora:"$hora_entrada", placa: "$vehiculo.placa"}}
    },
    {$sort: {"_id.sede":1, "_id.hora":-1}},
    {$project:{
        _id:0,
        Sede:"$_id.sede",
        horaEntrada:"$_id.hora",
        Vehiculo: "$_id.vehiculo",
        placa: "$_id.placa"
    }}
])

//Listar zonas que han excedido su capacidad de parqueo en algún momento.

db.parqueos.aggregate([
    {$group:{
           _id:{sede:"$sede.ciudad", zona:"$sede.zona.nombre", cupo:"$sede.zona.cupo"},
           total:{$sum:1},
    }},
    {$match:{$expr:{$gt:["$total", "$_id.cupo"]}}},
    {$project:{
        _id:0,
        Sede:"$_id.sede",
        Zona:"$_id.zona",
        CupoMaximo:"$_id.cupo",
        CupoExcedido: "$total"
    }}
])