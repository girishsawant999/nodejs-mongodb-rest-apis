import { Router } from "express";

class BaseRoute {
  constructor(controller, allowedMethods = ["GET", "POST", "PUT", "DELETE"]) {
    this.allowedMethods = allowedMethods;
    this.controller = controller;
    this.router = Router();
    this.init();
  }

  init() {
    if (this.allowedMethods.includes("GET"))
      this.router.get("/", this.controller.list);
    if (this.allowedMethods.includes("POST"))
      this.router.post("/", this.controller.save);
    if (this.allowedMethods.includes("GET"))
      this.router.get("/:id", this.controller.get);
    if (this.allowedMethods.includes("PUT"))
      this.router.put("/:id", this.controller.update);
    if (this.allowedMethods.includes("DELETE"))
      this.router.delete("/:id", this.controller.delete);
  }

  getRoutes() {
    return this.router;
  }
}

export default BaseRoute;
