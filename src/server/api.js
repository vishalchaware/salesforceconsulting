// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}



const app = express();
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

const STATIC_DIR = './dist';
app.use(express.static(STATIC_DIR));

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

app.use((req, res, next)=>{
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'",
        "img-src 'self'",
        "script-src 'self' http://localhost:3002"
    )
    next()
})

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.email_username, // gmail username
        pass: process.env.email_password // gmail password
    }
});

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true, message: 'Hello, brother' });
});

app.post('/api/v1/sendemail', (req, res) => {
    // console.log(req.body);
    const { name, email, message, phone } = req.body;
    const mailData = {
        from: email, // sender address
        to: 'vishalchaware144@gmail.com', // list of receivers
        subject: `New Message from ${name}`, // Subject line
        text: `Hello Lorem Ipsum,
        
        ${message}
        
        Thanks,
        ${name},
        ${phone}
        ` // plain text body
    };
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(info);
        }
        res.json({ success: true, message: 'Message Sent Successfully' });
    });
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
