import express from 'express';
import { getMessages, sendMessage } from '../controllers/messages.controllers.js';
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();



router.post("/send/:id",protectRoute,sendMessage)
router.get("/:id",protectRoute,getMessages)

export default router
