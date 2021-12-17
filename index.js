const path = require('path');
const express = require('express');
const rutasApi = require('./routers/app.router');

const app = express();
const PORT = process.env.PORT || 8080;

// Rutas
app.use('/api', rutasApi);

/////////////////////////
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center"> Pagina Inicial </h1> <a href="/api/productos">Productos</a> <br> <br> <a href="/producto"> Añadir Productos </a>   ')
});

app.get('/productos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});
////////////////////////

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
})


