const path = require('path');
const express = require('express');
const rutasApi = require('./routers/app.router');

const app = express();
const PORT = process.env.PORT || 8080;

// Rutas
app.use('/api', rutasApi);

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
})


