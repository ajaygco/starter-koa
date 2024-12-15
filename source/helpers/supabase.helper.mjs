// Modules
import { createClient } from "@supabase/supabase-js";

// Instance
let supabase;

// Initialise Supabase
export const initialiseSupabase = ({ projectKey, projectUrl }) => {
  supabase = createClient(projectUrl, projectKey);
};

// Get Supabase
export const getSupabase = () => {
  return supabase;
};
