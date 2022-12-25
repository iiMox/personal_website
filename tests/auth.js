const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

const adminOneId = new mongoose.Types.ObjectId();

const admin = {
    _id: adminOneId,
    username: "Test",
    email: "test@gmail.com",
    password: "12345",
    tokens: [{ token: jwt.sign({ _id: adminOneId }, process.env.JWT_SECRET) }],
};

test("Sign Up New Admin", async () => {
    await request(app)
        .post("/api/auth/register")
        .send({
            username: admin.username,
            email: admin.email,
            password: admin.password,
        })
        .expect(200);
});

test("Login Admin", async () => {
    await request(app)
        .post("/api/auth/login")
        .send({ username: admin.username, password: admin.password })
        .expect(200);
});
