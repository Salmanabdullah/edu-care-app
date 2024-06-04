import express from "express";
import requireAuth from "../middlewares/requireAuth.js";
import {
  getChild,
  getKindergarten,
  getSchool,
  getTeenager,
} from "../controllers/mapController.js";

const router = express.Router();

// require auth for all map routes
router.use(requireAuth);

// location routes will be placed here

router.get("/schools", getSchool);
router.get("/kindergartens", getKindergarten);
router.get("/schulsozialarbeit", getChild);
router.get("/jugendberufshilfen", getTeenager);

export default router;
