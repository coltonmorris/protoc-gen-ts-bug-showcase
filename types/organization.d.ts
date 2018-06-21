declare var test: string;

export class Organization {
  getFirst(): string;
  setFirst(value: string): void;

  getAge(): number;
  getObject(): Organization.AsObject;
}

export namespace Organization {
  export type AsObject = {
    first: string,
    age: number
  }
}
