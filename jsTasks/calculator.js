let calculator = {
  // prompts for two values and saves them as object properties with names a and b respectively.
  read() {
    this.a_value = +prompt("Enter first value", '');
    this.b_value = +prompt("Enter second value", '');

  },
  // returns the sum of saved values.
  sum() {
    return this.a_value + this.b_value;

  },
  // multiplies saved values and returns the result.
  mul() {
        return this.a_value * this.b_value;

  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );