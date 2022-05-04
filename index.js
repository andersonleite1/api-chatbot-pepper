const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const router = require('./routes');
const PORT =  process.env.PORT || '3000';

const app = express()

app.use(express.json())

app.use(
  '/webhook',
  router.keyWord
);

app.get('/', (_req, res) => res.status(200).json({mesage: "Server Is Working"}));

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
