const mongoose = require("mongoose")
const {MONGO_URL}=process.env

exports.connect =()=>{
    mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log("db connection success"))
    .catch((error)=>{
        console.log("db failed")
        console.log(error)
        process.exit(1)
    })
    
    
}
