function Accumulator (startingValue) {
  this.value = startingValue;
  // this.startingValue;
  this.read = function() {
    this.value = +prompt("enter a value", "") + this.value;
    // this.value =+ startingValue;
  }
  
}

let accumulator = new Accumulator(2); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values