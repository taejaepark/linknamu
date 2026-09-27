import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "linknamu";

let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo._mongoClientPromise) {
      globalWithMongo._mongoClientPromise = new MongoClient(uri).connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    clientPromise = new MongoClient(uri).connect();
  }
}

export async function getDb() {
  if (!clientPromise) {
    return null;
  }
  const client = await clientPromise;
  return client.db(dbName);
}
