import { Server } from "./api";

async function main() {
  const server = new Server();
  try {
    server.run();
    console.log('Server started successfully!');
  } catch (error) {
    console.log('Error starting server: ', error);
  }
}

main();
