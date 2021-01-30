// задача 1
// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// Тесты
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает true.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов child.hasOwnProperty('name') возвращает true.
// Обращение к child.name возвращает 'Jason'.
// Вызов child.hasOwnProperty('age') возвращает true.
// Обращение к child.age возвращает 27.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Используется метод Object.create().


// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
//   };
//   // Пиши код ниже этой строки
  
//   const child = {};
  
//   // Пиши код выше этой строки
//   child.name = 'Jason';
//   child.age = 27;





// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
//   };
//   // Пиши код ниже этой строки
  
//   const child = Object.create(parent);
  
//   // Пиши код выше этой строки
//   child.name = 'Jason';
//   child.age = 27;


// задача 2
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// Тесты
// Объявлена переменная ancestor.
// Значение переменной ancestor это объект.
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Обращение к parent.surname возвращает 'Moore'.
// Обращение к parent.heritage возвращает 'Irish'.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает false.
// Вызов ancestor.isPrototypeOf(parent) возвращает true.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к ancestor.heritage возвращает 'Irish'.
// Вызов ancestor.hasOwnProperty('surname') возвращает true.
// Вызов ancestor.hasOwnProperty('heritage') возвращает true.
// Обращение к ancestor.surname возвращает 'Dawson'.
// Используется метод Object.create().



// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
//   };
//   // Пиши код ниже этой строки
  
//   const parent = {};
//   parent.name = 'Stacey';
//   parent.surname = 'Moore';
//   parent.age = 54;
  
//   const child = {};
//   child.name = 'Jason';
//   child.age = 27;
  
//   // Пиши код выше этой строки







// const ancestor = {
//     const ancestor = {
//         name: 'Paul',
//         age: 83,
//         surname: 'Dawson',
//         heritage: 'Irish'
//       };
//       // Пиши код ниже этой строки
      
//       const parent = Object.create(ancestor);
//       parent.name = 'Stacey';
//       parent.surname = 'Moore';
//       parent.age = 54;
      
//       const child = Object.create(parent);
//       child.name = 'Jason';
//       child.age = 27;
      
//       // Пиши код выше этой строки





// задача 3
// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// Тесты
// Объявлена функция Car(brand, model, price).
// В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.













// задача 4
// задача 5
// задача 6
// задача 7
// задача 8
// задача 9
// задача 10
// задача 11
// задача 12
// задача 13
// задача 14
// задача 15
// задача 16
// задача 17
// задача 18
// задача 19