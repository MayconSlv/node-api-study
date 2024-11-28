import "dotenv/config";
import { Server } from "./api";
import { DatabaseConfig } from "./data/database-config";

async function main() {
  const server = new Server();
  const database = new DatabaseConfig();
  try {
    await database.configure();
    server.run();
    console.log("Server started successfully!");
  } catch (error) {
    console.log("Error starting server: ", error);
  }
}

main();
