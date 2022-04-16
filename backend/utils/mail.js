const nodemailer = require("nodemailer");
exports.sendMail = async (to="bar@example.com, baz@example.com", name="User Name") => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'shea.lang72@ethereal.email', // generated ethereal user
      pass: 'q1EFCgRWmwW2Z8mrZ1', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to, // list of receivers
    subject: "Booking Confirmation ✔", // Subject line
    text: "Your booking is confirmed. Somebody from the team contact you soon.", // plain text body
    html: `<div>
        <div>Hii ${name}</div>
        <div>Your booking is confirmed. Somebody from the team contact you soon.</div>
    </div>`
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
