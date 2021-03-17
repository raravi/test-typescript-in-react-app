function Counter() {
  this.count = 0;
}

Counter.prototype.getCounter = function () {
  return this.count;
};

Counter.prototype.setCounter = function (counter) {
  this.count = counter;
};

Counter.prototype.incrementCounter = function () {
  this.count++;
};

export { Counter };