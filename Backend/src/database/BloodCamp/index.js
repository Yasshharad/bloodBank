import mongoose from "mongoose";

const BloodCampSchema = new mongoose.Schema(
    {
        organizationType: { type: String, required: true },
        organizationName: { type: String, required: true },
        organizerName: { type: String, required: true },
        organizerEmail: { type: String, required: true },
        organizerNumber: { type: Number, required: true },
        coOrganizerName: { type: String, required: true },
        coOrganizerEmail: { type: String, required: true },
        coOrganizerNumber: { type: Number, required: true },
        campName: { type: String, required: true },
        campAddress: { type: String, required: true },
        state: { type: String, required: true },
        district: { type: String, required: true },
        proposeDate: { type: Date, required: true },
        mapLocation: { type: String, required: true },
        startTime: { type: Number, required: true },
        endTime: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const BloodCampModel = mongoose.model("bloodcamps", BloodCampSchema);