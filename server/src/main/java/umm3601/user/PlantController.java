package umm3601.user;

import com.mongodb.MongoClient;
import com.mongodb.client.*;
import com.mongodb.util.JSON;
import org.bson.Document;

import java.io.IOException;
import java.util.*;

public class PlantController {

    private final MongoCollection<Document> plantCollection;

    public PlantController() throws IOException {

        System.out.println("PlantController Created");

        MongoClient mongoClient = new MongoClient();

        MongoDatabase db = mongoClient.getDatabase("UMM-WCROC");

        plantCollection = db.getCollection("plantCollection");

//        Plant p = Server.getPlant();
//
//        plantCollection.insertOne(p.getDocument());
    }

    public String getPlantCollection(){
        Document filterDoc = new Document();

        FindIterable<Document> matchingUsers = plantCollection.find(filterDoc);

        return JSON.serialize(matchingUsers);
    }

    public void addCSVToDatabase(String csv){

        List<String> records = getCSVRecords(csv);

        List<Plant> plants = buildPlants(records);

        addPlantsToCollection(plants);

    }

    public void addPlantsToCollection(List<Plant> plants){

        for(Plant p : plants)
            plantCollection.insertOne(p.getDocument());

    }

    public static List<String> getCSVRecords(String body){
        final int afterIgnoredRows = 5;

        String[] splitBody = body.split("\n");
        List<String> records = new ArrayList<>();

        for(int i = afterIgnoredRows; i < splitBody.length - 1; i++)
            records.add(splitBody[i]);

        return records;
    }

    private List<Plant> buildPlants(List<String> records){
        List<Plant> plants = new ArrayList<>();

        for(String record : records) {
                String[] plantData = record.split(",", -1);

                Plant p = new Plant();
                p.id = plantData[0].trim();
                p.name = plantData[1].trim();
                p.cultivar = plantData[2].trim();
                p.source = plantData[3].trim();
                p.seedVeg = plantData[4].trim();
                p.perennialVegetable = plantData[5].trim();
                p.container = plantData[6].trim();
                p.gardenLocation = plantData[7].trim();
                p.comments = plantData[8].trim();

                plants.add(p);
            }

            return plants;
    }
}