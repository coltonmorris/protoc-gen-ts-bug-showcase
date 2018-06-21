var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
// import * as types from '../aggregate/types';
// import * as services from '../aggregate/services';
// import * as actions from '../aggregate/actions';
// import * as both from '../aggregate/both';
import * as aggy from '../aggregate/aggregate';
// import * as custom from '../types/module';
console.log('aggy: ', Object.keys(aggy));
var org = new aggy['org']['Organization']();
org.setFirst("tcn");
console.log("org name: ", org.getFirst());
console.log("eq instanceof: ", org instanceof aggy.billing.Region);
var reg = new aggy.billing.Region();
reg.setName("tcn");
console.log("reg name: ", reg.getName());
console.log("eq instanceof: ", reg instanceof aggy.billing.Region);
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(props) {
        return _super.call(this, props) || this;
    }
    Test.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, " Check the Console ")));
    };
    return Test;
}(React.Component));
export default Test;
//# sourceMappingURL=test.js.map