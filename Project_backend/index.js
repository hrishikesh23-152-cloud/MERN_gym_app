const express = require('express');
const routes = require('./routes/routes');
const mongoose  = require('mongoose');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use("/MERN/Auth",userRoutes);
app.use("/MERN",routes);


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
})
}).catch((error)=>{
    console.log(error)
})


