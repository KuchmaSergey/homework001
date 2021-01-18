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
// 12 задача

// 13 задача
// 14 задача
// 15 задача
// 16 задача
// 17 задача
// 18 задача
// 19 задача
// 20 задача
// 21 задача

// 22 задача
// 23 задача
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




