import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema({
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
        TYP: Number,
        ART: String,
        STANDORTTYP: String,
        BEZEICHNUNG: String,
        BEZEICHNUNGZUSATZ: String,
        KURZBEZEICHNUNG: String,
        STRASSE: String,
        PLZ: String,
        ORT: String,
        TELEFON: String,
        FAX: String,
        EMAIL: String,
        PROFILE: String,
        SPRACHEN: String,
        WWW: String,
        TRAEGER: String,
        TRAEGERTYP: Number,
        BEZUGNR: String,
        GEBIETSARTNUMMER: Number,
        SNUMMER: Number,
        NUMMER: Number,
        GlobalID: String,
        CreationDate: Date,
        Creator: String,
        EditDate: Date,
        Editor: String,
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

export const School = mongoose.model("School", SchoolSchema);
