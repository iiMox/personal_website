const Admin = require("../src/models/Admin");

beforeAll(async () => {
    await Admin.deleteMany();
});

require("./auth");
require("./skill");
require("./project");
require("./service");
require("./message");
