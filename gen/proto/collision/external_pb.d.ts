// package: C.D
// file: proto/collision/external.proto

import * as jspb from "google-protobuf";

export class Collider extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collider.AsObject;
  static toObject(includeInstance: boolean, msg: Collider): Collider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Collider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collider;
  static deserializeBinaryFromReader(message: Collider, reader: jspb.BinaryReader): Collider;
}

export namespace Collider {
  export type AsObject = {
    name: string,
  }
}

export class CheckMeOut extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckMeOut.AsObject;
  static toObject(includeInstance: boolean, msg: CheckMeOut): CheckMeOut.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckMeOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckMeOut;
  static deserializeBinaryFromReader(message: CheckMeOut, reader: jspb.BinaryReader): CheckMeOut;
}

export namespace CheckMeOut {
  export type AsObject = {
    name: string,
    age: number,
  }
}

