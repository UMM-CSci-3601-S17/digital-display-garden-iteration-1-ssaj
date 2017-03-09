package umm3601.user;

import com.mongodb.MongoClient;
import com.mongodb.client.*;
import com.mongodb.client.model.Accumulators;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Sorts;
import com.mongodb.util.JSON;
import org.bson.Document;
import org.bson.types.ObjectId;
import umm3601.Server;

import java.io.IOException;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Map;

import static com.mongodb.client.model.Filters.eq;

public class PlantController {

    private final MongoCollection<Document> plants;

    public PlantController() throws IOException {

        System.out.println("PlantController Created");

        MongoClient mongoClient = new MongoClient();

        MongoDatabase db = mongoClient.getDatabase("UMM-WCROC");

        plants = db.getCollection("plants");

//        Plant p = Server.getPlant();
//
//        plants.insertOne(p.getDocument());
    }

    public String getPlants(){

        Document filterDoc = new Document();

        FindIterable<Document> matchingUsers = plants.find(filterDoc);

        return JSON.serialize(matchingUsers);
    }
}