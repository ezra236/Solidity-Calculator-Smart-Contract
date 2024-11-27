// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    int private result;

    // Constructor
    constructor() {
        result = 0;
    }

    // Add function
    function add(int a, int b) public returns (int) {
        result = a + b;
        return result;
    }

    // Subtract function
    function subtract(int a, int b) public returns (int) {
        result = a - b;
        return result;
    }

    // Multiply function
    function multiply(int a, int b) public returns (int) {
        result = a * b;
        return result;
    }

    // Divide function
    function divide(int a, int b) public returns (int) {
        require(b != 0, "Division by zero");
        result = a / b;
        return result;
    }

    // View the result
    function getResult() public view returns (int) {
        return result;
    }
}
