import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

export const initializeServer = () => {
  const app = express();
  const server = createServer(app);
  const io = new Server(server);

  return { app, server, io };
};
