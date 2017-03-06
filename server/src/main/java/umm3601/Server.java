package umm3601;


import umm3601.user.UserController;
import javax.servlet.MultipartConfigElement;
import javax.servlet.http.Part;
import java.io.IOException;
import java.io.StringWriter;

import static spark.Spark.*;


public class Server {
    public static void main(String[] args) throws IOException {
        staticFiles.location("/public");
        UserController userController = new UserController();

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }
 
            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/import-csv", (req, res) -> "Import Csv");
        post("/import-csv", (req, res) -> {
            MultipartConfigElement multipartConfigElement = new MultipartConfigElement(System.getProperty("java.io.tmpdir"));
            req.raw().setAttribute("org.eclipse.jetty.multipartConfig", multipartConfigElement);
            Part file = req.raw().getPart("csv-file");
            StringWriter writer = new StringWriter();
            spark.utils.IOUtils.copy(file.getInputStream(), writer);
            String s = writer.toString();
            System.out.println(s);
            //String filePath = System.getProperty("user.dir") + "/csv.txt";
            //System.out.println(filePath);
            //file.write(filePath);

            return s;
        });

        // Simple example route
        get("/hello", (req, res) -> "Hello World");

        // Redirects for the "home" page
        redirect.get("", "/");
        redirect.get("/","/csv.html");
        //redirect.get("/", "http://localhost:9000");



        // List users
        get("api/users", (req, res) -> {
            res.type("application/json");
            return userController.listUsers(req.queryMap().toMap());
        });

        // See specific user
        get("api/users/:id", (req, res) -> {
            res.type("application/json");
            String id = req.params("id");
            return userController.getUser(id);
        });

        // Get average ages by company
        get("api/avgUserAgeByCompany", (req, res) -> {
            res.type("application/json");
            return userController.getAverageAgeByCompany();
        });

        // Handle "404" file not found requests:
        notFound((req, res) -> {
            res.type("text");
            res.status(404);
            return "Sorry, we couldn't find that!";
        });

    }

}
