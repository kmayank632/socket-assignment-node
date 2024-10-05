import { initializeServer } from './config/serverConfig';
import { handleSocketConnection } from './controllers/socketController';

const { server, io } = initializeServer();

io.on('connection', handleSocketConnection);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
