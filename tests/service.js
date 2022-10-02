const request = require("supertest");
const app = require("../server");
const Admin = require("../src/models/admin");
const Service = require("../src/models/service");

const service = {
    service: "Test Service",
    description: "test test",
    position: 1,
    visibility: true,
    icon: "icon for test",
};

beforeAll(async () => {
    await Service.deleteMany();
});

test("Get All Services", async () => {
    await request(app).get("/api/service").expect(200);
});

test("Add New test", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    await request(app)
        .post("/api/service")
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .send(service)
        .expect(201);
});

test("Update A Service", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const serviceToUpdate = await Service.findOne({ service: "Test Service" });
    await request(app)
        .put(`/api/service/${serviceToUpdate._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .send({ service: "Edited Title" })
        .expect(200);
});

test("Delete A Service", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const serviceToDelete = await Service.findOne({ service: "Edited Title" });
    await request(app)
        .delete(`/api/service/${serviceToDelete._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .expect(200);
});
