import { UsersSchema } from "../models";
import BaseController from "./BaseController";

class UsersController extends BaseController {
  constructor() {
    super({
      collection: "Users",
      schema: UsersSchema,
    });
  }
}

export default new UsersController();
