const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const index = async (req, res) => {
  return res.json("Esto funciona");
};

const store = async (req, res) => {
  const name = req.body.name;
  const contact = req.body.email;
  const message = req.body.message;

  const mail = {
    to: "matosasleandro@gmail.com",
    from: "lnmatosas@hotmail.com",
    subject: "Mensaje desde MC Projects",
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
  };
  try {
    await sgMail
      .send(mail)
      .then((response) => console.log("Email sent..."))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
  return res.json("Email enviado");
};

module.exports = {
  index,
  store,
};
