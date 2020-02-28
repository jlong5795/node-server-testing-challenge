const request = require("supertest");
const server = require("../api/server");

describe("employees router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/employees", function() {
    it("should return 200 ok", function() {
      return request(server)
        .get("/api/employees")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("POST /api/employees", function() {
    it("should return 201 CREATED", function() {
      return request(server)
        .post("/api/employees")
        .send({ employee_name: "Jason" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });


  describe("GET /api/departments", function() {
    it("should return 200 ok", function() {
      return request(server)
        .get("/api/departments")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("POST /api/departments", function() {
    it("should return 201 CREATED", function() {
      return request(server)
        .post("/api/departments")
        .send({ department_name: "kitchen" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
