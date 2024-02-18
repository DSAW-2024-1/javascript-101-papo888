// Sum of Two Numbers
function sum(a, b) {
  if(typeof a !== "number" || typeof b !== "number")
  {
    console.log("Los datos ingresados no son los adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if(typeof n !== "number" || !Number.isInteger(n) || n<0)
  {
    console.log("Los datos ingresados no son los adecuados");
    return;
  }
  if(n == 0 || n == 1)
  {
    return 1;
  }
  let numero = 1;
  for(let i =2; i<= n; i++)
  {
    numero *= i;
  }
  return numero;
}

// Find the Largest Number
function findLargest(arr) {
  if(arr.length === 0 || !Array.isArray(arr) || !arr.every(num => typeof num == "number"))
  {
    console.log("Los datos ingresados no son los adecuados");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if(typeof str !== "string")
  {
    console.log("Los datos ingresados no son los adecuados");
    return;
  }
  const vocales = str.match(/[aeiou]/gi);
  return vocales ? vocales.length: 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if(typeof n !== "number" || !Number.isInteger(n) || n<= 1)
  {
    console.log("Los datos ingresados no son los adecuados");
    return;
  }
  if (n===2)
  {
    return true;
  }
  if(n % 2 ===0)
  {
    return false;
  }
  let i = 3;
  while (i <= Math.sqrt(n))
  {
    if (n % i === 0)
    {
      return false;
    }
    i += 2;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
}