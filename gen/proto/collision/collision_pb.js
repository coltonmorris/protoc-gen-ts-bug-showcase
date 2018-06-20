/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_collision_external_pb = require('../../proto/collision/external_pb.js');
goog.exportSymbol('proto.A.B.ChildCollision', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.A.B.ChildCollision = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.A.B.ChildCollision.repeatedFields_, null);
};
goog.inherits(proto.A.B.ChildCollision, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.A.B.ChildCollision.displayName = 'proto.A.B.ChildCollision';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.A.B.ChildCollision.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.A.B.ChildCollision.prototype.toObject = function(opt_includeInstance) {
  return proto.A.B.ChildCollision.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.A.B.ChildCollision} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.A.B.ChildCollision.toObject = function(includeInstance, msg) {
  var f, obj = {
    oopsList: jspb.Message.toObjectList(msg.getOopsList(),
    proto_collision_external_pb.Collider.toObject, includeInstance),
    hello: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bingo: (f = msg.getBingo()) && proto_collision_external_pb.CheckMeOut.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.A.B.ChildCollision}
 */
proto.A.B.ChildCollision.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.A.B.ChildCollision;
  return proto.A.B.ChildCollision.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.A.B.ChildCollision} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.A.B.ChildCollision}
 */
proto.A.B.ChildCollision.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_collision_external_pb.Collider;
      reader.readMessage(value,proto_collision_external_pb.Collider.deserializeBinaryFromReader);
      msg.addOops(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHello(value);
      break;
    case 3:
      var value = new proto_collision_external_pb.CheckMeOut;
      reader.readMessage(value,proto_collision_external_pb.CheckMeOut.deserializeBinaryFromReader);
      msg.setBingo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.A.B.ChildCollision.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.A.B.ChildCollision.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.A.B.ChildCollision} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.A.B.ChildCollision.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_collision_external_pb.Collider.serializeBinaryToWriter
    );
  }
  f = message.getHello();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBingo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_collision_external_pb.CheckMeOut.serializeBinaryToWriter
    );
  }
};


/**
 * repeated C.D.Collider oops = 1;
 * @return {!Array.<!proto.C.D.Collider>}
 */
proto.A.B.ChildCollision.prototype.getOopsList = function() {
  return /** @type{!Array.<!proto.C.D.Collider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_collision_external_pb.Collider, 1));
};


/** @param {!Array.<!proto.C.D.Collider>} value */
proto.A.B.ChildCollision.prototype.setOopsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.C.D.Collider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.C.D.Collider}
 */
proto.A.B.ChildCollision.prototype.addOops = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.C.D.Collider, opt_index);
};


proto.A.B.ChildCollision.prototype.clearOopsList = function() {
  this.setOopsList([]);
};


/**
 * optional string hello = 2;
 * @return {string}
 */
proto.A.B.ChildCollision.prototype.getHello = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.A.B.ChildCollision.prototype.setHello = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional C.D.CheckMeOut bingo = 3;
 * @return {?proto.C.D.CheckMeOut}
 */
proto.A.B.ChildCollision.prototype.getBingo = function() {
  return /** @type{?proto.C.D.CheckMeOut} */ (
    jspb.Message.getWrapperField(this, proto_collision_external_pb.CheckMeOut, 3));
};


/** @param {?proto.C.D.CheckMeOut|undefined} value */
proto.A.B.ChildCollision.prototype.setBingo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.A.B.ChildCollision.prototype.clearBingo = function() {
  this.setBingo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.A.B.ChildCollision.prototype.hasBingo = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.A.B);
