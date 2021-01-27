// 1 задача
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение 'https://via.placeholder.com/640x480';
// descr - описание, значение 'Просторная квартира в центре';
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ['premium', 'promoted', 'top'].
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// В объекте есть свойство imgUrl.
// Значение свойства imgUrl это строка 'https://via.placeholder.com/640x480'.
// В объекте есть свойство descr.
// Значение свойства descr это строка 'Просторная квартира в центре'.
// В объекте есть свойство rating.
// Значение свойства rating это число 4.
// В объекте есть свойство price.
// Значение свойства price это число 2153.
// В объекте есть свойство tags.
// Значение свойства tags это массив ['premium', 'promoted', 'top'].


// const apartment = {
//     imgUrl:  'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags:  ['premium', 'promoted', 'top'],
//   };

// 2 задача
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение 'Генри';
// phone - телефон, значение '982-126-1588';
// email - почта, значение 'henry.carter@aptmail.com'.
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями.
// В объекте apartment есть свойство owner.
// Значение свойства owner это объект.
// В объекте owner есть свойство name.
// Значение свойства name это 'Генри'.
// В объекте owner есть свойство phone.
// Значение свойства phone это '982-126-1588'.
// В объекте owner есть свойствао email.
// Значение свойства email это 'henry.carter@aptmail.com'.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };



// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   owner: {
//    name: 'Генри',
//    phone: '982-126-1588',
//    email:'henry.carter@aptmail.com'
//   },
//   };

// 3 задача
// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями.
// Объявлена переменная aptRating.
// Значение переменной aptRating это число 4.
// Объявлена переменная aptDescr.
// Значение переменной aptDescr это строка 'Просторная квартира в центре'.
// Объявлена переменная aptPrice.
// Значение переменной aptPrice это число 2153.
// Объявлена переменная aptTags.
// Значение переменной aptTags это массив строк ['premium', 'promoted', 'top'].
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment;
//   const aptDescr = apartment;
//   const aptPrice = apartment;
//   const aptTags = apartment;
//   // Пиши код выше этой строки




// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки


// 4 задача
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.
// Тесты
// Объявлена переменная apartment с помощью 'const'.
// Значение переменной apartment это объект.
// Объявлена переменная ownerName с помощью 'const'.
// Значение переменной ownerName это строка 'Генри'.
// Объявлена переменная ownerPhone с помощью 'const'.
// Значение переменной ownerPhone это '982-126-1588'.
// Объявлена переменная ownerEmail с помощью 'const'.
// Значение переменной ownerEmail это 'henry.carter@aptmail.com'.
// Объявлена переменная numberOfTags с помощью 'const'.
// Значение переменной numberOfTags это 3.
// Объявлена переменная firstTag с помощью 'const'.
// Значение переменной firstTag это 'premium'.
// Объявлена переменная lastTag с помощью 'const'.
// Значение переменной lastTag это 'top'.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
  
//   // Пиши код ниже этой строки
//   const ownerName = apartment;
//   const ownerPhone = apartment;
//   const ownerEmail = apartment;
//   const numberOfTags = apartment;
//   const firstTag = apartment;
//   const lastTag = apartment;
//   // Пиши код выше этой строки




// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
  
//   // Пиши код ниже этой строки
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
//   // Пиши код выше этой строки





// 5 задача
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная aptRating.
// Значение переменной aptRating это 4.
// Объявлена переменная aptDescr.
// Значение переменной aptDescr это 'Просторная квартира в центре'.
// Объявлена переменная aptPrice.
// Значение переменной aptPrice это 2153.
// Объявлена переменная aptTags.
// Значение переменной aptTags это ['premium', 'promoted', 'top'].

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment;
//   const aptDescr = apartment;
//   const aptPrice = apartment;
//   const aptTags = apartment;
//   // Пиши код выше этой строки



// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];
  // Пиши код выше этой строки


