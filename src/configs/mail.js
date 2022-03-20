const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "c9ac2ed285a247", 
      pass: "f3d17fb6a718cc", 
    },
    pool: true,
    rateLimit: 3, 
    maxConnections: 1,
    maxMessages: 3, 
});

module.exports = transporter;