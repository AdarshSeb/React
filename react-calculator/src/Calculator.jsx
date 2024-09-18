import React, { useState, useEffect, useRef } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState(''); // Holds the current input value
  const [previousInput, setPreviousInput] = useState(''); // Holds the previous input and operator
  const [error, setError] = useState(''); // Error message
  const [operatorClicked, setOperatorClicked] = useState(false); // Flag to manage operator input
  const inputRef = useRef(null); // Ref to the input field

  const handleClick = (value) => {
    if (operatorClicked) {
      setInput(value);
      setOperatorClicked(false);
    } else {
      setInput((prev) => prev + value);
    }
    setError('');
    inputRef.current.focus(); // Focus the input field
  };

  const handleDecimal = () => {
    setError('');
    const lastNumber = input.split(/[\+\-\*\/%]/).pop();
    if (!lastNumber.includes('.')) {
      setInput((prev) => prev + '.');
    }
    inputRef.current.focus(); // Focus the input field
  };

  const handleClear = () => {
    setInput('');
    setPreviousInput('');
    setError('');
    setOperatorClicked(false);
    inputRef.current.focus(); // Focus the input field
  };

  // const handleCalculate = () => {
  //   try {
  //     // Ensure input string is valid
  //     const trimmedInput = input.trim();
  //     if (!trimmedInput) throw new Error('Empty input');

  //     // Combine previous input and current input for evaluation
  //     let fullExpression = previousInput + trimmedInput;

  //     // Replace modulo operator % with JavaScript's % symbol for evaluation
  //     fullExpression = fullExpression.replace(/(\d+)%/g, (_, num) => `${num} %`);

  //     const result = evaluate(fullExpression);

  //     if (isNaN(result) || result === Infinity) {
  //       throw new Error('Invalid calculation');
  //     }

  //     // Format the result with commas
  //     const formattedResult = new Intl.NumberFormat().format(result);

  //     setPreviousInput(""); // Hide operands/operators
  //     setInput(formattedResult);
  //     setOperatorClicked(false);
  //     inputRef.current.focus(); // Focus the input field
  //   } catch {
  //     setError('Error: Invalid Input');
  //     inputRef.current.focus(); // Focus the input field
  //   }
  // };

  // const handleOperator = (operator) => {
  //   if (input === '' || operatorClicked) return; 
  //   // Prevent adding operator if no input or operator already clicked
  //   // Handle special case for modulo operator
  //   const op = operator === '%' ? '%' : ` ${operator} `;
  //   setPreviousInput(input + op);
  //   setInput('');
  //   setOperatorClicked(true);
  //   setError('');
  //   inputRef.current.focus(); // Focus the input field
  // };

  const handleOperator = (operator) => {
    // Allow '-' or '+' at the start of input for negative/positive numbers
    if (input === '' && (operator === '-' || operator === '+')) {
      setInput(operator); // Set the operator as the first character
      setOperatorClicked(false); // Allow further number input
      inputRef.current.focus(); // Focus the input field
      return;
    }
  
    // Prevent adding operator if no input or operator already clicked
    if (input === '' || operatorClicked) return;
  
    const op = operator === '%' ? '%' : ` ${operator} `;
    setPreviousInput(input + op);
    setInput('');
    setOperatorClicked(true);
    setError('');
    inputRef.current.focus(); // Focus the input field
  };

  // const handleCalculate = () => {
  //   try {
  //     const trimmedInput = input.trim();
  
  //     // Check if input starts with '-' or '+', combine with previous input if necessary
  //     let fullExpression = previousInput + trimmedInput;
  
  //     // Replace modulo operator % with JavaScript's % symbol for evaluation
  //     fullExpression = fullExpression.replace(/(\d+)%/g, (_, num) => `${num} %`);
  
  //     // Evaluate the expression
  //     const result = evaluate(fullExpression);
  
  //     if (isNaN(result) || result === Infinity) {
  //       throw new Error('Invalid calculation');
  //     }
  
  //     // Format the result with commas
  //     const formattedResult = new Intl.NumberFormat().format(result);
  
  //     setPreviousInput(""); // Hide operands/operators
  //     setInput(formattedResult);
  //     setOperatorClicked(false);
  //     inputRef.current.focus(); // Focus the input field
  //   } catch {
  //     setError('Error: Invalid Input');
  //     inputRef.current.focus(); // Focus the input field
  //   }
  // };

  const handleCalculate = () => {
    try {
      const trimmedInput = input.trim();
      
      // Combine previous input and current input for evaluation
      let fullExpression = previousInput + trimmedInput;
  
      // Replace modulo operator % with JavaScript's % symbol for evaluation
      fullExpression = fullExpression.replace(/(\d+)%/g, (_, num) => `${num} %`);
  
      // Check for division by zero
      if (fullExpression.includes('/0')) {
        throw new Error('Division by zero');
      }
  
      const result = evaluate(fullExpression);
  
      if (isNaN(result) || result === Infinity) {
        throw new Error('Invalid calculation');
      }
  
      // Format the result with commas
      const formattedResult = new Intl.NumberFormat().format(result);
  
      setPreviousInput(''); // Hide operands/operators
      setInput(formattedResult);
      setOperatorClicked(false);
      inputRef.current.focus(); // Focus the input field
    } catch (error) {
      if (error.message === 'Division by zero') {
        setError('Error: Division by zero');
      } else {
        setError('Error: Invalid Input');
      }
      inputRef.current.focus(); // Focus the input field
    }
  };
  
  
  

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    inputRef.current.focus(); // Focus the input field
  };

  const handleKeyPress = (event) => {
    if (event.key >= '0' && event.key <= '9') {
      handleClick(event.key);
    } else if (event.key === '+') {
      handleOperator('+');
    } else if (event.key === '-') {
      handleOperator('-');
    } else if (event.key === '/') {
      handleOperator('/');
    } else if (event.key === '*') {
      handleOperator('*');
    } else if (event.key === '%') {
      handleOperator('%');
    } else if (event.key === '.') {
      handleDecimal();
    } else if (event.key === 'Enter') {
      handleCalculate();
    } else if (event.key === 'Backspace') {
      handleDelete();
    } else if (event.key === 'Escape') {
      handleClear();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input, operatorClicked]);

  useEffect(() => {
    inputRef.current.focus(); // Focus the input field when the component mounts
  }, []);

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className={`previous-input ${operatorClicked ? 'small' : ''}`}>{previousInput}</div>
          <div className={`current-input ${operatorClicked ? 'big' : ''}`} ref={inputRef}>{input || '0'}</div>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="buttons">
          {/* Numerical Buttons */}
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleOperator('/')}>/</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleOperator('*')}>*</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleOperator('-')}>-</button>

          {/* Fourth row: 0, decimal, %, and + */}
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleDecimal}>.</button>
          <button onClick={() => handleOperator('%')}>%</button>
          <button onClick={() => handleOperator('+')}>+</button>

          {/* Fifth row: =, C, Del */}
          <button className="equals-button" onClick={handleCalculate}>=</button>
          <button className="last-row-button" onClick={handleClear}>C</button>
          <button className="last-row-button" onClick={handleDelete}>Del</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
