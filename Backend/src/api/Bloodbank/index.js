import express from "express";

import { BloodBankModel } from "../../database/allModels";
import {
    ValidateBloodBank,
    ValidateSearchString,
} from "../../validation/bloodbank.validation";

const Router = express.Router();

/**
 * Route     /
 * Des       Create new BloodBank
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
    try {
        const bloodBanks = await BloodBankModel?.create?.(req.body.bloodBank);
        return res.status(200).json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Route     /
 * Des       Get all the bloodbank details based on the state
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state", async (req, res) => {
    try {
        const { state } = req.params;

        // await ValidateBloodBank(req.query);

        const bloodBanks = await BloodBankModel.find({ state });
        if (bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodBank found for selected options." });
        }
        return res.json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /
 * Des       Get all the bloodbank details based on the state, district
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state/:district", async (req, res) => {
    try {
        const { state, district } = req.params;

        // await ValidateBloodBank(req.query);

        const bloodBanks = await BloodBankModel.find({ state, district });
        if (bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodBank found for selected options." });
        }
        return res.json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /
 * Des       Get all the bloodbank details based on the state, district, city
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state/:district/:city", async (req, res) => {
    try {
        const { state, district, city } = req.params;

        // await ValidateBloodBank(req.query);

        const bloodBanks = await BloodBankModel.find({ state, district, city });
        if (bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodBank found for selected options." });
        }
        return res.json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /
 * Des       Get all the bloodbank details based on the state, district, city, bloodgroup
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state/:district/:city/:bloodGroup", async (req, res) => {
    try {
        const { state, district, city, bloodGroup } = req.params;

        // await ValidateBloodBank(req.query);

        const bloodBanks = await BloodBankModel.find({ state, district, city, bloodGroup });
        if (bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodBank found for selected options." });
        }
        return res.json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /
 * Des       Get all the bloodbank details based on the state, district, city, bloodgroup, bloodComponent
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:state/:district/:city/:bloodGroup/:bloodComponent", async (req, res) => {
    try {
        const { state, district, city, bloodGroup, bloodComponent } = req.params;

        // await ValidateBloodBank(req.query);

        const bloodBanks = await BloodBankModel.find({ state, district, city, bloodGroup, bloodComponent });
        if (bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodBank found for selected options." });
        }
        return res.json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/**
 * Route     /
 * Des       Get all the bloodbank details based on the bloodgroup, bloodComponent
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/location/:bloodGroup/:bloodComponent", async (req, res) => {
    try {
        const { bloodGroup, bloodComponent } = req.params;

        // await ValidateBloodBank(req.query);

        const bloodBanks = await BloodBankModel.find({ bloodGroup, bloodComponent });
        if (bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: "No BloodBank found for selected options." });
        }
        return res.json({ bloodBanks });
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
        const bloodBank = await BloodBankModel.findById(_id);

        if (!bloodBank) {
            return res.status(400).json({ error: "BloodBank not found" });
        }

        return res.json({ bloodBank });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /search/:searchString
 * Des       Get BloodBanks details based on search string
 * Params    searchString
 * Access    Public
 * Method    GET
 */
Router.get("/search/:searchString", async (req, res) => {
    try {
        const { searchString } = req.params;

        await ValidateSearchString(req.params);

        const bloodBanks = await BloodBankModel.find({
            name: { $regex: searchString, $options: "i" },
        });

        if (!bloodBanks.length === 0) {
            return res
                .status(404)
                .json({ error: `No BloodBank matched with ${searchString}` });
        }

        return res.json({ bloodBanks });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;