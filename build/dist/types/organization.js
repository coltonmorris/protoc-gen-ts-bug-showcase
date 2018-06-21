function Organization(first, age) {
    this.first = first;
    this.age = age;
}
Organization.prototype.getFirst = function () {
    return this.first;
};
Organization.prototype.setFirst = function (value) {
    this.first = value;
};
Organization.prototype.getAge = function () {
    return this.age;
};
var test = "testing123";
module.exports = {
    Organization: Organization,
    test: test
};
//# sourceMappingURL=organization.js.map