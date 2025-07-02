const session = db.getMongo().startSession();
const dbSession= session.getDatabase("campus_parking");
session.startTransaction();

try {
    dbSession.parqueos.insertOne({
        'hora_entrada': ISODate("2025-07-02T10:30:00Z"),
        'hora_salida': ISODate("2025-07-02T15:30:00Z"), 'total': 3700, 
        'vehiculo': {
            'tipo_vehiculo': 'Moto', 
            'placa': 'DEF456G',
            'propietario': {
                'nombre': 'Laura Rojas', 
                'cedula': '2233445566'}}, 
        'sede': {
            'ciudad': 'Medellín', 
            'zona': {
                'nombre': 'Zona de motos', 
                'cupo': 9, 
                'precio': 3700, 
                'vehiculo_permitido': 'Moto'}}
    });
    dbSession.zonas.updateOne({nombre:"Zona de motos", precio:3700}, {$inc:{cupo:-1}});
    dbSession.sedes.updateOne({ciudad:"Medellín", "zonas.nombre":"Zona de motos"}, {$inc:{"zonas.$.cupo":-1}});
    session.commitTransaction(),
    print("El documento ha sido ingresdo exitosamente y las colecciones han sido actualizadas")
} catch (error) {
    session.abortTransaction(),
    print("Ha ocurrido un error, intentalo de nuevo")
}finally{
    session.endSession(),
    print("La sesión ha finalizado")
}

