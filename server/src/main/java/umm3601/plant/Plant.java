package umm3601.plant;

import org.bson.Document;

public class Plant {

    public static final int NUM_FIELDS = 9;

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

    @Override
    public String toString(){
        return id + " " + name + " " + cultivar + " " + seedVeg + " " + perennialVegetable
                + " " + container + " " + gardenLocation + " " + comments;
    }

}
