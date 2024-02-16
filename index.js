const fs = require("fs");
const nodemailer = require('nodemailer');

function readJSONfile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + path, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  });
}

async function sendEmail(to, subject, text) {
  const credentials = await readJSONfile("/auth/token.json");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "flebedev99@gmail.com",
      clientId: credentials.client_id,
      clientSecret: credentials.client_secret,
      refreshToken: credentials.refresh_token
    },
  });

  // Email content
  const mailOptions = {
    from: "flebedev99@gmail.com", // Sender address
    to, // Recipient address
    subject,
    html: text
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

exports.SendEmail = function(to, subject, html) {
  sendEmail(to, subject, html);
}