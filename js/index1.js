// модуль 2

// задача 1
// function checkAge(age) {
//     if (age>=18) { // Дополни эту строку
//       return 'Вы совершеннолетний человек';
//     }
  
//     return 'Вы не совершеннолетний человек';
//   }


// задача 2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     // Пиши код ниже этой строки
    
  
//     if (password === ADMIN_PASSWORD) {
//       return  'Добро пожаловать!';
      
   
//     }
  
//     return 'Доступ запрещен, неверный пароль!';
//     // Пиши код выше этой строки
//   }

// задача 3

//   function checkStorage(available, ordered) {
//     // Пиши код ниже этой строки
    
  
//     if (ordered === 0) {
//       return  'В заказе еще нет товаров';
//     } 
//     if (ordered > available) {
//       return 'Слишком большой заказ, на складе недостаточно товаров!';
//     }
//       return 'Заказ оформлен, с вами свяжется менеджер';
  
//     // Пиши код выше этой строки
//   }

// задача 4
    // Пиши код ниже этой строки
// const fruits =['яблоко', 'слива', 'груша','апельсин'];

// задача 5
// Стартовый код
// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement =fruits[0];
// const secondElement =fruits[1];
// const lastElement =fruits[3];


// задача 6
// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1]='персик';
// fruits[3]='банан';


// задача 7
//     // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;

// задача 8

// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex =fruits.length -1;
// const lastElement = fruits[lastElementIndex] ;



// задача 9
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     return [array[0], array[array.length - 1]]



//     // Пиши код выше этой строки
//   }
// задача 10
// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки
//     words = message.split(delimeter);
    
    
//     // Пиши код выше этой строки
//     return words;
//   }
// задача 11
// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки
    
//     let words;
//   words = message.split(' ');
//     let array = words.length;
//     let sum = pricePerWord * array;
//     return sum;
//     // Пиши код выше этой строки
//   }

// задача 12

// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Пиши код ниже этой строки
   
//     string = array.join(delimeter);
   
//     // Пиши код выше этой строки
//     return string;
//   }

// задача 13 
// function slugify(title) {
//     // Пиши код ниже этой строки
//    let slug1 = title.toLowerCase().split(' ').join('-');
    
    
//     return slug1;
   
//     // Пиши код выше этой строки
//   }
//   console.log(slug1);
// задача 14
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1,4) ;
// const lastThreeEls = fruits.slice(2,5);


// задача 15
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients =oldClients.concat(newClients) ; // Дополни эту строку

// задача 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// Тесты
// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3) возвращает ['Манго', 'Поли', 'Аякс'].
// Вызов makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4) возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// Вызов makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3) возвращает ['Манго', 'Аякс', 'Челси'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2) возвращает ['Земля', 'Юпитер'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4) возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0) возвращает [].
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив.
    
 
 
  
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// const newArray = firstArray.concat(secondArray); 
//   if (newArray.length > maxLength) {
//     return newArray.slice(0,maxLength)
//   }
// return newArray;    
//     // Пиши код выше этой строки
//   }


// задача 17
// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i += 1 ) { // Дополни эту строку
//   console.log(i);
// }


// Задание
// Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне от start до end включительно. Дополни тело функции так, чтобы она работала правильно.

// Тесты
// Объявлена переменная start.
// Значение переменной start это число 3.
// Объявлена переменная end.
// Значение переменной end это число 7.
// Объявлена переменная i - счётчик цикла.
// Начальное значение переменной i равно 3.
// Условие цикла приводится к true до тех пор, пока i меньше либо равно 7.
// На каждой итерации значение переменной i увеличивается на единицу.
// Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7.

// задача 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// Тесты
// Объявлена функция calculateTotal(number).
// Вызов функции calculateTotal(1) возвращает 1.
// Вызов функции calculateTotal(3) возвращает 6.
// Вызов функции calculateTotal(7) возвращает 28.
// Вызов функции calculateTotal(18) возвращает 171.
// Вызов функции calculateTotal(24) возвращает 300.
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение.




// function calculateTotal(number) {
//     // Пиши код ниже этой строки
  
//   let sum = 0;
//   for (let i = 1; i <=number; i+=1) {
//   sum +=i;
//   }
    
//   return sum;
//     // Пиши код выше этой строки
//   }
  


// задача 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// Тесты
// Объявлена переменная fruits.
// Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин'].
// Объявлена переменная i - счётчик цикла.
// Начальное значение переменной i равно 0.
// Условие цикла приводится к true до тех пор, пока i меньше 4.
// На каждой итерации значение переменной i увеличивается на единицу.
// В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива.
// В теле цикла for используется вывод в консоль переменной fruit.






// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i <fruits.length;i +=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }
// задача 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение.




