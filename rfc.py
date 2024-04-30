import http.client
import sys

def descargar_rfc(numero_rfc):
    # Establecer la conexión con el servidor www.ietf.org
    conexion = http.client.HTTPSConnection("www.ietf.org")

    # Solicitar el RFC específico al servidor
    conexion.request("GET", f"/rfc/rfc{numero_rfc}.txt")

    # Obtener la respuesta del servidor
    respuesta = conexion.getresponse()

    if respuesta.status == 200:
        # Leer y mostrar el contenido del RFC si la solicitud fue exitosa
        rfc_contenido = respuesta.read()
        print(rfc_contenido.decode())
    else:
        # Mostrar un mensaje de error si la solicitud no fue exitosa
        print(f"Error: No se pudo descargar el RFC {numero_rfc}.")
        print(f" Código de estado HTTP: {respuesta.status}")

    # Cerrar la conexión con el servidor
    conexion.close()



numero_rfc = sys.argv[1]
descargar_rfc(numero_rfc)
