# personal-budget

Simple Node/Express API to manage a portfolio budget using a budget envelope strategy. Users can create, read, update, and delete envelopes.

## Running the app
To run locally, run `npm install`, then `npm run start`

Once the app is running locally, you can access the API at `http://localhost:4001/`

## Testing with Swagger
Swagger documentation and testing available at `http://localhost:4001/api-docs`

To test with Swagger:
 - Retrieve envelopes using `GET /api/v1/envelopes`
 - Retrieve a single envelope using `GET /api/v1/envelopes/{id}`
 - Create an envelope using `POST /api/v1/envelopes`
 - Update an envelope using `PUT /api/v1/envelope/{id}`
 - Delete an envelope using `DELETE /api/v1/envelope/{id}`
 - Transfer money between envelopes using `POST /api/v1/envelope/{fromId}/transfer/{toId}`

## Resources
- [REST Architecture](https://auth0.com/blog/rest-architecture-part-1-building-api/)
- [Documenting your API with Swagger](https://levelup.gitconnected.com/swagger-time-to-document-that-express-api-you-built-9b8faaeae563)
- [Swagger Specification](https://swagger.io/docs/specification/basic-structure/)

## Options for extension
 - Create a frontend that displays envelopes and balances, and allows users to update each envelop balance
 - Add an API endpoint allowing user to add a single balance that’s distributed to multiple envelopes

