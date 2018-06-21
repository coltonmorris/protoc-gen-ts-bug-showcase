var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as orphan_pb_service from '../gen/proto/orphan_pb_service';
import * as simple_service_pb_service from '../gen/proto/examplecom/simple_service_pb_service';
export var orphan;
(function (orphan) {
    orphan.services = __assign({}, orphan_pb_service, simple_service_pb_service);
})(orphan || (orphan = {}));
//# sourceMappingURL=services.js.map