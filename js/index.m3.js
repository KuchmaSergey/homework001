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
// 25 задача
// 26 задача
// 27 задача
// 28 задача
// 29 задача
// 30 задача

// 31 задача
// 32 задача
// 33 задача
// 34 задача
// 35 задача
// 36 зад9
// 37 задача
// 38 задача
// 39 задача

// 41 задача




