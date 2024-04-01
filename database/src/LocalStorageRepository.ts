import {
  Chat,
  DatabaseObject,
  IDataRepository,
  Message,
} from "../interface/IDataRepository";

class LocalStorageRepository implements IDataRepository {
  private readonly key: string;
  private db: DatabaseObject;

  constructor(key: string) {
    this.key = key;
    this.createDB();
  }

  private createDB(): void {
    if (!localStorage.getItem(this.key)) {
      const initialDB: DatabaseObject = {
        users: [],
        chats: [],
      };
      localStorage.setItem(this.key, JSON.stringify(initialDB));
    }
  }

  private findChat(chatId: string): Chat | undefined {
    return this.db.chats.find((chat) => chat.id === chatId);
  }

  private async fetchDB(): Promise<void> {
    const data = localStorage.getItem(this.key);
    this.db = data
      ? (JSON.parse(data) as DatabaseObject)
      : { users: [], chats: [] };
  }

  private async syncDB(): Promise<void> {
    localStorage.setItem(this.key, JSON.stringify(this.db));
  }

  public async getChat(chatId: string): Promise<Chat | undefined> {
    await this.fetchDB();
    return this.db.chats.find((chat) => chat.id === chatId);
  }

  public async getAllMessages(chatId: string): Promise<Message[]> {
    const chat = await this.getChat(chatId);
    return chat ? chat.messages : [];
  }

  public async getLastNMessages(N: number, chatId: string): Promise<Message[]> {
    const allMessages = await this.getAllMessages(chatId);
    return allMessages.slice(-N);
  }

  getNMoreMessages(N: number, chatId: string): Promise<Message[]> {
    throw new Error("Method not implemented.");
  }

  public async addMsg(chatId: string, item: Message): Promise<void> {
    await this.fetchDB();
    const chat = this.findChat(chatId);
    if (chat) {
      chat.messages.push(item);
      this.syncDB();
    } else {
      console.log("chat does not exists!");
    }
  }

  public async updateMsg(
    chatId: string,
    msgId: string,
    item: Message
  ): Promise<void> {
    await this.fetchDB();
    const chat = this.findChat(chatId);
    if (chat) {
      const index = chat.messages.findIndex((msg) => msg.id === msgId);
      if (index !== -1) {
        chat.messages[index] = item;
        this.syncDB();
      }
    }
  }

  public async deleteMsg(chatId: string, msgId: string): Promise<void> {
    await this.fetchDB();
    const chat = this.findChat(chatId);
    if (chat) {
        const idxToRemove = chat.messages.findIndex(msg => msg.id === msgId);
        chat.messages.splice(idxToRemove, 1);
        this.syncDB();
    }
  }

  public async addChat(item: Chat): Promise<void> {
    await this.fetchDB();
    this.db.chats.push(item);
  }

  public async updateChat(chatId: string, item: Chat): Promise<void> {
    await this.fetchDB();
    const idx = this.db.chats.findIndex(chat => chat.id === chatId);
    this.db.chats[idx] = item;
  }

  public async deleteChat(chatId: string): Promise<void> {
    await this.fetchDB();
    const idx = this.db.chats.findIndex(chat => chat.id === chatId);
    this.db.chats.splice(idx, 1);
  }
}
