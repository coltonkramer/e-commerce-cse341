const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Documentation',
        description: 'Give a clear description of how these routes work and how they can be used'
    },
    host: 'e-commerce-cse341.onrender.com',
    // host: 'localhost:8080',
    schemes: ['https'],
}
const generatedFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(generatedFile, endpointFiles, doc)