// 6 задача
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Значение вложенного свойства price это число 5000.
// Значение вложенного свойства rating это число 4.7.
// Значение вложенного свойства name это строка 'Генри Сибола'.
// Значение вложенного свойства tags это массив ['premium', 'promoted', 'top', 'trusted'].

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
  
//   // Пиши код ниже этой строки


// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
  
//   // Пиши код ниже этой строки
//   apartment.price=5000;
//   apartment.rating=4.7;
//   apartment.owner.name=('Генри Сибола');
//   apartment.tags.push('trusted')

// 7 задача
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.
// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Значение вложенного свойства area это число 60.
// Значение вложенного свойства rooms это число 3.
// Значение вложенного свойства location это объект.
// Значение вложенного свойства location.country это строка 'Ямайка'.
// Значение вложенного свойства location.city это строка 'Кингстон'.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//       name: 'Генри Сибола',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
  
//   // Пиши код ниже этой строки


// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//       name: 'Генри Сибола',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
  
//   // Пиши код ниже этой строки
//   apartment.area=60;
//   apartment.rooms=3;
//   apartment.location = {};
//   apartment.location.country='Ямайка';
//   apartment.location.city= 'Кингстон';


// 8 задача
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// Тесты
// Объявлена переменная product.
// Значение переменной product это объект.
// Значение вложенного свойства name это строка 'Ремонтный дроид'.
// Значение вложенного свойства price это число 2500.
// Значение вложенного свойства image это строка 'https://via.placeholder.com/640x480'.
// Значение вложенного свойства tags это массив ['on sale', 'trending', 'best buy'].

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки



//   // Пиши код выше этой строки
// };




// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name,
//   price,
//   image,
//   tags


//   // Пиши код выше этой строки
// };

// 9 задача
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.

// Тесты
// Объявлена переменная credentials.
// Значение переменной credentials это объект.
// В объекте credentials есть свойство email.
// Значение вложенного свойства email это строка 'henry.carter@aptmail.com'.
// В объекте credentials есть свойство password.
// Значение вложенного свойства password это строка 'jqueryismyjam'.


// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
  
  
  
//   // Пиши код выше этой строки
// };



// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]:'henry.carter@aptmail.com',
//   [passwordInputName]:'jqueryismyjam'
//   // Пиши код выше этой строки
// };




// 10 задача
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153]

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Пиши код ниже этой строки
  



// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Пиши код ниже этой строки
//   for (const list in apartment) {
//     keys.push(list);
//     values.push(apartment[list])
//   }

// 11 задача
// Задание
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// Тесты
// Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки

//   keys.push(key);
//   values.push(apartment[key]);

//   // Пиши код выше этой строки
// }


// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки

// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Пиши код выше этой строки
// }

