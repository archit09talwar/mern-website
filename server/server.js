
//here are all the imports 
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


//here are all the declarations
const app = express();
const PORT = 4000;
//to solve the issue with the cors
app.use(cors);

//here we are connecting to the database(we are using then catch at the place of try catch as promise is returned)
mongoose.connect("mongodb+srv://archit:archit@mernsamplecluster.bqve7vb.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected to mongoDb")).catch((err) => console.log(err));

// here we perform routing
app.get('/', (req, res) => {
    res.send("Hello world");
});

//here we use it call the port and check the PORT

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
})