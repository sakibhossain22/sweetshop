const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
// middleWare
app.use(express.json())
app.use(cors())
require('dotenv').config()
// Mongo

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.60qibw3.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const userCollection = client.db('productJsonCollection').collection('products')
    const cartCollection = client.db('cart-collection').collection('cart')
    // const addproductCollection = client.db('add-product-collection').collection('add-product')

    app.get('/products', async (req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })
    app.get('/products/:brandName', async (req, res) => {
      const brandName = req.params.brandName;
      const query = { brandName: brandName };
      const cursor = userCollection.find(query);
      const result = await cursor.toArray()
      res.send(result)
    });
    app.get('/details/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const cursor = await userCollection.findOne(query)
      res.send(cursor)
    })
    app.get('/update/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const cursor = await userCollection.findOne(query)
      res.send(cursor)
    })
    app.put('/update/:id', async (req, res) => {
      const id = req.params.id
      const data = req.body
      const query = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const doc = {
        $set: {
          name: data.name,
          image: data.image,
          brandName: data.brandName,
          description: data.description,
          price: data.price,
          rating: data.rating,
          type: data.type,
        }
      }
      const result = await userCollection.updateOne(query, doc, options)
      res.send(result)
    })

    app.post('/cart', async (req, res) => {
      const data = req.body
      const result = await cartCollection.insertOne(data)
      res.send(result)
    })
    app.post('/addproduct', async (req, res) => {
      const data = req.body
      const result = await userCollection.insertOne(data)
      res.send(result)
    })
    app.get('/cart/:email', async (req, res) => {
      const email = req.params.email
      const query = {email : email}
      const filter =  cartCollection.find(query)
      const result = await filter.toArray()
      res.send(result)
    })
    app.get('/cart', async (req, res) => {
      const cursor = cartCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })
    app.delete('/cart/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id : new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', async (req, res) => {
  res.send('Server Started Successfully')
})
app.listen(port)