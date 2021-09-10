const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: sendGrid,
    auth: {
      user: apikey,
      pass: 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,
    },
  });

  const mailOptions = {
    from: "soufiane.mar9@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
