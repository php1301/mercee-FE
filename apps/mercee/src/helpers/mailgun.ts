/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-var-requires */
const mailgunSdk = require('mailgun-js');

const apiKey = process.env.MAILGUN_API_KEY;
const domain = `mail.${process.env.DOMAIN}`;
const mailgun = mailgunSdk({ apiKey, domain });

export async function sendMail(to, from, subject, html) {
  return mailgun.messages().send({
    to,
    from,
    subject,
    html,
  });
}
