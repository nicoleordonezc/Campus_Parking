// Cantidad de parqueos realizados por tipo de vehiculo en cada sede

db.parqueos.aggregate([
    {$group:{ 
        _id:{vehiculo: "$vehiculo.tipo_vehiculo", 
            sede: "$sede.ciudad"}, 
        parqueos_realizados:{$sum:1}}},
    {$sort:{
        "_id.sede":1, parqueos_realizados:-1
    }},
    {$project:{
        _id:0,
        Sede: "$_id.sede",
        Tipo_de_vehiculo: "$_id.vehiculo",
        parqueos_realizados:1
    }}
]);

// Clientes que han utilizado más de 5 veces el parqueadero en el último mes


db.parqueos.aggregate([
    {$match:{ 
        hora_entrada:{
        $gte: ISODate("2025-06-10"), 
        $lte: ISODate("2025-07-10")}
    }},
    {$group:{
        _id:{cliente:"$vehiculo.propietario.nombre"}, 
        totalIngresos:{$sum:1}
    }},
    {$match:{$expr:{$gt:["$totalIngresos", 5]}}},
    {$sort:{totalIngresos:-1}},
    {$project:{
        _id:0, 
        Cliente: "$_id.cliente", 
        Total_de_ingresos_mensuales: "$totalIngresos"
    }},
]);

//Promedio de tiempo de parqueo por tipo de vehiculo en una sede específica

db.parqueos.aggregate([
    {$match: {
        "sede.ciudad": "Medellín",
        hora_salida: { $exists: true }
      }},
    {$project: {
        tipo: "$vehiculo.tipo_vehiculo",
        duracion_horas: {
          $divide: [
            { $subtract: ["$hora_salida", "$hora_entrada"] },
            1000 * 60 * 60
          ]}
      }},
    {$group: {
        _id: "$tipo",
        tiempo_promedio_horas: { $avg: "$duracion_horas" }
      }}
  ]);