// package: A.B
// file: proto/collision/collider.proto

var proto_collision_collider_pb = require("../../proto/collision/collider_pb");
var grpc = require("grpc-web-client").grpc;

var Service1 = (function () {
  function Service1() {}
  Service1.serviceName = "A.B.Service1";
  return Service1;
}());

Service1.Collide = {
  methodName: "Collide",
  service: Service1,
  requestStream: false,
  responseStream: false,
  requestType: proto_collision_collider_pb.Collider,
  responseType: proto_collision_collider_pb.Collider
};

exports.Service1 = Service1;

function Service1Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

Service1Client.prototype.collide = function collide(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Service1.Collide, {
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

exports.Service1Client = Service1Client;

