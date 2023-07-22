import mongoose from "mongoose";

const BloodDonateSchema = new mongoose.Schema(
    {
        donarName: { type: String, required: true },
        donarAge: { type: String, required: true },
        donarGender: { type: String, required: true },
        donarEmail: { type: String, required: true },
        donarMobileNumber: { type: Number, required: true },
        donarFatherName: { type: String, required: true },
        state: { type: String, required: true },
        district: { type: String, required: true },
        donarAddress: { type: String, required: true },
        pincode: { type: Number, required: true },
        bloodGroup: { type: String, required: true },
        bloodComponent: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const BloodDonateModel = mongoose.model("blooddonations", BloodDonateSchema);