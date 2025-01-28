function task2(numbers) {
    if (!numbers.length) {
      return [];
    }
  
    function gcd(a, b) {
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    }
  
    let scm = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      scm = gcd(scm, numbers[i]);
    }
  
    return Array.from({ length: scm - 1 }, (_, i) => i + 2).filter(num => scm % num === 0);
  }