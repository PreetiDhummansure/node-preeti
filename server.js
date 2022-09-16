const  express = require('express');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const app = express();

dotenvExpand.expand(dotenv.config());


const PORT=process.env.PORT || 5223;
const SERVER=process.env.SERVER || "";
const userRoute=require('./src/src/routes/userRoutes');

app.get("/",(req,res)=>{
return res.json('welcome')
});

app.use("/user",userRoute );
app.listen(PORT, () => {
  console.log(`the server is running on :${SERVER}`);
});







 