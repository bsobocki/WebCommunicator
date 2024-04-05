import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageSendDto } from './dto/message.dto';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:5173'], // Ensuring this is an array
    credentials: true,
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  private users: { [key: string]: string } = {};
  private usersR: { [key: string]: string } = {};

  @SubscribeMessage('login')
  handleLoginEvent(@ConnectedSocket() client: Socket, @MessageBody() userId: string): void {
    this.users[userId] = client.id;
    this.usersR[client.id] = userId;
    // Now client.id can be used to send messages directly to this user
    console.log("adding a user: ", userId, " as a client with id: ", client.id);
  }
  
  @SubscribeMessage('chat')
  handleChatEvent( @ConnectedSocket() client: Socket, @MessageBody() message: MessageSendDto): void {
    // Only send the message to the client with the id matching 'dest'
    //this.server.to(message.dest).emit('chat', message.text);
    console.log("I received a request from client: ", this.usersR[client.id], " to send a message '", message.content, ' to dest client: ', message.destId);
  }
}