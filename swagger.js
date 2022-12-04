const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Meetup-API",
    description: "CRUD REST Web API",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger/swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
