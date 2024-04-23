//Cliente
const dgram = require('dgram');

// Crear un socket UDP para el cliente
const cliente = dgram.createSocket('udp4');

// Detalles del servidor al que se conectará el cliente
const PORT = 777;
const SERVER_ADDRESS = '127.0.0.1'; // Cambia esto por la dirección IP del servidor si es remoto

// Frase que se enviará al servidor
const message = 'Hola mundo, este es un mensaje de prueba';

// Enviar la frase al servidor
cliente.send(message, PORT, SERVER_ADDRESS, (err) => {
    if (err) {
        console.error(`Error al enviar mensaje al servidor: ${err}`);
        cliente.close();
    } else {
        console.log(`Mensaje enviado al servidor: ${message}`);
    }
});

// Escuchar la respuesta del servidor
cliente.on('message', (msg) => {
    console.log(`Respuesta del servidor: ${msg.toString()}`);
    cliente.close();
});
