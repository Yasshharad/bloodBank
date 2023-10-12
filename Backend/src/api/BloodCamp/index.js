import express from "express";

import { BloodCampModel } from "../../database/allModels";
import {
    ValidateBloodCamp,
    ValidateSearchString,
} from "../../validation/bloodcamp.validation";

const Router = express.Router();

/**
 * Route     /
 * Des       Create new BloodCamp
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
    try {
        const BloodCamps = await BloodCampModel?.create?.(req.body.BloodCamp);
        return res.status(200).json({ BloodCamps });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route     /
 * Des       Get all the BloodCamp details based on the state
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state", async (req, res) => {
    try {
        const { state } = req.params;

        // await ValidateBloodCamp(req.query);

        const BloodCamps = await BloodCampModel.find({ state });
        if (BloodCamps.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodCamp found for selected options." });
        }
        return res.json({ BloodCamps });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /
 * Des       Get all the BloodCamp details based on the state, district
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state/:district", async (req, res) => {
    try {
        const { state, district } = req.params;

        // await ValidateBloodCamp(req.query);

        const BloodCamps = await BloodCampModel.find({ state, district });
        if (BloodCamps.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodCamp found for selected options." });
        }
        return res.json({ BloodCamps });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /:_id
 * Des       Get individual restuarant details based on id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const BloodCamp = await BloodCampModel.findById(_id);

        if (!BloodCamp) {
            return res.status(400).json({ error: "BloodCamp not found" });
        }

        return res.json({ BloodCamp });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /search/:searchString
 * Des       Get BloodCamps details based on search string
 * Params    searchString
 * Access    Public
 * Method    GET
 */
Router.get("/search/:searchString", async (req, res) => {
    try {
        const { searchString } = req.params;

        await ValidateSearchString(req.params);

        const BloodCamps = await BloodCampModel.find({
            name: { $regex: searchString, $options: "i" },
        });

        if (!BloodCamps.length === 0) {
            return res
                .status(404)
                .json({ error: `No BloodCamp matched with ${searchString}` });
        }

        return res.json({ BloodCamps });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;