// index.js

// Function to append characters to the input bar
function appendCharacter(character) {
    const inputBar = document.getElementById('bar');
    inputBar.value += character;
  }
  
  // Function to clear the input bar
  function clearall() {
    const inputBar = document.getElementById('bar');
    inputBar.value = '';
  }
  
  // Function to delete the last character from the input bar
  function clearLast() {
    const inputBar = document.getElementById('bar');
    inputBar.value = inputBar.value.slice(0, -1);
  }
  
  // Function to calculate the result
// Function to calculate the result using math.js library
function calculate() {
    const inputBar = document.getElementById('bar');
    try {
      inputBar.value = math.evaluate(inputBar.value);
    } catch (error) {
      inputBar.value = 'Error';
    }
  }
  
  