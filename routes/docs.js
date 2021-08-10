const swaggerRouter = require('express').Router();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Portfolio Budget',
            version: '1.0.0',
            description: 'Simple backend API to manage portfolio budget using an envelope budgeting method',
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/",
            },
        },
        servers: [
            {
                url: 'https://localhost:4001',
            },
        ],
    },
    apis: ['./routes/envelopes.js']
};


const specs = swaggerJsDoc(swaggerOptions);

const yamlDoc = yaml.load(fs.readFileSync(path.resolve(__dirname, '../swagger.yml'), 'utf8'));

swaggerRouter.use('/', swaggerUi.serve);

swaggerRouter.get('/', swaggerUi.setup(yamlDoc, {
    explorer: true
}));

module.exports = swaggerRouter;