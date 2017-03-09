package umm3601.user;

import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Accumulators;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Sorts;
import com.mongodb.util.JSON;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.io.IOException;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Map;

import static com.mongodb.client.model.Filters.eq;
import static umm3601.Server.password;

public class LoginController {
    public static MongoCollection<Document> passwordDocuments;
    public LoginController() throws IOException {
        MongoClient mongoClient = new MongoClient();
        MongoDatabase db = mongoClient.getDatabase("test");
        passwordDocuments = db.getCollection("password");

    }


    public static void addPassword(){
        ObjectId newPassword = new ObjectId();
        BasicDBObject newP = new BasicDBObject("_password", newPassword);
        newP = newP.append("Password", password);
        passwordDocuments.insertOne(Document.parse(newP.toJson()));
        System.out.println(password);
    }

}