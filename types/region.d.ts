export class Region {
  getName(): string;
  setName(value: string): void;

  getTimezone(): number;
}

export namespace Regio {
  export type AsObject = {
    name: string,
    timezone: number
  }
}
