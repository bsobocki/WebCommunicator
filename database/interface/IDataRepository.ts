export interface Message {
  id: string;
  sender: string;
  time: Date;
  content: string;
}

export interface Chat {
  id: string;
  participants: string[];
  messages: Message[];
}

export interface User {
  id: string;
  name: string;
}

export interface DatabaseObject {
  users: User[];
  chats: Chat[];
}

export interface IDataRepository {
  getAllMessages(chatId: string): Promise<Message[]>;
  getLastNMessages(N: number, chatId: string): Promise<Message[]>;
  getNMoreMessages(N: number, chatId: string): Promise<Message[]>;

  addMsg(chatId: string, item: Message): Promise<void>;
  updateMsg(chatId: string, msgId: string, item: Message): Promise<void>;
  deleteMsg(chatId: string, msgId: string): Promise<void>;

  addChat(item: Chat): Promise<void>;
  updateChat(chatId: string, item: Chat): Promise<void>;
  deleteChat(chatId: string): Promise<void>;
  getChat(chatId: string): Promise<Chat | undefined>;
}
