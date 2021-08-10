const { reset } = require("nodemon");
const dbEnvelopes = require("../config/db");
const { createId, findById, deleteById } = require("../helpers/db-helpers");
const router = require("../routes/envelopes");

module.exports = {
    getEnvelopes() {
        const envelopes = dbEnvelopes;
        return envelopes;
    },
    addEnvelope(instance) {
    
        const { title, budget } = instance;
        const envelopes = dbEnvelopes;
        const newId = createId(envelopes);
        
        const newEnvelope = {
            id: newId,
            title,
            budget,
        };

        envelopes.push(newEnvelope);

        return newEnvelope
    },
    getEnvelopeById(dataId) {
        const id = Number(dataId);    
        const envelopes = dbEnvelopes;
        const envelope = findById(envelopes, id);

        if (!envelope) {
            return {
                message: "Invalid Id"
            }
        }
        
        return envelope;
    },
    updateEnvelope(instance, dataId) {

        const { title, budget } = instance;
        const id = Number(dataId);

        const envelopes = dbEnvelopes;
        const envelope = findById(envelopes, id);
        
        if (!envelope) {
            return {
                message: "Envelope Not Found"
            }
        }
        
        envelope.title = title;
        envelope.budget = budget;
        return envelopes;
    },
    deleteEnvelope(dataId) {

        const id = dataId;

        const envelopes = dbEnvelopes;
        const envelope = findById(envelopes, id);

        if (!envelope) {
            return {
                message: "Envelope Not Found",
            };
        }

        const updatedEnvelopes = deleteById(envelopes, id);
        return updatedEnvelopes;


    },    
    transfer(instance, params) {

        const envelopes = dbEnvelopes;
        const { fromId, toId } = params;
        const { amount } = instance

        const originEnv = findById(envelopes, fromId);
        const destinationEnv = findById(envelopes, toId);

        if (!originEnv || !destinationEnv) {
            return {
                message: "Envelope Not Found",
            };
        }

        if (originEnv.budget < Number(amount)) {
            return {
                message: "Amount to transfer exceeds envelope budget funds"
            }
        }

        originEnv.budget -= Number(amount);
        destinationEnv.budget += Number(amount);

        return {
            origin: originEnv,
            destination: destinationEnv
        }
    }
}