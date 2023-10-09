const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS,
  },
});

const store = async (req, res) => {
  const name = req.body.name;
  const contact = req.body.email;
  const message = req.body.message;

  // const mail = {
  //   to: "matosasleandro@gmail.com",
  //   from: "lnmatosas@hotmail.com",
  //   subject: "Mensaje desde MC Projects",
  //   html: `<!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8" />
  //       <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     </head>
  //   <body>
  //      <p>Mensaje de: ${name}</p>
  //      <p>${contact}</p>
  //      <p>${message}</p>
  //     </body>
  // </html>`,
  // };
  try {
    await transporter.sendMail({
      from: "matosasleandro@gmail.com", // sender address
      to: "matosasleandro@gmail.com", // list of receivers
      subject: "Mensaje desde MC Projects", // Subject line
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head> 
      <body>
         <p>Mensaje de: ${name}</p>
         <p>${contact}</p>
         <p>${message}</p>
        </body>
    </html>`,
    });
    console.log("Mail enviado");
  } catch (err) {
    console.log(err);
  }
  return res.json("Email enviado");
};

module.exports = {
  store,
};
