var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// const set = require('lodash/set');
import * as _ from 'lodash';
// export var api = {
//   v0alpha: {
//     Org: {}
//   }
// }
export var idk = "idk";
// TODO
_.set(module.exports, 'api.v0alpha.Org', {});
_.set(module.exports, 'api', __assign({}, module.exports.api, { name: "colton", age: 23, log: function (i) { console.log(i); } }));
_.set(module.exports, 'api.v0alpha.Org', __assign({}, module.exports.api.v0alpha.Org, { name: "org", org: function () { return ("Hello Org"); } }));
_.set(module.exports, 'api.v0alpha.Org', __assign({}, module.exports.api.v0alpha.Org, { name2: "org", org2: function () { return ("Hello Org2"); } }));
//# sourceMappingURL=actions.js.map