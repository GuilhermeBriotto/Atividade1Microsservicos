const http = require("http");
const debug = require("debug")("nodestr:server");
const app = require("../src/app");
const server = http.createServer(app);

const port = process.env.PORT || 3333;
server.listen(port, () => console.log("Server is running on port 3333"));
server.on("error", onError);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
