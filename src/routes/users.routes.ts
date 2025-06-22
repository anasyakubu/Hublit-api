import { Router } from "express";
import { listAllUsers } from "../controllers/users.controller";
const { setupKinde, protectRoute, getUser, GrantType } = require("@kinde-oss/kinde-node-express");


const router = Router();

// Default API overview route
router.get("/users", listAllUsers);

export default router;