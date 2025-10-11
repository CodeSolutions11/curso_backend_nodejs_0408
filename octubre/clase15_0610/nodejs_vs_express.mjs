import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ users: [] }));
  }
});

// Con Express
import express from "express";
const app = express();
