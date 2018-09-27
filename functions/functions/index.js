const cors = require('cors')({ origin: true });
const functions = require('firebase-functions');
const DOMAIN = functions.config().smtp.domain;
const API_KEY = functions.config().mailgun.apikey;
const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

exports.sendEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log('This is the request body: ', request.body);

    const email = request.body.data.email;
    const message = request.body.data.message;

    const data = {
      to: 'sstoyanov08@gmail.com',
      from: email,
      subject: 'Message from your weird bot',
      text: message,
    };

    mailgun.messages().send(data, (error, body) => {
      console.log(body);
    });

    response.send({
      "data": {
        "text": "Email sent!"
      }
    });
  });
});
