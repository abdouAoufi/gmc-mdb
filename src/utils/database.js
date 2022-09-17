import {
 MongoClient
} from "mongodb";
import {INFO} from "./utils.js"

const URL = `mongodb://localhost:${INFO.DB_PORT}`;

const dbClient = new MongoClient(URL);

export default dbClient;