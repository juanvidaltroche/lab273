import socket

# Configurar el cliente UDP
host = 'localhost'  # Dirección IP del servidor
port = 12345        # Puerto del servidor

# Crear un socket UDP
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

print(f"Cliente UDP conectándose a {host}:{port}")

# Enviar el número de término de Fibonacci al servidor
numero = input("Ingrese el número de término de Fibonacci que desea calcular: ")
client_socket.sendto(numero.encode(), (host, port))

# Recibir la respuesta del servidor
data, server_address = client_socket.recvfrom(1024)  # Recibir datos y dirección del servidor
print(f"Servidor dice: {data.decode()}")  # Mostrar la respuesta del servidor

# Cerrar el socket del cliente
client_socket.close()
