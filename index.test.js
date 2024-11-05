// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const { seedMusician } = require("./seedData");

describe("./musicians endpoint", () => {
  // Write your tests here
  test("Testing returns All Musicians", async () => {
    const res = await request(app).get("/musicians");
    expect(res.statusCode).toBe(200);
  });

  test("Testing returns 1 Musicians", async () => {
    const res = await request(app).post("/musician/1");
    expect(res.statusCode).toBe(200);
  });

  test("Testing returns 1 Musicians", async () => {
    const res = await request(app).delete("/musician/1");
    expect(res.statusCode).toBe(200);
  });
});
