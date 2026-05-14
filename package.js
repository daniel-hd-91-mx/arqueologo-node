const express = require('express');
const path = require('path');

const app = express();
// Usa el puerto que te asigne el proveedor de hosting, o el 3000 si estás en local
const PORT = process.env.PORT || 3000;

// Configurar Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que devuelve tu aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`⛏️  Expedición lista. El servidor está corriendo en http://localhost:${PORT}`);
});