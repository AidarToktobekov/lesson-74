import express from "express";
const app = express();
const port = 8000;
const path = './messages';

app.use(express.json())

const run = async()=>{

    app.listen(port, ()=>{
        console.log(`Server started on ${port}`);
    })
}
run().catch(console.error)