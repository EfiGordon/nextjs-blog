// Import Dependencies
const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
    // If the database connection is cached,
    // use it instead of creating a new connection
    if (cachedDb) {
        return cachedDb
    }

    // If no connection is cached, create a new one
    const client = await MongoClient.connect(uri, { useNewUrlParser: true })

    // Select the database through the connection,
    // using the database path of the connection string
    const db = await client.db(url.parse(uri).pathname.substr(1))

    // Cache the database connection and return the connection
    cachedDb = db
    return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
export default async (req, res) => {
    // Get a database connection, cached or otherwise,
    // using the connection string environment variable as the argument
    // const db = await connectToDatabase("mongodb+srv://efiAdmin:9te6E2uRmjNhcHA33ccn@cluster0.pm4ek.gcp.mongodb.net/CommentsDB?retryWrites=true&w=majority")
    const db = await connectToDatabase(process.env.MONGODB_URI);
    // Select the "comments" collection from the database
    const collection = await db.collection('comments')

    if ((req.method) == 'GET') {
        const postId = req.query.postId;
        // Select the users collection from the database
        const comments = await collection.find({ postId: postId }).toArray()


        res.status(200).json(comments);
    }

    if ((req.method) == 'POST') {
        const comment = JSON.parse(req.body);

        collection.insertOne({
            ...comment,
            date: new Date()
        }).then(() => {
            res.status(201).end();
        })
    }



}