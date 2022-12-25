const request = require("supertest");
const app = require("../server");
const Admin = require("../src/models/admin");
const Message = require("../src/models/message");

const message = {
    sender: "Me",
    email: "test@gmail.com",
    subject: "Test",
    content: "This is a dummy text just for test",
};

beforeAll(async () => {
    await Message.deleteMany();
});

test("Get All Messages", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    await request(app)
        .get("/api/message")
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .expect(200);
});

test("Add A New Message", async () => {
    await request(app).post("/api/message").send(message).expect(201);
});

test("Delete A Message", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const messageToDelete = await Message.findOne({
        sender: "Me",
        subject: "Test",
    });
    await request(app)
        .delete(`/api/message/${messageToDelete._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .expect(200);
});
