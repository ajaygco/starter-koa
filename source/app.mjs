// Modules
import Koa from "koa";
import KoaCors from "@koa/cors";
import KoaBodyParser from "koa-body-parser";

// Common
import { supabaseConfig } from "./common/configs.common.mjs";

// Helpers
import { initialiseSupabase } from "./helpers/supabase.helper.mjs";

// Middlewares
import { logger } from "./middlewares/logger.mjs";

// Router
import { appRouter } from "./app-router.mjs";

// Initialise Supabase
initialiseSupabase(supabaseConfig);

// Instance
const app = new Koa();

// Setup Cors
app.use(KoaCors());

// Setup Body Parser
app.use(KoaBodyParser());

// Setup Error Handling
app.on("error", (error, ctx) => {
  // TODO: Setup error logging here

  // eslint-disable-next-line no-console
  console.error(error, ctx);
});

// Setup Middlewares
app.use(logger);

// Setup Router
app.use(appRouter.routes());
app.use(appRouter.allowedMethods());

// Start Server
app.listen(process.env.PORT || 5001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${process.env.PORT || 5001}`);
});
