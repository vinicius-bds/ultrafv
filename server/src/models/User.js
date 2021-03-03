import mongoose from "mongoose"
import bcryptjs from "bcryptjs"
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

Schema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next()
    }
    this.password = bcryptjs.hashSync(this.password, 10)
    next()
})

export default mongoose.model("User", Schema)