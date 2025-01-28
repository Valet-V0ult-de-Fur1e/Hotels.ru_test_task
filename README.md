<h1>Решение тестовых заданий для стажировки в hostels.ru</h1>
<h2>Задачи на логику</h2>
<h3>1 Взвешивание монет</h3>
Задача 1. 
<pre>У вас есть восемь монет и одни весы с двумя чашами. Одна монета немного тяжелее остальных. Как за два взвешивания найти тяжелую монету?</pre>
<h3>Решение</h3>
 <pre>
1-е взвешивание
  1. Берём 6 монет из 8 и делим их на равные 2 кучки по 3 монеты и взвешиваем
2-е взвешивание (Так как нам известно, что одна монета тяжелее остальных, то)
  2.а если обе кучки на весах равны, то взвешиваем две оставшиеся => находим тяжёлую
  2.б если одна кучка стала перевешивать, то берём из неё 2 монеты и взвешиваем:
    1) если эти две монеты равны => оставшеяся нужная нам монета
    2) иначе искомой будет одна из взвешиваемых</pre>
<h3>2 Расставить числа 3-11 в квадрат 3 на 3 клетки</h3>
Задача 2. 
<pre>Есть числа от трех до одиннадцати. Есть квадрат — 3 на 3 клетки:
а б в
г д е
ё ж з
(Буквы ничего не значат, кроме того, что числа не повторяются)
Можно ли расставить числа в клетки квадрата таким образом, что перемножения чисел в строках дает тот же результат, что и произведение чисел в столбцах с теми же номерами?
Если можно — расставьте, если нельзя — объясните почему.</pre>
<h3>Решение</h3>
 <pre>
  Выписываем равенства, по которым будем распределять числа:
  а * б * в = а * г * ё
  г * д * е = б * д * ж
  ё * ж * з = в * е * з
  Делем обе части каждого выражения на посторяющиеся числа:
  а * б * в = а * г * ё | : а => б * в = г * ё
  г * д * е = б * д * ж | : д => г * е = б * ж
  ё * ж * з = в * е * з | : з => ё * ж = в * е
  Разбиваем каждое из чисел от 3 до 11 на простые множители:
  3  = 3
  4  = 2 * 2
  5  = 5
  6  = 2 * 3
  7  = 7
  8  = 2 * 2 * 2
  9  = 3 * 3 * 3
  10 = 2 * 5
  11 = 11
  Можно увидеть, что 7 и 11 точно должны быть на главной диагонали, ибо у других чисел нет таких множителей, 9 тоже должна быть на диагонали, из-за избыточного количества множителя 3. 
  Далее смотрим на числа 3, 4, 5, 6, 8, 10:
  3  = 3
  4  = 2 * 2
  5  = 5
  6  = 2 * 3
  8  = 2 * 2 * 2
  10 = 2 * 5
  Можно увидеть, что: 
  6 * 4 = 8 * 3 и 6 * 5 = 10 * 3 =>
  Получаем следующую матрицу:
  7  4  6
  8  9  5
  3  10 11
 </pre>
 <h3>Ответ</h3>
<pre>  
  7  4  6
  8  9  5
  3  10 11
</pre>
 <h3>3 Определяем прочность предметов</h3>
Задача 3.<pre>
 Ученые разработали новый материал неизвестной прочности. Они знают, что материал разбивается при падении с высоты от 1 метра до 5 000 метров. Но не знают, с какой именно высоты. Чтобы определить прочность, ученые поднимают предмет на некоторую высоту и сбрасывают его оттуда. Их задача — определить, начиная с какой именно высоты предмет начнет разбиваться. 
