function Region(name, timezone) {
    this.name = name;
    this.timezone = timezone;
}
Region.prototype.getName = function () {
    return this.name;
};
Region.prototype.setName = function (value) {
    this.name = value;
};
Region.prototype.getTimezone = function () {
    return this.timezone;
};
module.exports = {
    Region: Region,
};
//# sourceMappingURL=region.js.map