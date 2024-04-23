//Servidor datagram udp
const dgram = require('dgram');

// Crear un socket UDP para el servidor

const server = dgram.createSocket('udp4');

// Escuchar en el puerto 777
const PORT = 777;

server.on('message', (msg, rinfo) => {
    console.log(`Mensaje recibido del cliente: ${msg.toString()}`);
    
    // Contar las vocales en el mensaje recibido
    const contVocales = contador(msg.toString());

    // Enviar la respuesta al cliente
    server.send(contVocales.toString(), rinfo.port, rinfo.address, (err) => {
        if (err) {
            console.error(`Error al enviar la respuesta al cliente: ${err}`);
        } else {
            console.log('Respuesta enviada al cliente.');
        }
    });
});

// Función para contar vocales en una cadena
function contador(str) {
    const vocales = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vocales.includes(char)) {
            count++;
        }
    }
    return count;
}

// Iniciar el servidor y escuchar en el puerto
server.bind(PORT, () => {
    console.log(`Servidor UDP escuchando en el puerto ${PORT}`);
});
