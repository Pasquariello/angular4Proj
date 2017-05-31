export class Message {
  content: string;
  username: string;
  messageId?: string;
  userId?: string;

//setting up constuctor allows me to instantiate the class
  constructor(content: string, username: string, messageId?: string, userId? : string) {
    this.content = content;
    this.username = username;
    this.messageId = messageId;
    this.userId = userId;
  }
}
