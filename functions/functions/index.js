const cors = require('cors')({ origin: true });
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.sendEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log('This is the request body: ', request.body);

    const email = request.body.data.email;
    const message = request.body.data.message;

    const msg = {
      to: 'vidimi7rov@gmail.com',
      from: email,
      subject: 'Message from your weird bot',
      text: message,
    };

    sgMail.send(msg);

    response.send({
      "data": {
        "text": "Email sent!"
      }
    });
  });
});
