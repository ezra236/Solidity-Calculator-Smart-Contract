const Calculator = artifacts.require("Calculator");

contract("Calculator", accounts => {
  let calculator;

  // Before each test, deploy a new instance of the contract
  beforeEach(async () => {
    calculator = await Calculator.new();
  });

  it("should initialize result to 0", async () => {
    const result = await calculator.getResult();
    assert.equal(result.toString(), "0", "Initial result should be 0");
  });

  it("should add two numbers correctly", async () => {
    await calculator.add(10, 5);
    const result = await calculator.getResult();
    assert.equal(result.toString(), "15", "10 + 5 should equal 15");
  });

  it("should subtract two numbers correctly", async () => {
    await calculator.subtract(10, 5);
    const result = await calculator.getResult();
    assert.equal(result.toString(), "5", "10 - 5 should equal 5");
  });

  it("should multiply two numbers correctly", async () => {
    await calculator.multiply(10, 5);
    const result = await calculator.getResult();
    assert.equal(result.toString(), "50", "10 * 5 should equal 50");
  });

  it("should divide two numbers correctly", async () => {
    await calculator.divide(10, 5);
    const result = await calculator.getResult();
    assert.equal(result.toString(), "2", "10 / 5 should equal 2");
  });

  it("should throw error when dividing by 0", async () => {
    try {
      await calculator.divide(10, 0);
      assert.fail("The contract should throw an error when dividing by 0");
    } catch (error) {
      assert(error.message.includes("Division by zero"), "Error message should contain 'Division by zero'");
    }
  });
});
