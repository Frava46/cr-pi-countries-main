const { Router } = require("express");

const {getCountries} = require("../controllers/getCountries");
const {getCountryById} = require("../controllers/getCountryById");
const {getByName} = require("../controllers/getByName");

const countriesRouter = Router();

countriesRouter.get("/", getCountries);
countriesRouter.get("/name", getByName);
countriesRouter.get("/:idPais", getCountryById);


module.exports = countriesRouter;