import express from "express";
import ApiOverview from "./apiOverview.routes";


const router = express.Router();

//********************** Routes Setup **********************//
router.use("/", ApiOverview);

export default router;