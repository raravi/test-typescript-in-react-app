type CounterType = {
  count: number;
};

function Counter(this: CounterType) {
  this.count = 0;
}

Counter.prototype.getCounter = function () {
  return this.count;
};

Counter.prototype.setCounter = function (counter: number) {
  this.count = counter;
};

Counter.prototype.incrementCounter = function () {
  this.count++;
};

export { Counter };