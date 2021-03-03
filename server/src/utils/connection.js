import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/ultrafvsistemas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("* MongoDB conectado")).catch(err => console.log(err))