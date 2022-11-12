const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

let transporter = nodemailer.createTransport({
    service : "Gmail",
    secure : true,
    auth : {
        user : ,
        pass : 
    }
})