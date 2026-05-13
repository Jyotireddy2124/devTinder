const {MongoClient} = require("mongodb");

const URI = "mongodb+srv://NodeDev:Y1zDybZtdZm0Xjb9@nodedev.d4jutjc.mongodb.net/?appName=NodeDev";
const client = new MongoClient(URI);

const dbName = "HelloWorld";

const data = {
    "firstName" : "Deepak",
    "lastname" : "Reddy",
    "city" : "Bangalore",
    "phoneno" : "123456789"
}

async function main(){
    await client.connect();
    //console.log("Connected successfully to the server");
    const db = client.db(dbName);
    const collections = db.collection('User');

    //Find All Documents
    const getUser = await collections.find({}).toArray();
    console.log(getUser);

    //Insert a Document
    const insertResult = await collections.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    //Find Documents with a Query Filter
    const filteredones = await collections.find({"firstName" : "Deepak"}).toArray();
    console.log(filteredones)


    //Update a document
    const updateResult = await collections.updateOne({"firstName" : "Deepak" } , {$set :{ "city" : "Vijaynagar"}})

    //Remove a document
    const deleteResult = await collections.deleteMany({"firstName" : "Deepak" });
    
    return 'done.';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close)