// 12 задача
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// Тесты
// Объявлена функция countProps(object).
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps{ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
// Функция подсчитывает только собственные свойства объекта.

// function countProps(object) {
//     let propCount = 0;
//     // Пиши код ниже этой строки
  
//     // Пиши код выше этой строки
//     return propCount;
//   }
  



// function countProps(object) {
//     let propCount = 0;
//     // Пиши код ниже этой строки
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount +=1;
//     }
//   }
//     // Пиши код выше этой строки
//     return propCount;
//   }
  
// 13 задача
// Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Пиши код ниже этой строки
//   const keys = apartment;



// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Пиши код ниже этой строки
//   const keys = Object.keys(apartment);
//   for ( let apartItem of keys) {
//    values.push(apartment[apartItem]);
//   }

// 14 задача
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// Тесты
// Объявлена функция countProps(object).
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
// Функция подсчитывает только собственные свойства объекта.
// Функция использует метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//     // Пиши код ниже этой строки
//     let propCount = 0;
  
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
//     }
  
//     return propCount;
//     // Пиши код выше этой строки
//   }


// function countProps(object) {
//     // Пиши код ниже этой строки
//     let propCount = 0;
//   let propArr = [];
     
//   propArr = Object.keys(object);
//    propCount = propArr.length;
  
//     return propCount;
//     // Пиши код выше этой строки
//   }
  

// 15 задача
// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].
// Для получения массива ключей объекта apartment используется Object.keys().
// Для получения массива значений объекта apartment используется Object.values().

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   // Пиши код ниже этой строки
//   const keys = apartment;
//   const values = apartment;


// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   // Пиши код ниже этой строки
//   const keys =  Object.keys(apartment);
//   const values =  Object.values(apartment);
  

// 16 задача
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// Тесты
// Объявлена функция countTotalSalary(salaries).
// Вызов countTotalSalary({}) возвращает 0.
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330.
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400.
// Функция учитывает только собственные свойства объекта.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Пиши код ниже этой строки
  
//     // Пиши код выше этой строки
//     return totalSalary;
//   }
  


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Пиши код ниже этой строки
//      for ( let key in salaries) {
//        if (salaries.hasOwnProperty(key)) {
//          totalSalary += salaries[key]
//      }
//      }
//     // Пиши код выше этой строки
//     return totalSalary;
//   }

// 17 задача
// Задание
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Тесты
// Объявлена переменная colors.
// Значение переменной colors это массив.
// Объявлена переменная hexColors.
// Значение переменной hexColors это массив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
// Объявлена переменная rgbColors.
// Значение переменной rgbColors это массив ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];

//   const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Пиши код ниже этой строки
  


  
//   const hexColors = [];
//   const rgbColors = [];
//   // Пиши код ниже этой строки
//   for (const item of colors){
//     hexColors.push(item.hex);
//     rgbColors.push(item.rgb);
//   }




// 18 задача
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice('Радар') возвращает 1300.
// Вызов getProductPrice('Захват') возвращает 1200.
// Вызов getProductPrice('Сканер') возвращает 2700.
// Вызов getProductPrice('Дроид') возвращает 400.
// Вызов getProductPrice('Двигатель') возвращает null.

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Пиши код ниже этой строки
    
    
    
//     // Пиши код выше этой строки
//   }



// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Пиши код ниже этой строки
//     let result = null;
//     for (const key of products) {
//       if (key.name === productName) {
//         result = key.price;
//         break;
//       }
//     }
    
//    return result; 
//     // Пиши код выше этой строки
//   }
// 19 задача
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName).
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('category') возвращает [].

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
    
    
    
//     // Пиши код выше этой строки
//   }



// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     const result = [];
//     for (const object of products){
//     for ( const key in object) {
//       if (key === propName) {
//         result.push(object[key]);
      
       
//       }
//     }
//   }
//       return result;
//     // Пиши код выше этой строки
//   }

// 20 задача
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// Тесты
// Объявлена функция calculateTotalPrice(productName).
// Вызов calculateTotalPrice('Бластер') возвращает 0.
// Вызов calculateTotalPrice('Радар') возвращает 5200.
// Вызов calculateTotalPrice('Дроид') возвращает 2800.
// Вызов calculateTotalPrice('Захват') возвращает 10800.
// Вызов calculateTotalPrice('Сканер') возвращает 8100.

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
  
  
  
//     // Пиши код выше этой строки
//   }


// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   let total = 0;
//     for (const object of products) {
//       if ( object.name === productName) {
//         total = object.price * object.quantity ;
//     }
//     }
//   return total;
  
//     // Пиши код выше этой строки
//   }

