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



// задача 22
// задача 23 
// задача 24 
// задача 25
// задача 26
// задача 27
// задача 28
// задача 29
// задача 30
// задача 31 
// задача 32



// _____не известная задача_____________
// function includes(array, value) {
//     let check = false; 
//    for (let arr of array) {
//      if (arr === value){ 
//     check = true;
//      }
//    }
//      return check;
//    }