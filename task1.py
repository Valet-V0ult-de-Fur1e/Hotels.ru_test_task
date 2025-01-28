def task1(number:int)->str:
    computer_word_end = ""
    if number % 10 == 1 and number % 100 != 11:
       computer_word_end = ""
    elif 2 <= number % 10 <= 4 and not (12 <= number % 100 <= 14):
       computer_word_end = "а"
    else:
       computer_word_end = "ов"
    return f"{number} компьютер{computer_word_end}"