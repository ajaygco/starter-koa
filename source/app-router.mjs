// Modules
import Router from "@koa/router";

// Controllers
import { ping } from "./controllers/misc/ping.ctrl.mjs";

// Instance
export const appRouter = new Router();

// Routes
appRouter.get("/misc/ping", ping);
