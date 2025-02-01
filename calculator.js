// Create a module for adding, subtracting, and long division
const Calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  long_division: async (a, b, time = 1) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    await new Promise(resolve => setTimeout(resolve, time * 1000));
    return a / b;
  }
};

// Export the module
module.exports = Calculator;