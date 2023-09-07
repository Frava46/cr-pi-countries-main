const { Router } = require("express");

const {postActivity} = require("../controllers/postActivity");
const {getActivity} = require("../controllers/getActivity");

const activityRouter = Router();

activityRouter.post("/", postActivity);
activityRouter.get("/", getActivity);


module.exports = activityRouter;