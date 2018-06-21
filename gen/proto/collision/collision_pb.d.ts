// package: A.B
// file: proto/collision/collision.proto

import * as jspb from "google-protobuf";
import * as proto_collision_external_pb from "../../proto/collision/external_pb";

export class ChildCollision extends jspb.Message {
  clearOopsList(): void;
  getOopsList(): Array<proto_collision_external_pb.Collider>;
  setOopsList(value: Array<proto_collision_external_pb.Collider>): void;
  addOops(value?: proto_collision_external_pb.Collider, index?: number): proto_collision_external_pb.Collider;

  getHello(): string;
  setHello(value: string): void;

  hasBingo(): boolean;
  clearBingo(): void;
  getBingo(): proto_collision_external_pb.CheckMeOut | undefined;
  setBingo(value?: proto_collision_external_pb.CheckMeOut): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildCollision.AsObject;
  static toObject(includeInstance: boolean, msg: ChildCollision): ChildCollision.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChildCollision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildCollision;
  static deserializeBinaryFromReader(message: ChildCollision, reader: jspb.BinaryReader): ChildCollision;
}

export namespace ChildCollision {
  export type AsObject = {
    oopsList: Array<proto_collision_external_pb.Collider.AsObject>,
    hello: string,
    bingo?: proto_collision_external_pb.CheckMeOut.AsObject,
  }
}

