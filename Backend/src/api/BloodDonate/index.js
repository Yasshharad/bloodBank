import express from "express";

import { BloodDonateModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route     /
 * Des       Create new BloodDonate
 * Params    none
 * Access    Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
    try {
        const BloodDonate = await BloodDonateModel?.create?.(req.body.BloodDonate);
        return res.status(200).json({ BloodDonate });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


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
        const BloodDonate = await BloodDonateModel.findById(_id);

        if (!BloodDonate) {
            return res.status(400).json({ error: "BloodDonate not found" });
        }

        return res.json({ BloodDonate });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;