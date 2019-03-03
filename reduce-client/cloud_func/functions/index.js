const functions = require('firebase-functions');
const moment = require('moment');
const cors = require('cors')({
  origin: true,
});

exports.date = functions.https.onRequest((req, res) => {
  if (req.method === 'PUT') {
    return res.status(403).send("NO!");
  }

  return cors(req, res, () => {
    let format = req.query.format;

    if (!format) {
      format = req.body.format;
    }

    const formattedDate = moment().format(format);
    console.log('Sending formatted date: ', formattedDate);
    res.status(200).send(formattedDate);
  });
});