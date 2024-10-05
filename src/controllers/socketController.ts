import { Socket } from 'socket.io';
import randomMessages from '../utils/randomMessages';

export const handleSocketConnection = (socket: Socket): void => {
  console.log('A user connected');

  socket.on('clientMessage', (msg: string) => {
    console.log('Received message from client:', msg);

    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    socket.emit('serverMessage', randomMessage);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
};
