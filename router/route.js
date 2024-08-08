import { Router } from "express";
const router = Router();
import * as controller from "../controllers/controller.js";

// Questions Routes API
router
  .route("/questions")
  .get(controller.getQuestions) //Get Request
  .post(controller.insertQuestions) // Post Request
  .delete(controller.deleteQuestions); // Delete Request

router
  .route("/result")
  .get(controller.getResult) // Get Result Request
  .post(controller.storeResult) // Post Result Request
  .delete(controller.deleteResult); // Delete Result Request

export default router;
