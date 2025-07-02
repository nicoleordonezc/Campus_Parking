//¿Cuántos parqueos se registraron por sede en el último mes?

db.parqueos.aggregate([
    {$match: {
        hora_entrada:{
            $gte: ISODate("2025-06-01"), 
            $lte: ISODate("2025-06-30")}}},
    {$group:{_id:"$sede.ciudad", totalParqueos: {$sum:1}}},
    {$sort:{totalPaqueos:1}}])

//¿Cuáles son las zonas más ocupadas en cada sede?

db.parqueos.aggregate(
    [
        {$group: {_id:{Sede:"$sede.ciudad", Zona: "$sede.zona.nombre"}, totalParqueos:{$sum:1}}},
    ]
)