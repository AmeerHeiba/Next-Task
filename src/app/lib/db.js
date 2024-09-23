import { MongoClient } from "mongodb";

let db;
const uri = process.env.MONGODB_URI;

if (!db) {
  const mongoClient = new MongoClient(uri, {
    ssl: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const clientPromise = await mongoClient.connect();
  db = clientPromise.db();
}

export default db;



//mongodb+srv://ameerabdullahheiba:rV7kiXJlGh6rlGKz@cluster0.8i1jk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/next?retryWrites=true&w=majority