const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    userId:{
        type: String,
    },
    firstName:{
        type: String,
        required: [true, "first name is required"]
    },
    lastName:{
        type: String,
        required: [true, "last name is required"]
    },
    phone:{
        type: String,
        required: [true, "phone number is required"]
    },
    country:{
        type: String,
        required: [true, "Country of Residence is required"]
    },
    hospital:{
        type: String,
        required: [false, "Current Hospital if exists"]
    },
    department:{
        type: String,
        required: [true, "department of consulation"]
    },
    orders:{
        type: String,
        default: '0'
    },
    email:{
        type: String,
        required:[true, "email is required"]
    },
    picture:{
        type: String,
        required:[true, "picture is required"]
    },
    website:{
        type:String,
    },
    address:{
        type: String,
        required:[true, "address is required"]
    },
    gender:{
        type: String,
        required:[true, "gender is required"]
    },
    qualification:[{
        type: String,
        required:[false, "qualification degree is required"]
    }],
    bio:{
        type: String,
        required:[true, "bio for more than 100 words is required"]
    },
    specialization:{
        type: String,
        required:[true, "specialization is required"]
    },
    experience:{
        type: String,
        required:[true, "experience is required"]
    },
    email:{
        type: String,
        required:[true, "email is required"]
    },
    feesPerCunsaltation:{
        type: String,
        required:[true, "checkup fees is required"]
        
    },
    status:{
        type:String,
        default: "pending"
    },
    timings:{
        type: Object,
        required:[true, "work timing is required"]
    },
},{timestamps:true})

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;