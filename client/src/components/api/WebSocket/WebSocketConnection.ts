import { MessageReceiveDto, MessageSendDto } from '../dto/message.dto';
import { Socket, io } from 'socket.io-client';

export class WebSocketConnection {
  private socket: Socket;
  private userName: string;

  private callbacks: ((msg: MessageReceiveDto) => void)[] = [];

  constructor(serverUrl: string) {
    this.userName = '';
    this.socket = io(serverUrl);

    this.socket.on('chat', (message: MessageReceiveDto) => {
      console.log('There is ', this.callbacks.length, " callbacks!");
      console.log('I receive the message!!!! message: ', message);
      this.callbacks.forEach((callback) => {
        callback(message);
        console.log('i am running callback for: ', message);
      });
    });

    this.socket.on('connect', () => {
      this.socket.emit('login', this.userName);
    });
  }

  public addReceiveMessageCallback(callback: (msg: MessageReceiveDto) => void) {
    console.log('i am adding a callback!!!');
    this.callbacks.push(callback);
  }

  public resetConnection(userName: string) {
    this.userName = userName;
    this.socket.emit('login', this.userName);
  }

  public sendMessage(destId: string, content: string): void {
    const dto: MessageSendDto = {
      destId: destId,
      content: content,
    };
    this.socket.emit('chat', dto);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}
