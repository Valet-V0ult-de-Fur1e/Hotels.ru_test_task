def task4(number):
    print("  ", end=" ")
    for i in range(1, number + 1):
        print(f"{i:2}", end=" ")
    print()
    for i in range(1, number + 1):
        print(f"{i:2}", end=" ")
        for j in range(1, number + 1):
            print(f"{(i * j):2}", end=" ")
        print()