import { MongoClient, Db, ServerApiVersion } from 'mongodb';
// vnlima9
// rEPWv8NuHwmy1t8B



let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;



export async function connectTODB() {

  if (cachedClient && cachedDb) {
    return {client: cachedClient, db: cachedDb}
  }
    
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODE_PASSWORD}@cluster0.iyvfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
     
        await client.connect();

        cachedClient = client
        cachedDb = client.db('ecommerce-nextjs')

        return { client, db: client.db('ecommerce-nextjs')}
     
    
}



