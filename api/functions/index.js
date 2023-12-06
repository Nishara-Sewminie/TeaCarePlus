/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const tf = require("@tensorflow/tfjs");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


async function predict(data) {
  let tensor = tf.tensor1d(data);
  tf = tf.expandDims(0);
  let model = await tf.loadLayersModel("https://firebasestorage.googleapis.com/v0/b/teacareplus-1d69e.appspot.com/o/model.json?alt=media&token=0fc23f27-06e3-40e0-aa07-5c8016d7aa09");
  console.log(model);
}

exports.helloWorld = onRequest((request, response) => {
  //   logger.info("Hello logs!", {structuredData: true});
    predict(df).catch(console.log);
    let data = request.query.data;
    data = data.split(",");
    let df = []
    data.forEach(e=> {
      df.push(parseInt(e))
    })
    response.send(df);
  });
