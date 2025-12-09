function Calculator () {
  this.read = function() {
    this.a_value = +prompt("enter a value", "0");
    this.b_value = +prompt("enter b value", "0");
  }
  this.sum = function() {
    return this.a_value + this.b_value;
  }
  this.mul = function() {
    return this.a_value * this.b_value;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );