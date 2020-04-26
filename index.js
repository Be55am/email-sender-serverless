"use strict";
const nodemailer = require("nodemailer");

exports.handler = async (event) =>{
    console.log(`Processing event ${JSON.stringify(event)}`);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.MAILHOST,
        port: process.env.MAILPORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAILUSER, // generated ethereal user
            pass: process.env.MAILPASS // generated ethereal password
        }
    });

    console.log('sending from ', process.env.MAILUSER);

    // send mail to me with the message info
    let info1 = await transporter.sendMail({
        from: `${process.env.MAILUSERNAME} <${process.env.MAILUSER}>`, // sender address
        to: process.env.MAILUSER, // list of receivers
        subject: "Portfolio Message", // Subject line
        text: `You receive a message from ${event.mail} , message Text : ${event.text}`, // plain text body
        html: `<b>You receive a message from ${event.mail} ,<br> message Text : ${event.text}</b>` // html body
    });
    console.log("Message sent: %s", info1.messageId);


    // send message received mail to the sender
    let info2 = await transporter.sendMail({
        from: `Bessam Sahli <${process.env.MAILUSER}>`, // sender address
        to: event.mail, // list of receivers
        subject: "Message Received", // Subject line
        text: "Hello, I received the message you sent from my portfolio Website, and i will get back to you soon", // plain text body
        html: `<b>Hello, I received the message you sent from my portfolio Website, and i will get back to you soon</b> <br> <a href='${process.env.MAILWEBSITE}'>${process.env.MAILUSERNAME}</a>` // html body
    });
    console.log("Message sent: %s", info2.messageId);
};
