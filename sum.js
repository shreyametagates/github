function fact(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  
  const number = 5;
  const result = fact(number);
  console.log(`The fact of ${number} is: ${result}`);
