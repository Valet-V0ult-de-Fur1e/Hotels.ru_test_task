def task2(numbers:list)->list:
    if not numbers:
      return []

    def gcd(a, b):
        while b:
            a, b = b, a % b
        return a
    
    scm = numbers[0]
    for number in numbers[1:]:
        scm = gcd(scm, number)

    return [ num for num in range(2, scm + 1) if scm % num == 0]