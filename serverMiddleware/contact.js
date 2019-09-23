import express from 'express'
import nodemailer from 'nodemailer'
const Joi = require('joi')

const payloadschema = Joi.object().keys({
  email: Joi.string().required(),
  name: Joi.string(),
  location: Joi.string(),
  service: Joi.array()
})

const app = express()

app.use(express.json())

const sendMail = (form) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.googlemail.com',
    // host: 'mail.theoddwave.co.nz',
    port: 465,
    secure: true,
    auth: {
      user: 'theoddwavecontact@gmail.com',
            pass: 'ix06KC7WA31K'
      // user: 'team@theoddwave.co.nz',
      // pass: '0-txE81lj9oD'
    }
  })
  const mailOptions = {
    from: '"The Odd Wave Web" <theoddwavecontact@gmail.com>',
    to: 'stefano.pietroiusti@gmail.com,jalinevandyk@gmail.com,theoddwavecontact@gmail.com,team@theoddwave.co.nz',
    subject: 'Website enquiry',
    text: JSON.stringify(form)
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    // console.log('Message sent: %s', info.messageId)
  })
}

app.get('/', (req, res) => {
  res.status(500).json({ error: 'Invalid' })
  res.end()
})

app.post('/', (req, res) => {
  let result
  try {
    Joi.validate(req.body, payloadschema)
    sendMail(req.body)
    res.status(200).json({ statusCode: 200, message: 'We have received your message and look forward to chatting with you soon.' })
    res.end()
  } catch (err) {
    Console.log(err)
    res.status(500).send({
      statusCode: 500,
      message: err.message
    })
  }
})

export default {
  path: '/api/contact',
  handler: app
}
