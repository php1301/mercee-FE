/* eslint-disable import/prefer-default-export */
import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';
// Configure mailgen by setting a theme and your product info

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    // Appears in header & footer of e-mails
    name: 'Medsy',
    link: 'https://medsy-modern.vercel.app',
    // Optional logo
    // logo: 'https://mailgen.js/img/logo.png'
  },
});
export async function sendMail(from, to, subject, data) {
  const formattedData = data.items.map(({ name, quantity, price }) => ({
    name,
    quantity,
    price: price * quantity,
  }));
  const email = {
    body: {
      greeting: 'Dear',
      name: 'Consumer',
      intro: 'Your order has been received successfully.',
      table: {
        data: formattedData,
        columns: {
          // Optionally, customize the column widths
          customWidth: {
            quantity: '15%',
            price: '20%',
          },
          // Optionally, change column text alignment
          customAlignment: {
            price: 'right',
          },
        },
      },
      action: {
        instructions:
          'You can check the status of your order and more in your dashboard:',
        button: {
          color: '#3869D4',
          text: 'Go to Medsy',
          link: 'https://medsy-modern.vercel.app',
        },
      },
      outro: 'We thank you for your purchase.',
    },
  };
  // Generate an HTML email with the provided contents
  const emailBody = await mailGenerator.generate(email);
  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailText = await mailGenerator.generatePlaintext(email);

  const transporter = nodemailer.createTransport({
    host: 'your_host_here',
    port: 2525,
    auth: {
      user: 'your_user_here',
      pass: 'your_password_here',
    },
  });
  const mailOptions = {
    from,
    to,
    subject,
    html: emailBody,
    text: emailText,
  };
  // send mail with defined transport object
  return transporter.sendMail(mailOptions);
  //
}
