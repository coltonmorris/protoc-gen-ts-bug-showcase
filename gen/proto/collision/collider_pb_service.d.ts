// package: A.B
// file: proto/collision/collider.proto

import * as proto_collision_collider_pb from "../../proto/collision/collider_pb";
import {grpc} from "grpc-web-client";

type Service1Collide = {
  readonly methodName: string;
  readonly service: typeof Service1;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_collision_collider_pb.Collider;
  readonly responseType: typeof proto_collision_collider_pb.Collider;
};

export class Service1 {
  static readonly serviceName: string;
  static readonly Collide: Service1Collide;
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

export class Service1Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  collide(
    requestMessage: proto_collision_collider_pb.Collider,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: proto_collision_collider_pb.Collider|null) => void
  ): void;
  collide(
    requestMessage: proto_collision_collider_pb.Collider,
    callback: (error: ServiceError, responseMessage: proto_collision_collider_pb.Collider|null) => void
  ): void;
}

