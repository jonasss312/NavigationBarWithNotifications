export class ViewMessageContent {
    readonly id: number;
    readonly content: string;

    constructor(
        id: number,
        content: string,
    ) {
        this.id = id;
        this.content = content;
    }
    getId(): number {
        return this.id;
    }

    getContent(): string {
        return this.content;
    }
}