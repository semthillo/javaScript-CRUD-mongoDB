const { MongoClient } = require ("mongodb");

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

async function con() {
  try {
    await client.connect();
    

    const db = client.db("survey_management");
    // console.log("Connecté à MongoDB!");
   return db
  } catch (err) {
    console.error(err);
  } 
}

con();

module.exports = {
    con,
}