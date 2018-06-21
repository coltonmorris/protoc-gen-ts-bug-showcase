import * as orphan_pb_service from '../gen/proto/orphan_pb_service';
import * as simple_service_pb_service from '../gen/proto/examplecom/simple_service_pb_service';

export namespace orphan {
  export var services = {
    ...orphan_pb_service,
    ...simple_service_pb_service,
  };
}
