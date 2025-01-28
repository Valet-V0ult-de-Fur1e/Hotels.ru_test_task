def task3(start_number:int, end_number:int)->list:
    def is_prime(num):
        for div in range(2, int(num ** 0.5) + 1):
            if num % div == 0:
                return False
        return True
    return [number for number in range(start_number, end_number + 1) if number > 0 and is_prime(number)]