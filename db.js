import { MongoClient} from "mongodb";
import 'dotenv/config'

const connectingString=process.env.ATLAS_URI ||"";
console.log(connectingString);
const client= new MongoClient(connectingString)

let conn;


try {
    conn=await client.connect()

}catch(e){
    console.log(e)

}

let db=conn.db("sample_training");

export default db;