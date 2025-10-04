const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let token;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  // Register and login to get token
  await request(app).post("/api/auth/register").send({
    username: "testuser",
    email: "test@example.com",
    password: "123456"
  });

  const loginRes = await request(app).post("/api/auth/login").send({
    email: "test@example.com",
    password: "123456"
  });

  token = loginRes.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Post API", () => {
  it("should create a post", async () => {
    const res = await request(app)
      .post("/api/posts")
      .set("Authorization", `Bearer ${token}`)
      .send({ title: "My Post", content: "Post content" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("My Post");
  });

  it("should fetch user posts", async () => {
    const res = await request(app)
      .get("/api/posts")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
