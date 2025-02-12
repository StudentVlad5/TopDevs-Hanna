const WebSocket = require("ws"); // Імпортуємо бібліотеку WebSocket

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  setInterval(() => {
    ws.send("What is your current counter value?");
  }, 1000);

  ws.on("message", (message) => {
    console.log(`Received counter value from client: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
