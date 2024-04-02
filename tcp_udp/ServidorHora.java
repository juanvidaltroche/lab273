import java.io.*;
import java.net.*;
import java.util.*;
public class ServidorHora
{
    public static void main (String arg[]) throws Exception
    {
	ServerSocket servidor = new ServerSocket (9876);
	Socket solicitud = servidor.accept ();
	OutputStream salida = solicitud.getOutputStream ();
	Calendar calendario = new GregorianCalendar ();

	PrintWriter out = new PrintWriter (salida);
	out.println (calendario.getTime ());
	out.close ();
    }
}
