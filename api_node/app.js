const http = require('http');
const os = require('os');

const PORT = 3000;

const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido a la API de estado de Distribuciones Mediterráneo S.L. - Gurshan Singh Kaur\n');
  } else if (req.url === '/estado') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      servicio: 'api_node',
      hostname: os.hostname(),
      uptime_segundos: process.uptime(),
      fecha: new Date().toISOString()
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ruta no encontrada\n');
  }
});

servidor.listen(PORT, '0.0.0.0', () => {
  console.log('API escuchando en el puerto ' + PORT);
});
