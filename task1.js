function task1(number) {
    let computerWordEnd = "";
    if (number % 10 === 1 && number % 100 !== 11) {
      computerWordEnd = "";
    } else if (2 <= number % 10 && number % 10 <= 4 && !(12 <= number % 100 && number % 100 <= 14)) {
      computerWordEnd = "a";
    } else {
      computerWordEnd = "ов";
    }
    return `${number} компьютер${computerWordEnd}`;
  }