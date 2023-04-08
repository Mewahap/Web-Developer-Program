// Nomer 1
function compareNumbers(firstNumber, secondNumber) {
  if (secondNumber > firstNumber) {
    return true;
  } else if (firstNumber > secondNumber) {
    return false;
  } else {
    return -1;
  }
}

// // Contoh penggunaan fungsi:
console.log(compareNumbers(5, 8)); // Output: true
console.log(compareNumbers(5, 3)); // Output: false
console.log(compareNumbers(4, 4)); // Output: -1
console.log(compareNumbers(3, 3)); // Output: -1
console.log(compareNumbers(17, 2)); // Output: false

// Nomer 2
function urutHuruf(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

// Contoh penggunaan fungsi:
console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"));

// Nomer 3
function uruHuruf(text) {
  let sorted = "";
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[j] < text[i]) {
        let temp = text[i];
        text = text.substring(0, i) + text[j] + text.substring(i + 1, j) + temp + text.substring(j + 1);
      }
    }
    sorted += text[i];
  }
  return sorted;
}

Test cases
console.log(uruHuruf("HALO"));

// Nomer 4
function isArithmeticProgression(numbers) {
  const n = numbers.length;
  const diff = numbers[1] - numbers[0];

  for (let i = 1; i < n; i++) {
    if (numbers[i] - numbers[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}

// Contoh penggunaan fungsi:
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 4, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));

// Nomer 5
function threeStepsAB(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === "b" && j - i >= 3) {
          return true;
        }
      }
    } else if (str[i] === "b") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === "a" && j - i >= 3) {
          return true;
        }
      }
    }
  }

  return false;
}

// Contoh penggunaan fungsi:
console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));

// Nomer 6
function gcd(firstNumber, secondNumber) {
  let fpb = 1;
  for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      fpb = i;
    }
  }
  return fpb;
}

// Contoh penggunaan fungsi:
console.log(gcd(12, 16)); // Output: 4
console.log(gcd(50, 40)); // Output: 10
console.log(gcd(22, 99)); // Output: 10
console.log(gcd(24, 36)); // Output: 10
console.log(gcd(17, 23)); // Output: 10

// Nomer 7
function isPrime(number) {
  // Bilangan prima adalah bilangan bulat positif yang hanya bisa dibagi oleh 1 dan dirinya sendiri.
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Contoh penggunaan fungsi:
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));

// Nomer 8
function listPrima(angkaPertama, angkaKedua) {
  let bilanganPrima = [];
  for (let i = angkaPertama; i <= angkaKedua; i++) {
    if (i < 2) {
      continue; // abaikan bilangan < 2
    }
    let isPrima = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrima = false;
        break;
      }
    }
    if (isPrima) {
      bilanganPrima.push(i);
    }
  }
  return bilanganPrima;
}

// Contoh penggunaan fungsi:
console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));
