// package: A.B
// file: proto/collision/collision.proto

import * as proto_collision_collision_pb from "../../proto/collision/collision_pb";
import {grpc} from "grpc-web-client";

type Service2Collide = {
  readonly methodName: string;
  readonly service: typeof Service2;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_collision_collision_pb.ChildCollision;
  readonly responseType: typeof proto_collision_collision_pb.ChildCollision;
};

export class Service2 {
  static readonly serviceName: string;
  static readonly Collide: Service2Collide;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class Service2Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  collide(
    requestMessage: proto_collision_collision_pb.ChildCollision,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: proto_collision_collision_pb.ChildCollision|null) => void
  ): void;
  collide(
    requestMessage: proto_collision_collision_pb.ChildCollision,
    callback: (error: ServiceError, responseMessage: proto_collision_collision_pb.ChildCollision|null) => void
  ): void;
}

