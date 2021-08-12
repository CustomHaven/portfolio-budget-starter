const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4001;

const swaggerRouter = require('./routes/docs');
const envelopeRouter = require('./routes/envelopes');
app.use(morgan('dev'));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerRouter);
app.use("/api/v1/envelopes", envelopeRouter);







app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});