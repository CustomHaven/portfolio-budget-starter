const envelopeRouter = require('express').Router();

const {
  getEnvelopes,
  addEnvelope,
  getEnvelopeById,
  deleteEnvelope,
  updateEnvelope,
  transfer,
} = require("../controllers/envelopes");


envelopeRouter.get('/', (req, res) => {
  res.send(getEnvelopes());
});
envelopeRouter.post('/', (req, res) => {
  const newEnvelope = addEnvelope(req.body);
  res.status(201).send(newEnvelope)
});
envelopeRouter.get('/:id', (req, res) => {
  const envelope = getEnvelopeById(req.params.id);
  res.status(200).send(envelope);
});
envelopeRouter.put('/:id', (req, res) => {
  const update = updateEnvelope(req.body, req.params.id);
  res.status(201).send(update);
});
envelopeRouter.delete('/:id', (req, res) => {
  const deleteEnv = deleteEnvelope(req.params.id);
  if (deleteEnv) {
    res.status(204).send();
  } else {
    res.status(500).send();
  }
});
envelopeRouter.post('/:fromId/transfer/:toId', (req, res) => {
  const workDone = transfer(req.body, req.params)
  res.status(201).send(workDone);
});

module.exports = envelopeRouter;