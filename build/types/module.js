function Organization(first, age) {
    this.first = first;
    this.age = age;
}
Organization.prototype.getFirst = function () {
    return this.first;
};
Organization.prototype.getAge = function () {
    return this.age;
};
var org = new Organization("colton", 23);
var test = "testing123";
module.exports = {
    org: org,
    test: test
};
//# sourceMappingURL=module.js.map