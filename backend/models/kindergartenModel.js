import mongoose from "mongoose";

const KindergartenSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "FeatureCollection",
  },
  name: {
    type: String,
    required: true,
  },
  crs: {
    type: {
      type: String,
      required: true,
    },
    properties: {
      name: {
        type: String,
        required: true,
      },
    },
  },
  features: [
    {
      type: {
        type: String,
        default: "Feature",
      },
      properties: {
        OBJECTID: Number,
        ID: Number,
        TRAEGER: String,
        BEZEICHNUNG: String,
        KURZBEZEICHNUNG: String,
        STRASSE: String,
        STRSCHL:String,
        HAUSBEZ: String,
        PLZ: String,
        ORT: String,
        HORT: Number,
        KITA: Number,
        URL: String,
        TELEFON: String,
        FAX: String,
        EMAIL: String,
        BARRIEREFREI: Number,
        INTEGRATIV: Number,
      },
      geometry: {
        type: {
          type: String,
          default: "Point",
        },
        coordinates: [Number], // Array of numbers (longitude, latitude)
      },
    },
  ],
});

export const Kindergarten = mongoose.model("Kindergarten", KindergartenSchema);