// 21 задача
// Задание
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// Тесты
// Объявлена переменная highTemperatures.
// Значение переменной highTemperatures это объект.
// Объявлена переменная yesterday с помощью деструктуризации.
// Значение переменной yesterday это число 28.
// Объявлена переменная today с помощью деструктуризации.
// Значение переменной today это число 26.
// Объявлена переменная tomorrow с помощью деструктуризации.
// Значение переменной tomorrow это число 33.
// Объявлена переменная meanTemperature.
// Значение переменной meanTemperature это число 29.
// Используется синтаксис деструктуризации объекта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const yesterday = highTemperatures.yesterday;
//   const today = highTemperatures.today;
//   const tomorrow = highTemperatures.tomorrow;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const {yesterday,today,tomorrow} = highTemperatures;
  
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// 22 задача
// Задание
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// Тесты
// Объявлена переменная highTemperatures.
// Значение переменной highTemperatures это объект.
// Объявлена переменная highTemperatures.
// Значение переменной highTemperatures это объект.
// Объявлена переменная yesterday с помощью деструктуризации.
// Значение переменной yesterday это число 28.
// Объявлена переменная today с помощью деструктуризации.
// Значение переменной today это число 26.
// Объявлена переменная tomorrow с помощью деструктуризации.
// Значение переменной tomorrow это число 33.
// Объявлена переменная icon с помощью деструктуризации.
// Значение переменной icon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// Используется деструктуризация объекта.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const yesterday = highTemperatures.yesterday;
//   const today = highTemperatures.today;
//   const tomorrow = highTemperatures.tomorrow;
//   const icon = highTemperatures.icon;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;




// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
//   const { yesterday,
//      today,    
//      tomorrow,
//      icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//         } = highTemperatures;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// 23 задача
// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// Тесты
// Объявлена переменная highTemperatures.
// Значение переменной highTemperatures это объект.
// Объявлена переменная highYesterday.
// Значение переменной highYesterday это число 28.
// Объявлена переменная highToday.
// Значение переменной highToday это число 26.
// Объявлена переменная highTomorrow.
// Значение переменной highTomorrow это число 33.
// Объявлена переменная highIcon.
// Значение переменной highIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// Используется деструктуризация объекта.


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const highYesterday = highTemperatures.yesterday;
//   const highToday = highTemperatures.today;
//   const highTomorrow = highTemperatures.tomorrow;
//   const highIcon = highTemperatures.icon;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;





// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
//   const {yesterday : highYesterday,
//   today : highToday,
//     tomorrow : highTomorrow,      
//    highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//         } = highTemperatures;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// 24 задача
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// Тесты
// Объявлена переменная colors.
// Значение переменной colors это массив.
// Объявлена переменная hexColors.
// Значение переменной hexColors это массив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
// Объявлена переменная rgbColors.
// Значение переменной rgbColors это массив ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].
// Для перебора массива используется цикл for...of.
// В цикле for...of используется деструктуризация объекта.


// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Пиши код ниже этой строки
  
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }




// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Пиши код ниже этой строки
  
//   for (const{hex,rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
  

// 25 задача
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// Тесты
// Объявлена переменная forecast.
// Значение переменной forecast это объект.
// Объявлена переменная highToday с помощью деструктуризации.
// Значение переменной highToday это число 32.
// Объявлена переменная lowToday с помощью деструктуризации.
// Значение переменной lowToday это число 28.
// Объявлена переменная todayIcon с помощью деструктуризации.
// Значение переменной todayIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'.
// Объявлена переменная highTomorrow с помощью деструктуризации.
// Значение переменной highTomorrow это число 31.
// Объявлена переменная lowTomorrow с помощью деструктуризации.
// Значение переменной lowTomorrow это число 27.
// Объявлена переменная tomorrowIcon с помощью деструктуризации.
// Значение переменной tomorrowIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// Используется синтаксис деструктуризации объекта highTemperatures.
  
// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Пиши код ниже этой строки
  
//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;
  
//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;    
   
  



// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Пиши код ниже этой строки
//   const {today: 
//       {high: highToday,low: lowToday,
//         icon:todayIcon = 
//       'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//    tomorrow: {high: highTomorrow, 
//       low: lowTomorrow, 
//       icon : tomorrowIcon = 
//       'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}
//     } = forecast;
// 26 задача
// Задание
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Тесты
// Объявлена функция calculateMeanTemperature(forecast).
// В теле функции используется деструктуризация объекта.
// В теле функции объявлена переменная todayHigh с помощью деструктуризации.
// В теле функции объявлена переменная todayLow с помощью деструктуризации.
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации.
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации.
// Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5.
// Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37.


// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//     const todayLow = forecast.today.low;
//     const todayHigh = forecast.today.high;
//     const tomorrowLow = forecast.tomorrow.low;
//     const tomorrowHigh = forecast.tomorrow.high;
  
//     // Пиши код выше этой строки
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
  




// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//     const {today: {low:todayLow, high : todayHigh},   
//      tomorrow: {low: tomorrowLow, high: tomorrowHigh}}=
//     forecast;
  
//     // Пиши код выше этой строки
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
  

// 27 задача
// Задание
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// Тесты
// Объявлена переменная scores.
// Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26].
// Объявлена переменная bestScore.
// Значение переменной bestScore это число 93.
// Объявлена переменная worstScore.
// Значение переменной worstScore это число 17.
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores.
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = scores;
// const worstScore = scores;




// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = (Math.max(...scores));
// const worstScore =(Math.min(...scores));


// 28 задача
// Задание
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// Тесты
// Объявлена переменная firstGroupScores.
// Значение переменной firstGroupScores это массив [64, 42, 93].
// Объявлена переменная secondGroupScores.
// Значение переменной secondGroupScores это массив [89, 14, 51, 26].
// Объявлена переменная thirdGroupScores.
// Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81].
// Объявлена переменная allScores.
// Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81].
// Объявлена переменная bestScore.
// Значение переменной bestScore это число 97.
// Объявлена переменная worstScore.
// Значение переменной worstScore это число 14.
// При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива.
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores.
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores.



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [];
// const bestScore = allScores;
// const worstScore = allScores;




// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore =(Math.min(...allScores));

// 29 задача
// Задание
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// Тесты
// Объявлена переменная defaultSettings.
// Значение переменной defaultSettings это объект.
// Объявлена переменная overrideSettings.
// Значение переменной overrideSettings это объект.
// Объявлена переменная finalSettings.
// Значение переменной finalSettings это объект.
// Значение свойства finalSettings.theme равно 'light'.
// Значение свойства finalSettings.public равно 'false'.
// Значение свойства finalSettings.withPassword равно 'true'.
// Значение свойства finalSettings.minNumberOfQuestions равно 10.
// Значение свойства finalSettings.timePerQuestion равно 30.
// При присваивании значения переменной finalSettings используется синтаксис ....

// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Пиши код ниже этой строки
//   const finalSettings = {};





// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Пиши код ниже этой строки
//   const finalSettings = {...defaultSettings,...overrideSettings};
// 30 задача
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// Тесты
// Объявлена функция makeTask(data).
// Вызов makeTask({}) возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// Вызов makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }) возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// Вызов makeTask({ category: 'Финансы', text: 'Забрать проценты' }) возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// Вызов makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// Вызов makeTask({ text: 'Купить хлеб' }) возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.


// function makeTask(data) {
//     const completed = false;
//     const category = 'Общее';
//     const priority = 'Обычный';
//     // Пиши код ниже этой строки
  
//     // Пиши код выше этой строки
//   }





// function makeTask(data) {
//     const completed = false;
//     const category = 'Общее';
//     const priority = 'Обычный';
//     // Пиши код ниже этой строки
//   const newTask = {completed:completed,category:category,priority:priority,...data};
//     return newTask;
//     // Пиши код выше этой строки
//   }

// 31 задача
// Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Тесты
// Объявлена функция add.
// Функция add использует параметр args.
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest).
// Вызов add(15, 27) возвращает 42.
// Вызов add(12, 4, 11, 48) возвращает 75.
// Вызов add(32, 6, 13, 19, 8) возвращает 78.
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241.

// // Пиши код ниже этой строки
// function add() {
//   // Пиши код выше этой строки
// }

// // Пиши код ниже этой строки
// function add(...args) {
//   let sum =0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
//   // Пиши код выше этой строки
// }

// 32 задача
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Тесты
// Объявлена функция addOverNum().
// Вызов addOverNum(50, 15, 27) возвращает 0.
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71.
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51.
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218.

