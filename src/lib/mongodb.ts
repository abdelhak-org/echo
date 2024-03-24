import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017"; // Add missing URI variable
const options = {}; // Add options if needed

if (!URI) {
    throw new Error("MongoDB URI is required");
}

const client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "production") {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;