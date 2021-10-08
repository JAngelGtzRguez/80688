package mx.uv;

import static spark.Spark.*;
import com.google.gson.*;
/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {



        post("/saludar", (req, res) -> {
            String l = req.queryParams("usuario");
            String p = req.queryParams("password");
            String respuesta;
            System.out.println(l + " " + p);

            if (l.equals("root") && p.equals("123456"))
                respuesta = "Bienvenido usuario ";
            else
                respuesta = "Usuario equivocado ";
            return respuesta + l + " <a href='http://127.0.0.1:5500/envio_formulario.html'>volver</a>";
        });


        
    }
}