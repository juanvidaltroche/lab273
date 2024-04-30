#ejercicio1.py
import socket

# Función para calcular el enésimo término de Fibonacci
def fibonacci(n): 
	a = 0
	b = 1      
	for i in range(n):
		f = a + b
		a = b
		b = f
	return f

# Configurar el servidor UDP
host = 'localhost'  # Dirección IP local
port = 12345        # Puerto de escucha

# Crear un socket UDP
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Enlazar el socket al host y puerto
server_socket.bind((host, port))

print(f"Servidor UDP escuchando en {host}:{port}")

# Esperar a recibir datos
while True:
	# Recibir datos y dirección del cliente
    data, client_address = server_socket.recvfrom(1024) 
    # Mostrar la petición recibida 
    print(f"Petición recibida de {client_address}: {data.decode()}")  
    # Convertir los datos recibidos a un entero
    n = int(data.decode())
    # Calcular el enésimo término de Fibonacci
    resultado = fibonacci(n)
    # Enviar el resultado al cliente
    server_socket.sendto(str(resultado).encode(), client_address)
        
   