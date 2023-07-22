import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const BankSchema = new mongoose.Schema(
    {
        bloodBankName: { type: String, required: true },
        state: { type: String, required: true },
        district: { type: String, required: true },
        city: { type: String, required: true },
        address: [{ detail: { type: String }, for: { type: String } }],
        pincode: { type: Number },
        contactNo: [{ type: Number }],
        email: { type: String, required: true },
        website: { type: String, required: true },
        nodalOfficer: { type: String, required: true },
        nodalOfficerContact: { type: String, required: true },
        category: { type: String, required: true },
        availability: [{
            bloodGroup: {
                type: mongoose.Types.ObjectId,
                ref: "bloodDonations",
            },
            bloodComponent: {
                type: mongoose.Types.ObjectId,
                ref: "bloodDonations",
            },
        }],
        licence: { type: String, required: true },
        latitude: { type: String, required: true },
        longitude: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// attachments
BankSchema.methods.generateJwtToken = function () {
    return jwt.sign({ bank: this._id.toString() }, "bloodbank");
};

// helper functions
BankSchema.statics.findByBloodBankNameAndLicence = async ({ bloodBankName, licence }) => {
    const checkUserByBloodBankName = await BankModel.findOne({ bloodBankName });
    const checkUserByLicence = await BankModel.findOne({ licence });

    if (checkUserByBloodBankName || checkUserByLicence) {
        throw new Error("Blood bank Already registered ...!");
    }

    return false;
};

BankSchema.statics.findByEmailAndpassword = async ({ email, password }) => {
    const bank = await BankModel.findOne({ email });
    if (!bank) throw new Error("Bank does not exist !!!");

    // Compare Password
    const doesPasswordMatch = await bcrypt.compare(password, bank.password);

    if (!doesPasswordMatch) throw new Error("Invalid Credentials !!!");

    return bank;
};

BankSchema.pre("save", function (next) {
    const bank = this;

    // password is modifled
    if (!bank.isModified("password")) return next();

    // generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);

        // hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            // assigning hashed password
            bank.password = hash;
            return next();
        });
    });
});

export const BloodBankModel = mongoose.model("blooBanks", BankSchema);