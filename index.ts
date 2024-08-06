import express from "express";
import messages from './routers/messages'
import fileDb from "./fileDb";

const app = express();
const port = 8000;
const path = './messages';

app.use(express.json())
app.use('/messages', messages)

const run = async()=>{
    await fileDb.init();

    app.listen(port, ()=>{
        console.log(`Server started on ${port}`);
    })
}
run().catch(console.error)