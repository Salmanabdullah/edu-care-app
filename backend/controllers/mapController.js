import mongoose from "mongoose";
import { Child } from "../models/childModel.js";
import { Kindergarten } from "../models/kindergartenModel.js";
import { School } from "../models/schoolModel.js";
import { Teenager } from "../models/teenagerModel.js";

// get all school's locations
export const getSchool = async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all kindergarten's locations
export const getKindergarten = async (req, res) => {
  try {
    const kindergartens = await Kindergarten.find();
    res.json(kindergartens);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all child's locations
export const getChild = async (req, res) => {
  try {
    const childs = await Child.find();
    res.json(childs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all teenager's locations
export const getTeenager = async (req, res) => {
  try {
    const teenagers = await Teenager.find();
    res.json(teenagers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
