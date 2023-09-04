import { Message, User } from '../../db/models';
import { ADD_MESSAGE, DELETE_MESSAGE, HIDE_MESSAGE, SEND_MESSAGE } from './actions';

const map = new Map();

const connectionCb = (socket, request) => {
  const userId = request.session.user.id;

  map.set(userId, { ws: socket, user: request.session.user });

  function sendUsers(activeConnections) {
    activeConnections.forEach(({ ws }) => {
      ws.send(
        JSON.stringify({
          type: 'SET_USERS',
          payload: [...map.values()].map(({ user }) => user),
        }),
      );
    });
  }

  sendUsers(map);

  socket.on('error', () => {
    map.delete(userId);
    sendUsers(map);
  });

  socket.on('message', async (message) => {
    const actionFromFront = JSON.parse(message);
    const { type, payload } = actionFromFront;
    switch (type) {
      case SEND_MESSAGE:
        Message.create({ text: payload, authorId: userId }).then(async (newMessage) => {
          const newMessageWithAuthor = await Message.findOne({
            where: { id: newMessage.id },
            include: User,
          });
          map.forEach(({ ws }) => {
            ws.send(
              JSON.stringify({
                type: ADD_MESSAGE,
                payload: newMessageWithAuthor,
              }),
            );
          });
        });
        break;

      case DELETE_MESSAGE:
        Message.findOne({ where: { id: payload } }).then(async (targetMessage) => {
          if (targetMessage.authorId !== userId) return;
          await Message.destroy({ where: { id: payload } });
          map.forEach(({ ws }) => {
            ws.send(
              JSON.stringify({
                type: HIDE_MESSAGE,
                payload,
              }),
            );
          });
        });
        break;

      default:
        break;
    }
    console.log(`Received message ${message} from user ${userId}`);
  });

  socket.on('close', () => {
    map.delete(userId);
    sendUsers(map);
  });
};

export default connectionCb;