// // Пиши код ниже этой строки
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
//   // Пиши код выше этой строки
// }




// // Пиши код ниже этой строки
// function addOverNum(number,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > number) {
//     total += arg;
//   }
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// 33 задача
// Задание
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Тесты
// Объявлена функция findMatches().
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2].
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2].
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41].
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает [].


// // Пиши код ниже этой строки
// function findMatches() {
//   const matches = []; // Не изменяй эту строку

//   // Пиши код выше этой строки
//   return matches;
// }




// // Пиши код ниже этой строки
// function findMatches(arr,...args) {
//   const matches = []; // Не изменяй эту строку
// for (const arg of args) {
//   if ( arr.includes(arg)) {
//     matches.push(arg);
//   }
// }
//   // Пиши код выше этой строки
//   return matches;
// }
// 34 задача
// Задание
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// Тесты
// Объявлена переменная bookShelf.

// Значение переменной bookShelf это объект.

// Значение свойства bookShelf.getBooks это метод объекта.

// Вызов метода bookShelf.getBooks() возвращает строку 'Возвращаем все книги'.

// Значение свойства bookShelf.addBook это метод объекта.

// Вызов метода bookShelf.addBook('Мгла') возвращает строку 'Добавляем книгу Мгла'.

// Значение свойства bookShelf.removeBook это метод объекта.

// Вызов метода bookShelf.removeBook('Красный закат') возвращает строку 'Удаляем книгу Красный закат'.

// Значение свойства bookShelf.updateBook это метод объекта.

// Вызов метода bookShelf.updateBook('Пески Дюны', 'Дюна') возвращает строку 'Обновляем книгу Пески Дюны на Дюна'.


// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   // Пиши код выше этой строки
// };





// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };
 

// 35 задача
// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// Тесты
// Объявлена переменная bookShelf.

// Значение переменной bookShelf это объект.

// Значение свойства bookShelf.updateBook это метод объекта.

// После вызова метода bookShelf.updateBook('Мгла', 'Хроники подземелий'), значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

// После вызова метода bookShelf.updateBook('Последнее королевство', 'Дюна'), значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].


// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
	
	
	
//     // Пиши код выше этой строки
//   },
// };







// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
	
// 	const index = this.books.indexOf(oldName);
//     this.books.splice(index,1,newName);
	
//     // Пиши код выше этой строки
//   },
// };
// 36 зад9
// Задание
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив [].


// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   // Пиши код выше этой строки
// };


// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions : [],
//   // Пиши код выше этой строки
// };

// 37 задача
// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() возвращает ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].



// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   // Пиши код выше этой строки
// };





// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions () {
//     return this.potions;
//   },
//   // Пиши код выше этой строки
// };



// 38 задача
// Задание
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.

// Значение переменной atTheOldToad это объект.

// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

// Значение свойства atTheOldToad.addPotion это метод объекта.

// После первого вызова метода atTheOldToad.addPotion('Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка'].

// После второго вызова метода atTheOldToad.addPotion('Зелье силы'), в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка', 'Зелье силы'].

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     // Пиши код выше этой строки
//   },
// };





// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

// 39 задача
// Задание
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.removePotion это метод объекта.
// После первого вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
// После вотрого вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив ['Каменная кожа'].

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };





// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     const index = this.potions.indexOf(potionName);
//     this.potions.splice(index,1);
//     // Пиши код выше этой строки
//   },
// };



// 40задача
// Задание
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
// После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка'].

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };





// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     let index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1,newName);
//     // Пиши код выше этой строки
//   },
// };

// 41 задача
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова методаatTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова методаatTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова методаatTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова методаatTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова методаatTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].



// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };











// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//    getPotions() {
//    return this.potions;
//   },
//   addPotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion === potionName) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
//     }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1){
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Зелья ${potionName} нет в инвентаре!`;
    
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) { 
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//       return `Зелья ${oldName} нет в инвентаре!`;
//   },
//   // Пиши код выше этой строки
// };