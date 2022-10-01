const request = require("supertest");
const app = require("../server");
const Admin = require("../src/models/admin");
const Project = require("../src/models/project");

const project = {
    title: "Test project",
    link: "https://www.test.com",
    position: 1,
    preview: "test_image",
};

beforeAll(async () => {
    await Project.deleteMany();
});

test("Get All Projects", async () => {
    await request(app).get("/api/project").expect(200);
});

test("Add New Project", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    await request(app)
        .post("/api/project")
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .send(project)
        .expect(201);
});

test("Update Project", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const project = await Project.findOne({ title: "Test project" });
    await request(app)
        .put(`/api/project/${project._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .send({ title: "Updated Title" })
        .expect(200);
});

test("Delete Project", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const project = await Project.findOne({ title: "Updated Title" });
    await await request(app)
        .delete(`/api/project/${project._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .expect(200);
});
