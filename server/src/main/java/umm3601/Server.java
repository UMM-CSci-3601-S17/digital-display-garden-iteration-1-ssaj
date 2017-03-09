package umm3601;


import umm3601.user.Plant;
import umm3601.user.PlantController;
import umm3601.user.UserController;

import java.io.IOException;

import static spark.Spark.*;


public class Server {

    public static Plant getPlant(){
        Plant p = new Plant();
        p.id = "16601";
        p.name = "Achillea millefolium";
        p.cultivar = "New Vintage Red";
        p.source = "BA";
        p.seedVeg = "V";
        p.perennialVegetable = "P";
        p.container = "HB";
        p.gardenLocation = "2";
        p.comments = "What a pretty flower! ^_^ - Arrived 6-1-2016";
        return p;
    }

    public static void main(String[] args) throws IOException {
        staticFiles.location("/public");
        UserController userController = new UserController();
        PlantController plantController = new PlantController();

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

        get("api/plants", (req, res) -> {
            //List<String> lines = Files.readAllLines(Paths.get("plants.csv"));
            System.out.println("Plants");
            res.type("application/json");
            return plantController.getPlants();
        });
        post("/import-csv", (req, res) -> {
            System.out.println("Post Import");
            // The csv data from the client comes in here
            String csvFile = getFileContent(req.body());
            System.out.println(csvFile);
            return csvFile;
        });


        // Simple example route
        get("/hello", (req, res) -> "Hello World");

        // Redirects for the "home" page
        redirect.get("", "/");
        redirect.get("/","/csv.html");
        //redirect.get("/", "http://localhost:9000");

        // List users
        get("api/users", (req, res) -> {
            System.out.println("Get Users!");
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

    public static String getFileContent(String body){

        String[] splitBody = body.split("\n\r");

        String fileContent = "";

        for(int i = 1; i < splitBody.length - 1; i++)
            fileContent += splitBody[i];

        return fileContent;
    }

    public static String[] splittingString(String s){
        String[] splitS = s.split(",");
        System.out.println(splitS.length);
        return splitS;
    }

}
