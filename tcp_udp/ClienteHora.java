import java.io.*;
import java.net.*;
import java.util.*;

public class ClienteHora
{
    public static void main (String[] arg) throws Exception
    {
	Socket cliente = new Socket ("localhost", 9876);



	BufferedReader br = new BufferedReader (new InputStreamReader (cliente.getInputStream ()));

	String mensajeDelServidor = br.readLine ();

	System.out.println (mensajeDelServidor);
	br.close ();
	cliente.close ();

    }
}
