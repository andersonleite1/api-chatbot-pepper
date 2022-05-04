const express = require('express')
const cors = require('cors');
const { WebhookClient } = require('dialogflow-fulfillment')
const router = require('./routes');
const PORT =  process.env.PORT || '3000';

const app = express()

app.use(express.json());

// app.use((_req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//   app.use(cors());
//   next();
// });

app.use(cors());

app.use(
  '/webhook',
  router.keyWord
);

app.get('/', (_req, res) => res.status(200).json({mesage: "Server Is Working"}));

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