Специальная платформа, с помощью которой они осуществляют эксперимент, скидывает предмет только с дискретных высот (1, 2, 3 ... 4999, 5000 метров — платформа не может скинуть предмет, например, с 2,5 метров. Точности в 1 метр ученым вполне достаточно). При падении с высоты "n" метров предмет уничтожается. Если же его сбрасывали с высоты ниже "n", то его можно использовать в повторных экспериментах.
Нужно АБСОЛЮТНО ТОЧНО найти ту высоту, начиная с которой предметы разрушаются. Сделать это нужно за МИНИМАЛЬНО возможное число экспериментов. У ученых при этом всего 2 предмета, но они абсолютно одинаковые. Каким образом этого можно достигнуть? Сколько экспериментов при этом максимально потребуется?
</pre>
<h3>Решение</h3>
 <pre>
  Разобьём 5000 метров на интервалы длиной x
  Первым предметом найдём интервал, в котором он будет разбиваться, а вторым уже конкретную высоту с точностью до 1 метра:
  в худшем случае на поиск точности в метр понадобится x попыток, а для интервала 5000 // x (то есть деление 5000 на x нацело) => 
  представим искомое количество попыток как функцию от x => 
              f(x) = 5000 // x + x
  это не линейная функция => можно исследовать её для поиска точек экстремума => находим производную:
              f`(x) = 1 - 5000 // (x * x)
  приравниваем к 0 для поиска точек, подозрительных на экстремум:
              0 = 1 - 5000 // (x * x) => x * x = 5000 =>
              x1 = -71
              x2 = 71
f`(x) +           -            +
  ---------x1------------x2---------->x
f(x) возр       убыв          возр
  как можно увидеть при значении x2 = 71 и её окрестностях находится в точке минимума
min(f(x)) = f(71) = 5000 // 71 + 71 = 70 + 71 = 141 попыток
 </pre>
 <h3>Ответ</h3>
<pre>141 попыток</pre>
 <h3>4 Студенты покупают пирожки</h3>
Задача 4.<pre>
  В университетскую столовую пришли трое студентов купить пирожки. Один хочет купить треть всех имеющихся в столовой пирожков и еще 2 пирожка. Другой хочет купить четверть от всех имеющихся пирожков и ещё 3 пирожка. А третий хочет купить пятую часть всех пирожков и ещё 8 пирожков. Если все трое купят столько пирожков, сколько планируют, то в столовой как раз закончатся все пирожки. Сколько пирожков есть в столовой? 
</pre>
<h3>Решение</h3>
 <pre>
  Пусть х - количество пирожков всего
  Запишем количество пирожков для каждого студента:
  1-й => x/3 + 2
  2-й => x/4 + 3
  3-й => x/5 + 8
  1-й + 2-й + 3-й = x =>
  x/3 + 2 + x/4 + 3 + x/5 + 8 = x
  x/3 + x/4 + x/5 + 13 = x | 60
  20 * x + 15 * x + 12 * x + 780 = 60 * x
  47 * x + 780 = 60 * x
  60 * x - 47 * x = 780
  13 * x = 780 | : 13
  x = 60 пирожков
 </pre>
<h3>Ответ</h3>
<pre>60 пирожков</pre>
<h2>Задачи на программирование</h2>
<h3>1 Склонение слова компьютер</h3>
Задача 1. 
<pre>Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа. Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".</pre>
<h3>Решение</h3>
 <pre>
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
</pre>
<h3>2 Общие делители чисел</h3>
Задача 2. 
<pre>Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины. 
Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных числе. В примере это будет [2, 3, 6].</pre>
<h3>Решение</h3>
 <pre>
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
</pre>
<h3>3 Простые числа из диапазона</h3>
Задача 3. 
<pre>Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
Например, на вход переданы 2 числа: от 11 до 20  (диапазон считается включая граничные значения).
На выходе программа должна выдать [11, 13 , 17, 19]</pre>
<h3>Решение</h3>
 <pre>
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
</pre>
<h3>4 Таблица умножения</h3>
Задача 4. 
<pre>Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица.</pre>
<h3>Решение</h3>
 <pre>
  function task4(number) {
    process.stdout.write("  ");
    for (let i = 1; i <= number; i++) {
        process.stdout.write(` ${i.toString().padStart(2, ' ')} `);
    }
    console.log();
    for (let i = 1; i <= number; i++) {
        process.stdout.write(`${i.toString().padStart(2, ' ')} `);
        for (let j = 1; j <= number; j++) {
            process.stdout.write(`${(i * j).toString().padStart(2, ' ')} `);
        }
        console.log();
    }
  }
</pre>
