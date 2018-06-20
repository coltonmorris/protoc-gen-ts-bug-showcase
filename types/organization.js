function Organization(first, age) {
  this.first = first;
  this.age = age;
}

Organization.prototype.getFirst = function() {
  return this.first
}

Organization.prototype.setFirst = function(value) {
  this.first = value
}

Organization.prototype.getAge = function() {
  return this.age
}

Organization.prototype.getObject = function() {
  return { age: this.age, first: this.first }
}

var test = "testing123"

module.exports = {
  Organization,
  test
}
