const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        tokens: [
            {
                token: {
                    type: String,
                },
            },
        ],
    },
    { timestamps: true }
);

adminSchema.methods.generateAuthToken = async function () {
    const admin = this;

    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);

    admin.tokens = admin.tokens.concat({ token });

    await admin.save();

    return token;
};

adminSchema.methods.toJSON = function () {
    const admin = this;

    const adminObject = admin.toObject();

    delete adminObject.password;
    delete adminObject.tokens;

    return adminObject;
};

adminSchema.statics.findByCredentials = async (username, password) => {
    const admin = await Admin.findOne({ username });

    if (!admin) {
        return null;
    }

    const isMatch = bcrypt.compare(admin.password, password);

    if (!isMatch) {
        return null;
    }

    return admin;
};

adminSchema.pre("save", async function (next) {
    const admin = this;

    if (admin.isModified("password")) {
        admin.password = bcrypt.hash(admin.password, 8);
    }

    next();
});

const Admin = new mongoose.model("Admin", adminSchema);

module.exports = Admin;
