import express from "express";
import ApiOverview from "./apiOverview.routes";
import UserRoutes from "./users.routes";


const router = express.Router();

//********************** Routes Setup **********************//
router.use("/", ApiOverview);
router.use("/", UserRoutes);

export default router;