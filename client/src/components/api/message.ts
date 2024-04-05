import { MessageSendDto } from './dto/message.dto';
import { Socket, io } from 'socket.io-client';

export class WebSocketConnection {
  private socket: Socket;
  private userName: string;

  constructor(serverUrl: string) {
    this.userName = '';
    this.socket = io(serverUrl);

    this.socket.on('chat', (message) => {
      console.log('Received a chat message:', message);
      // Display the message on your UI or handle it as required
    });
  }

  public setConnection(userName: string) {
    this.userName = userName;
    this.socket.on('connect', () => {
      this.socket.emit('login', this.userName);
    });
  }

  public sendMessage(destId: string, content: string): void {
    const dto: MessageSendDto = {
      destId: destId,
      content: content,
    };

    this.socket.emit('chat', dto);
  }
}
