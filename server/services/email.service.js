const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
require("dotenv").config()

let transporter = nodemailer.createTransport({
    service : "Gmail",
    secure : true,
    auth : {
        user : ,
        pass : 
    }
})