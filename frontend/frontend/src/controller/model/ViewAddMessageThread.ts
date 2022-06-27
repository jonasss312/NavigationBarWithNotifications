export class ViewAddMessageThread {
    readonly time: string;
    readonly summary: string;
    readonly seen: number;

    constructor(
        time: string,
        summary: string,
        seen: number,
    ) {
        this.time = time;
        this.summary = summary;
        this.seen = seen;
    }

    getTime(): string {
        return this.time;
    }

    getSummary(): string {
        return this.summary;
    }

    getSeen(): number {
        return this.seen;
    }
}