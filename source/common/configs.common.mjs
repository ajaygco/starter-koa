// App Config
export const appConfig = {
  port: process.env.PORT || "5001",
};

// Supabase
export const supabaseConfig = {
  projectKey: process.env.KOA_APP_SUPABASE_PROJECT_KEY,
  projectUrl: process.env.KOA_APP_SUPABASE_PROJECT_URL,
};
