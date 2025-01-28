function task3(startNumber, endNumber) {
    function isPrime(num) {
      for (let div = 2; div <= Math.sqrt(num); div++) {
        if (num % div === 0) {
          return false;
        }
      }
      return true;
    }
    return Array.from({ length: endNumber - startNumber + 1 }, (_, i) => startNumber + i).filter(number => number > 0 && isPrime(number));
  }