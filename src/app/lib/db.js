import { MongoClient } from "mongodb";

let db;
if (!db) {
  const mongoClient = new MongoClient("mongodb+srv://ameerabdullahheiba:rV7kiXJlGh6rlGKz@cluster0.8i1jk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const clientPromise = await mongoClient.connect();
  db = clientPromise.db();
}

export default db;
