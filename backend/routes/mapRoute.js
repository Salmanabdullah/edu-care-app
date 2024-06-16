import express from "express";
import {
  getChild,
  getKindergarten,
  getSchool,
  getTeenager,
} from "../controllers/mapController.js";

const router = express.Router();

// location routes will be placed here

router.get("/school", getSchool);
router.get("/kindergarten", getKindergarten);
router.get("/child", getChild);
router.get("/teenager", getTeenager);

export default router;
