const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require("./routes/bookRoutes");
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use("/books",router);
 
mongoose.connect(
    "mongodb+srv://ptejas387:sTQv4pVWRhxQVikV@cluster0.vuae2am.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("db connected"))
  .then(()=>{
    app.listen(5000);
  }).catch(()=>console.log("error while connecting to db"));

//sTQv4pVWRhxQVikV