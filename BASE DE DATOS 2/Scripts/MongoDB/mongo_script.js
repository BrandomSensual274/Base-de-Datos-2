// Conectar a la base de datos
use tucanchaya_documental;

// 1. Crear la colección
db.createCollection("resenas_canchas");

// 2. Insertar un documento de prueba
db.resenas_canchas.insertOne({
    id_cancha: 1,
    id_jugador: 1,
    calificacion: 5,
    comentario: "Excelente cancha, muy buena iluminacion.",
    fecha: "2026-11-15"
});

// 3. Crear el usuario administrador (Brandom)
db.createUser({
  user: "Brandom",
  pwd: "sexo274",
  roles: [ { role: "readWrite", db: "tucanchaya_documental" } ]
});

// 4. Consulta de Negocio: Reseñas con menos de 3 estrellas
db.resenas_canchas.find(
    { calificacion: { $lt: 3 } },
    { id_cancha: 1, comentario: 1, calificacion: 1 }
);