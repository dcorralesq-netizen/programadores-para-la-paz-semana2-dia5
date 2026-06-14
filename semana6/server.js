const express = require('express');
const app = express();

// Esta línea es la más importante: permite que tu servidor entienda JSON
app.use(express.json());

// Ruta 1: Registro de usuarios
app.post('/registro', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta 2: Reporte de incidencias (Pregunta 8)
app.post('/incidencia', (req, res) => {
  const { tipo, descripcion } = req.body;
  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
