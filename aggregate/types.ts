import * as orphan_in from '../gen/proto/orphan_pb';
import * as empty_message_no_service from '../gen/proto/examplecom/empty_message_no_service_pb';
import * as enum_message from '../gen/proto/examplecom/enum_message_pb';
import * as map_message from '../gen/proto/examplecom/map_message_pb';
import * as oneof_message from '../gen/proto/examplecom/oneof_message_pb';
import * as parent_message_v2 from '../gen/proto/examplecom/parent_message_v2_pb';
import * as parent_message_v3 from '../gen/proto/examplecom/parent_message_v3_pb';
import * as primitive_message_v2 from '../gen/proto/examplecom/primitive_message_v2_pb';
import * as primitive_message_v3 from '../gen/proto/examplecom/primitive_message_v3_pb';
import * as repeated_primitive_message from '../gen/proto/examplecom/repeated_primitive_message_pb';
import * as reserved_words from '../gen/proto/examplecom/reserved_words_pb';
import * as simple from '../gen/proto/examplecom/simple_pb';
import * as simple_service from '../gen/proto/examplecom/simple_service_pb';
import * as simplevalue from '../gen/proto/examplecom/simplevalue_pb';
import * as well_known_message from '../gen/proto/examplecom/well_known_message_pb';
import * as external_child_message from '../gen/proto/othercom/external_child_message_pb';
import * as external_enum from '../gen/proto/othercom/external_enum_pb';

export namespace orphan {
  export var types = {
    ...orphan_in,
    ...empty_message_no_service,
    ...enum_message,
    ...map_message,
    ...oneof_message,
    ...parent_message_v2,
    ...parent_message_v3,
    ...primitive_message_v2,
    ...primitive_message_v3,
    ...repeated_primitive_message,
    ...reserved_words,
    ...simple,
    ...simple_service,
    ...simplevalue,
    ...well_known_message,
    ...external_child_message,
    ...external_enum,
  };
}
