const https = require('https');
const fs = require('fs');
const url = require('url');

// Obtener la URL del archivo a descargar como argumento de la línea de comandos
const fileUrl = process.argv[2];

// Verificar si se proporcionó la URL como argumento
if (!fileUrl) {
    console.error('Error: Debes proporcionar la URL del archivo a descargar.');
    process.exit(1);
}
// Parsear la URL para obtener la información necesaria
const parsedUrl = new URL(fileUrl);
// Obtener el nombre del archivo de la URL
const fileName = parsedUrl.pathname.split('/').pop();

// Configurar las opciones para la solicitud HTTPS
const opciones = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.pathname,
    method: 'GET',
};

// Realizar la solicitud HTTPS para descargar el archivo
const req = https.request(opciones, (res) => {
    console.log(`Descargando ${fileName}...`);

    // Crear un stream de escritura para guardar el archivo
    const fileStream = fs.createWriteStream(fileName);
    // Pipe para escribir el contenido de la respuesta en el archivo
    res.pipe(fileStream);

    // Escuchar el evento 'finish' para saber cuando se ha completado la descarga
    fileStream.on('finish', () => {
        console.log(`Archivo ${fileName} descargado correctamente.`);
        fileStream.close();
    });
});

// Manejar errores durante la solicitud
req.on('error', (err) => {
    console.error(`Error al descargar el archivo: ${err.message}`);
});

// Finalizar la solicitud
req.end();
