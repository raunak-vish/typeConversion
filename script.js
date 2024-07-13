function convertText(type) {
    let inputText = document.getElementById('inputText').value;
    let outputText = '';
  
    switch(type) {
      case 'upper':
        outputText = convertToUpperCase(inputText);
        break;
      case 'lower':
        outputText = convertToLowerCase(inputText);
        break;
      case 'capitalize':
        outputText = capitalizeFirstLetter(inputText);
        break;
      case 'title':
        outputText = toTitleCase(inputText);
        break;
      case 'reverse':
        outputText = reverseString(inputText);
        break;
    }
  
    document.getElementById('outputText').textContent = outputText;
  }
  
  function checkPalindrome() {
    let inputText = document.getElementById('inputText').value;
    let isPalin = isPalindrome(inputText);
    document.getElementById('outputText').textContent = isPalin ? 'It is a palindrome' : 'It is not a palindrome';
  }
  
  // Utility functions (as defined above)
  function convertToUpperCase(text) {
    return text.toUpperCase();
  }
  
  function convertToLowerCase(text) {
    return text.toLowerCase();
  }
  
  function capitalizeFirstLetter(text) {
    return text.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  function toTitleCase(text) {
    return text.toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  
  function reverseString(text) {
    return text.split('').reverse().join('');
  }
  
  function isPalindrome(text) {
    let cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');
  }
  