function calcularCostoParqueo(parqueo) {
  const { horaIngreso, horaSalida, tarifaHora } = parqueo;

  // Convertir a objetos Date
  const ingreso = new Date(horaIngreso);
  const salida = new Date(horaSalida);

  // Calcular diferencia en milisegundos
  const diferenciaMs = salida - ingreso;

  // Convertir a horas (1000 ms * 60 s * 60 min)
  const horas = diferenciaMs / (1000 * 60 * 60);

  // Redondear al entero más cercano
  const tiempoTotalHoras = Math.round(horas);

  // Calcular costo total
  const costoTotal = tiempoTotalHoras * tarifaHora;

  return { tiempoTotalHoras, costoTotal };
}


// Tiempo promedio de parqueo por tipo de vehículo

db.parqueos.aggregate([
  {
    $match: {
      hora_salida: { $exists: true }
    }
  },
  {
    $project: {
      tipo: "$vehiculo.tipo_vehiculo",
      duracion_minutos: {
        $divide: [
          { $subtract: ["$hora_salida", "$hora_entrada"] },
          1000 * 60
        ]
      }
    }
  },
  {
    $group: {
      _id: "$tipo",
      tiempo_promedio_minutos: { $avg: "$duracion_minutos" }
    }
  }
]);

// Top 3 clientes con más parqueos

db.parqueos.aggregate([
    {$group:{_id: {nombre:"$vehiculo.propietario.nombre"}, totalParqueos:{$sum:1}}},
    {$sort:{totalParqueos:-1}},
    {$project:{_id:0, Propietario: "$_id.nombre", "totalParqueos":1}}
]);

//Ingresos por zona en una ciudad específica

db.parqueos.aggregate([
    {$match:{"sede.ciudad": "Medellín"}},
    {$group:{_id:{zona:"$sede.zona.nombre"}, ingresoTotal:{$sum:"$total"}}},
  	{$sort:{ingresoTotal:-1}},
    {$project:{_id:0, Zona:"$_id.zona", "ingresoTotal":1}}
]);

//Recaudo total por día

db.parqueos.aggregate([
  {
    $group: {
      _id: {
        $dateToString: { format: "%Y-%m-%d", date: "$hora_entrada" }
      },
      total_diario: { $sum: "$total" },
      parqueos: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

//Cuántas veces se usó cada zona?

db.parqueos.aggregate([
  {
    $group: {
      _id: {
        ciudad: "$sede.ciudad",
        zona: "$sede.zona.nombre"
      },
      veces_usada: { $sum: 1 }
    }
  },
  { $sort: { veces_usada: -1 } }
]);

//Total recaudado por cada placa de vehículo

db.parqueos.aggregate([
  {
    $match: {
      "vehiculo.placa": { $exists: true }
    }
  },
  {
    $group: {
      _id: "$vehiculo.placa",
      propietario: { $first: "$vehiculo.propietario.nombre" },
      total_pagado: { $sum: "$total" },
      visitas: { $sum: 1 }
    }
  },
  { $sort: { total_pagado: -1 } }
]);

//¿Qué tipo de vehículo genera más ingresos?

db.parqueos.aggregate([
  {
    $group: {
      _id: "$vehiculo.tipo_vehiculo",
      ingresos: { $sum: "$total" },
      visitas: { $sum: 1 }
    }
  },
  { $sort: { ingresos: -1 } }
]);

// Mostrar los datos de los vehículos con el nombre y correo del propietario.

db.vehiculos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "propietario",
      foreignField: "_id",
      as: "propietario"
    }
  },
  { $unwind: "$propietario" },
  {
    $project: {
      tipo_vehiculo: 1,
      placa: 1,
      nombre_propietario: "$propietario.nombre",
      correo: "$propietario.contacto.email"
    }
  }
])

//Listar todas las sedes junto con los nombres de sus empleados.

db.sedes.aggregate([
  {
    $lookup: {
      from: "empleados",
      localField: "empleados",
      foreignField: "_id",
      as: "empleados_info"
    }
  },
  {
    $project: {
      ciudad: 1,
      empleados: "$empleados_info.nombre"
    }
  }
])

// Mostrar la cantidad total de cupos por ciudad (sumando los cupos de sus zonas).

db.sedes.aggregate([
  { $unwind: "$zonas" },
  {
    $group: {
      _id: "$ciudad",
      total_cupos: { $sum: "$zonas.cupo" }
    }
  },
  { $sort: { total_cupos: -1 } }
])

//Listar todos los usuarios que tienen bicicleta como vehículo.

db.vehiculos.aggregate([
  { $match: { tipo_vehiculo: "Bicicleta" } },
  {
    $lookup: {
      from: "usuarios",
      localField: "propietario",
      foreignField: "_id",
      as: "propietario"
    }
  },
  { $unwind: "$propietario" },
  {
    $project: {
      nombre: "$propietario.nombre",
      tipo_vehiculo: 1
    }
  }
])

//Listar cuántos vehículos tiene cada usuario.

db.vehiculos.aggregate([
  {
    $group: {
      _id: "$propietario",
      total_vehiculos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      nombre: "$usuario.nombre",
      total_vehiculos: 1
    }
  }
])

// Mostrar las zonas de cada sede donde el vehículo permitido es "Carro" y el precio sea mayor a 5000.

db.sedes.aggregate([
  { $unwind: "$zonas" },
  {
    $match: {
      "zonas.vehiculo_permitido": "Carro",
      "zonas.precio": { $gt: 5000 }
    }
  },
  {
    $project: {
      ciudad: 1,
      nombre_zona: "$zonas.nombre",
      precio: "$zonas.precio"
    }
  }
])


// Mostrar todos los supervisores de todas las sedes.

db.sedes.aggregate([
  {
    $lookup: {
      from: "empleados",
      localField: "empleados",
      foreignField: "_id",
      as: "empleados_info"
    }
  },
  { $unwind: "$empleados_info" },
  { $match: { "empleados_info.cargo": "Supervisor" } },
  {
    $project: {
      ciudad: 1,
      nombre_supervisor: "$empleados_info.nombre",
      cargo: "$empleados_info.cargo"
    }
  }
])


// ¿Qué tipo de vehículo es más común? (el que más aparece)


db.vehiculos.aggregate([
  {
    $group: {
      _id: "$tipo_vehiculo",
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { cantidad: -1 } },
  { $limit: 1 }
])

//system.js ejemplo

db.system.js.insertOne({
  _id: "calcularPoderAtaque",
  value: new Code("function(fuerza, velocidad) { return (fuerza * 0.6) + (velocidad * 0.4); }")
});
const f1 = db.system.js.findOne({ _id: "calcularPoderAtaque" });
const calcularPoderAtaque = new Function('return ' + f1.value.code)();

const mario = db.personajesMario.findOne({ nombre: "Mario" });
calcularPoderAtaque(mario.fuerza, mario.velocidad); 

//index

createIndex({campo:1}, {unique:true},{name:"nombre"}).explain("executionStats")
