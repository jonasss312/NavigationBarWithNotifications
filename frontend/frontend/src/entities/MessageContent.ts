export class MessageContent {
    readonly id: number;
    readonly content: string;
    readonly messageThreadId: number;
  
    constructor(
      id: number,
      content: string,
      messageThreadId: number,
    ) {
      this.id = id;
      this.content = content;
      this.messageThreadId = messageThreadId;
    }
    getId(): number {
      return this.id;
    }
  
    getContent(): string {
      return this.content;
    }
  
    getMessageThreadId(): number {
      return this.messageThreadId;
    }
  }