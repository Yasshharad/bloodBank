import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const BankSchema = new mongoose.Schema(
    {
        BloodBankName: { type: String, required: true },
        state: { type: String, required: true },
        District: { type: String, required: true },
        city: { type: String, required: true },
        address: [{ detail: { type: String }, for: { type: String } }],
        Pincode: { type: Number },
        contactNo: [{ type: Number }],
        Email: { type: String, required: true },
        website: { type: String, required: true },
        NodalOfficer: { type: String, required: true },
        NodalOfficerContact: { type: String, required: true },
        category: { type: String, required: true },
        BloodComponentAvailable: { type: Boolean, required: true },
        Licence: { type: String, required: true },
        Latitude: { type: String, required: true },
        Longitude: { type: String, required: true },
        password: { type: String },

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
BankSchema.statics.findByBloodBankNameAndLicence = async ({ BloodBankName, Licence }) => {
    const checkUserByEmail = await BankModel.findOne({ BloodBankName });
    const checkUserByPhone = await BankModel.findOne({ Licence });

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

export const BankModel = mongoose.model("banks", BankSchema);