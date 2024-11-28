import { DBConnection } from "./prisma";

export class DatabaseConfig {
  async configure() {
    console.log("Trying to connect to database...");
    await DBConnection.$connect();
    console.log("Connected to database.");
  }
}
