const nodemailer = require("nodemailer");

async function Mail(subject, html) {
  // Configura el transporte de correo electrónico
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL, // Cambia esto por tu dirección de correo electrónico de Gmail
      pass: process.env.MAIL_PASS, // Cambia esto por tu contraseña de Gmail o usa una contraseña de aplicación si la tienes configurada
    },
    authMethod: "PLAIN",
  });

  // Define el correo electrónico que quieres enviar
  const mailOptions = {
    from: process.env.MAIL,
    to: process.env.MAIL, // Cambia esto por la dirección de correo electrónico del destinatario
    subject: subject,
    html: html,
  };
  // Envía el correo electrónico
  await transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log("Error al enviar el correo electrónico:", err);
    } else {
      console.log("Correo electrónico enviado con éxito:");
    }
  });
}

const index = async (req, res) => {
  return res.json("Esto funciona");
};

const store = async (req, res) => {
  const name = req.body.name;
  const contact = req.body.email;
  const message = req.body.message;
  const subject = "Mensaje desde la web MC Projects";
  const html = `<!DOCTYPE html>
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
 </html>`;

  Mail(subject, html);
  return res.json("Email enviado");
};

module.exports = {
  index,
  store,
};
