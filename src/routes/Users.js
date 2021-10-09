import UsersController from "../controllers/Users";
import BaseRoute from "./BaseRoute";

export default new BaseRoute(UsersController).getRoutes();
