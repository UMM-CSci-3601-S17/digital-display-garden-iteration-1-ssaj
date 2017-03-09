package umm3601;

import umm3601.plant.Plant;
import umm3601.plant.PlantController;
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
            System.out.println("Plants");
            res.type("application/json");
            return plantController.getPlantCollection();
        });
        post("api/plants", (req, res) -> {
            plantController.addCSVToDatabase(req.body());
            return plantController.getPlantCollection();
        });

        // Simple example route
        get("/hello", (req, res) -> "Hello World");

        // Redirects for the "home" page
        redirect.get("", "/");
        redirect.get("/","/csv.html");
        //redirect.get("/", "http://localhost:9000");

        // Handle "404" file not found requests:
        notFound((req, res) -> {
            res.type("text");
            res.status(404);
            return "Sorry, we couldn't find that!";
        });

    }
}
