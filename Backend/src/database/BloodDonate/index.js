import mongoose from "mongoose";

const BloodDonateSchema = new mongoose.Schema(
    {
        bloodGroup: { type: String, required: true },
        bloodComponent: { type: String, required: true },
        unit: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const BloodDonateModel = mongoose.model("bloodDonations", BloodDonateSchema);