// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const nodemailer = require('nodemailer');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

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

app.get('/api/v1/sendmail', (req, res) => {
    transporter.sendMail(
        {
            from: 'vishalchaware144@gmail.com', // sender address
            to: 'vishalchaware144@gmail.com', // list of receivers
            subject: 'New Message from Vishal Chaware', // Subject line
            text: `Hello Bro,
        
        I am looking for 3 salesforce Dev
        
        Thanks,
        Vishal Chaware,
        12345678
        ` // plain text body
        },
        (err, info) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(info);
            }
            res.json({ success: true, message: 'Message Sent Successfully' });
        }
    );
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
