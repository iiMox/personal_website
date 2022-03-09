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
        password: {
            type: String,
            required: true,
        },
        tokens: {
            token: {
                type: String,
                required: true,
            },
        },
    },
    { timestamps: true }
);

adminSchema.methods.generateAuthToken = async () => {
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
        throw new Error("Enable to login!");
    }

    const isMatch = bcrypt.compare(admin.password, password);

    if (!isMatch) {
        throw new Error("Enable to login!");
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

const admin = new mongoose.Model("Admin", adminSchema);

module.exports = admin;