// function calculateTotalPrice(order) {
//     let total = 0;
//     // Пиши код ниже этой строки
//   for (const value of order) {
//     total +=value;
//   }
//     // Пиши код выше этой строки
//     return total;
//   }

// задача 21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.


// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let arr = string.split(' ');
//    let countLetters = [];

//     for (let i=0; i < arr.length; i += 1) {
//         countLetters.splice(arr.length - 1, 0, arr[i].length);
//     }
//    let maxCountLetters = Math.max(...countLetters);
//   let maxCountLettersIndex = countLetters.indexOf(maxCountLetters);
//   return arr[maxCountLettersIndex];

//   // Пиши код выше этой строки
// }


// задача 22
// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Тесты
// Объявлена функция createArrayOfNumbers(min, max).
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3].
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17].
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34].
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив.
// В цикле for использовался метод push.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Пиши код ниже этой строки
//   for (let i = min; i<= max; i+=1) {
//     numbers.push(i);
//   }
//     // Пиши код выше этой строки
//     return numbers;
//   }
// задача 23 
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// Тесты
// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// В цикле for использовался метод push.



// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//   const array = [];
//     for (let i = 0; i < numbers.length; i+=1) {
     
//       if ( numbers[i] > value) {
//        array.push(numbers[i]); }
//     }  
//     return array;
//     // Пиши код выше этой строки
//   }



// задача 24 
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.
// Вызов checkFruit('груша') возвращает true.
// Вызов checkFruit('Груша') возвращает false.
// Вызов checkFruit('яблоко') возвращает true.
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean.
// В функции использовался метод includes.


// function checkFruit(fruit) {
//     const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  
//     return fruits.includes(fruit) ; // Дополни эту строку
//   }


// задача 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив.
// В цикле for использовались методы includes и push.

// function getCommonElements(array1, array2) {
//     // Пиши код ниже этой строки
//   const newElement=[];
//     for (const number of array1) {
//       if(array2.includes(number)) {
//         newElement.push(number)
//       }
//     }
//   return newElement; 
//     // Пиши код выше этой строки
//   }
// задача 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму.

// for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }


// function calculateTotalPrice(order) {
//   let total = 0;
//   for ( order of order) {
//     total += order;
//   }
//   return total;
// }

// задача 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Тесты
// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// Функция calculateTotalPrice() использует цикл for..of.
// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Пиши код выше этой строки
//   }



// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     const filteredNumbers = []; 
    
//     for (let number of numbers) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
//     return filteredNumbers;
//     // Пиши код выше этой строки
//   }

// задача 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// Тесты
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.
// const a = 3 %  ;
// const b = 4 % ;
// const c = 11 % ;
// const d = 12 % ;
// const e = 8 % ;



// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// задача 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// Тесты
// Объявлена функция getEvenNumbers(start, end).
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
// Вызов функции getEvenNumbers(8, 8) возвращает [8].
// Вызов функции getEvenNumbers(7, 7) возвращает [].
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.




// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки

// let arr = [];
// for (let i = start; i <= end; i += 1){
//   if (i % 2 === 0){
//   arr.push (i);
//   }
//   }
//     return arr;
  
    
//     // Пиши код выше этой строки
//   }


// задача 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// Тесты
// Объявлена переменная start со значением 6.
// Объявлена переменная end со значением 27.
// Объявлена переменная number без инициализации.
// Итоговое значение переменной number равно 10.
// В цикле for используется break для выхода до завершения всех итераций цикла.
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   }
// }



// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// задача 31Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.
// Тесты
// Объявлена функция findNumber(start, end, divisor).
// Вызов findNumber(2, 6, 5) возвращает 5.
// Вызов findNumber(8, 17, 3) возвращает 9.
// Вызов findNumber(6, 9, 4) возвращает 8.
// Вызов findNumber(16, 35, 7) возвращает 21.
// Вызов findNumber() со случайным набором чисел возвращает верный результат.
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла.
// function findNumber(start, end, divisor) {
//     // Пиши код ниже этой строки
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         break;
//       }
//     }
  
//     return number;
//     // Пиши код выше этой строки
//   } 



// function findNumber(start, end, divisor) {
//     // Пиши код ниже этой строки
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         return i;
//       }
//     }
  
//     return number;
//     // Пиши код выше этой строки
//   }
// задача 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Тесты
// Объявлена функция includes(array, value).
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') возвращает true.
// Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') возвращает false.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива') возвращает true.
// Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') возвращает false.
// Вызов includes() для случайного массива со случайным value  возвращает верный boolean.
// В функции includes используется for, return, но не метод массива includes.


// function includes(array, value) {
//     // Пиши код ниже этой строки
//   let chek = false;
//     for ( let arr of array) {
//       if (arr === value ){
//         chek = true;
//       }
//     }
//   return chek;
  
    
//     // Пиши код выше этой строки
//   }



const apartment = {
    imgUrl:  'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags:  ['premium', 'promoted', 'top'],
  };