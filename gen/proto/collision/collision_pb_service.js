// package: A.B
// file: proto/collision/collision.proto

var proto_collision_collision_pb = require("../../proto/collision/collision_pb");
var grpc = require("grpc-web-client").grpc;

var Service2 = (function () {
  function Service2() {}
  Service2.serviceName = "A.B.Service2";
  return Service2;
}());

Service2.Collide = {
  methodName: "Collide",
  service: Service2,
  requestStream: false,
  responseStream: false,
  requestType: proto_collision_collision_pb.ChildCollision,
  responseType: proto_collision_collision_pb.ChildCollision
};

exports.Service2 = Service2;

function Service2Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

Service2Client.prototype.collide = function collide(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Service2.Collide, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.Service2Client = Service2Client;

