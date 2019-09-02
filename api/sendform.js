'use strict';
const nodemailer = require('nodemailer');
 
nodemailer.createTestAccount((err, account, form) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'theoddwavecontact@gmail.com', 
            pass: 'ix06KC7WA31K' 
        }
    });
 
    let mailOptions = {
        from: '"The Odd Wave Web" <theoddwavecontact@gmail.com>',
        to: 'theoddwavecontact@gmail.com',
        subject: 'Website enquiry',
        text: form
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});
