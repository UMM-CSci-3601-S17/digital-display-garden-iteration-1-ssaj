package umm3601.user;

import org.bson.Document;

public class Plant {

    public String id,
                name,
                cultivar,
                source,
                seedVeg,
                perennialVegetable,
                container,
                gardenLocation,
                comments;

    public Document getDocument(){

        Document plantDoc = new Document("_id", id)
                .append("name", name)
                .append("cultivar", cultivar)
                .append("source", source)
                .append("seedVeg", seedVeg)
                .append("perennialVegetable", perennialVegetable)
                .append("container", container)
                .append("gardenLocation", gardenLocation)
                .append("comments", comments);

        return plantDoc;
    }

}
