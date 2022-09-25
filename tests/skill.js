const request = require("supertest");
const app = require("../server");
const Admin = require("../src/models/Admin");
const Skill = require("../src/models/skill");

const skill = {
    skill: "HTML",
    position: 1,
    visibility: true,
    icon: "icon1.png",
};

beforeAll(async () => {
    await Skill.deleteMany();
});

test("Get All Skills", async () => {
    await request(app).get("/api/skill").expect(200);
});

test("Add New Skill", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    await request(app)
        .post("/api/skill")
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .send(skill)
        .expect(201);
});

test("Update A Skill", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const skill = await Skill.findOne({ skill: "HTML" });
    await request(app)
        .put(`/api/skill/${skill._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .send({ skill: "CSS" })
        .expect(200);
});

test("Delete A Skill", async () => {
    const admin = await Admin.findByCredentials("Test", "12345");
    const skill = await Skill.findOne({ skill: "CSS" });
    await request(app)
        .delete(`/api/skill/${skill._id}`)
        .set("Authorization", `Bearer ${admin.tokens[0].token}`)
        .expect(200);
});
