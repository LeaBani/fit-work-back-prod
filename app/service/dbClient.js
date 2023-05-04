import pkg from 'pg'; // equivalent strict à const Client=require('pg') 
const { Client} = pkg;
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });;
client.connect();

export default client;