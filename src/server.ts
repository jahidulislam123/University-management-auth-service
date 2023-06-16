import mongoose from "mongoose"
import app from "./app";
import config from "./config/index";



async function boostrap() {
   

    try{
        await mongoose.connect(config.databse_url as string);
        console.log(`database connected successfully `);



        app.listen(config.port, () => {
            console.log(`Applicaion app listening on port ${config.port}`)
          })
    }catch(err){
        console.log("failed to connect databaae ",err);
      
    }
  }


  boostrap();


