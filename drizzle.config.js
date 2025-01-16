import { defineConfig } from "drizzle-kit";


export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:u5wURLFdv8iA@ep-falling-mode-a844g77p.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require'
  }
});