export class ViewMessageThread {
  readonly id: number;
  readonly time: string;
  readonly summary: string;
  readonly seen: number;

  constructor(
    id: number,
    time: string,
    summary: string,
    seen: number,
  ) {
    this.id = id;
    this.time = time;
    this.summary = summary;
    this.seen = seen;
  }
  getId(): number {
    return this.id;
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

  isNew(): Boolean {
    return this.seen === 0;
  }
}