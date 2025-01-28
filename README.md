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
  
 </pre>
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
  x = 60
 </pre>
<h3>Ответ</h3>
<pre>x = 60</pre>
