<h1>Решение тестовых заданий для стажировки в hostels.ru</h1>
<h2>Задачи на логику</h2>
<h3>1 Взвешивание монет</h3>
Задача 1. У вас есть восемь монет и одни весы с двумя чашами. Одна монета немного тяжелее остальных. Как за два взвешивания найти тяжелую монету?
<h3>Решение</h3>
 <pre>
1-е взвешивание
  1. Берём 6 монет из 8 и делим их на равные 2 кучки по 3 монеты и взвешиваем
2-е взвешивание (Так как нам известно, что одна монета тяжелее остальных, то)
  2.а если обе кучки на весах равны, то взвешиваем две оставшиеся => находим тяжёлую
  2.б если одна кучка стала перевешивать, то берём из неё 2 монеты и взвешиваем:
    1) если эти две монеты равны => оставшеяся нужная нам монета
    2) иначе искомой будет одна из взвешиваемых
 </pre>
