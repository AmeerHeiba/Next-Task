import { MongoClient } from "mongodb";

let db;
const uri = process.env.MONGODB_URI;

if (!db) {
  try {
    const mongoClient = new MongoClient(uri, {
      ssl: true,  
    });
    
    // Connect and set db
    const client = await mongoClient.connect();
    db = client.db(); 
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default db;


//mongodb+srv://ameerabdullahheiba:rV7kiXJlGh6rlGKz@cluster0.8i1jk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/next?retryWrites=true&w=majority