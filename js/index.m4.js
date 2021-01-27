// задача 1
// Задание
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// Тесты
// Объявлена функция makePizza.
// Объявлена переменная result.
// Значение переменной result это строка 'Ваша пицца готовится, ожидайте.'.
// Значение переменной result получено с помощью вызова функции.
// Объявлена переменная pointer.
// Значение переменной pointer это ссылка на функцию makePizza.




// function makePizza() {
//     return 'Ваша пицца готовится, ожидайте.';
//   }
//   // Пиши код ниже этой строки
  
//   const result = null;
//   const pointer = null;



// function makePizza() {
//     return 'Ваша пицца готовится, ожидайте.';
//   }
//   // Пиши код ниже этой строки
  
//   const result = (makePizza(''));
//   const pointer = (makePizza);

// задача 2

// Задание
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// Тесты
// Объявлена функция deliverPizza.
// Объявлена функция makePizza.
// Объявлена функция makeMessage.
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback.
// Вызов makeMessage('Роял гранд', makePizza) возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// Вызов makeMessage('Ультрасыр', deliverPizza) возвращает строку 'Доставляем пиццу Ультрасыр.'.





// function deliverPizza(pizzaName) {
//     return `Доставляем пиццу ${pizzaName}.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Пицца ${pizzaName} готовится, ожидайте...`;
//   }
  
//   // Пиши код ниже этой строки
//   function makeMessage(pizzaName) {
//     return;
//   }
  




// function deliverPizza(pizzaName) {
//     return `Доставляем пиццу ${pizzaName}.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Пицца ${pizzaName} готовится, ожидайте...`;
//   }
  
//   // Пиши код ниже этой строки
//   function makeMessage(pizzaName,callback) {
//     return callback(pizzaName);
//   }
  
  // задача 3
//   Задание
//   Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.
  
//   Тесты
//   Объявлена функция makePizza.
//   Функция makePizza принимает два параметра.
//   Вторым аргументом при вызове makePizza('Ультрасыр') передана функция eatPizza с единственным параметром pizzaName.


//   function makePizza(pizzaName, callback) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     callback(pizzaName);
//   }
  
//   makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
//   });
//   // Пиши код ниже этой строки
  
//   makePizza('Ультрасыр');




//   function makePizza(pizzaName, callback) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     callback(pizzaName);
//   }
  
//   makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
//   });
//   // Пиши код ниже этой строки
  
//   makePizza('Ультрасыр',function eatPizza(pizzaName){
            
//             });
  // задача 4
//   Задание
//   Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
  
//   Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
//   Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
//   После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
  
//   Тесты
//   Метод order объявляет три параметра.
//   Вызов pizzaPalace.order('Аль Копчино', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
//   Вызов pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
//   Вызов pizzaPalace.order('Биг майк', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
//   Вызов pizzaPalace.order('Венская', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.


//   const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName) {},
//   };
//   // Пиши код выше этой строки
  
//   // Колбэк для onSuccess
//   function makePizza(pizzaName) {
//     return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
//   }
  
//   // Колбэк для onError
//   function onOrderError(error) {
//     return `Ошибка! ${error}`;
//   }
  
//   // Вызовы метода с колбэками
//   pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//   pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//   pizzaPalace.order('Биг майк', makePizza, onOrderError);
//   pizzaPalace.order('Венская', makePizza, onOrderError);





//   const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName,onSuccess,onError) {
//       if (this.pizzas.includes(pizzaName)) {
//         return  onSuccess(pizzaName);
//       }
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     },
//   };
//   // Пиши код выше этой строки
  
//   // Колбэк для onSuccess
//   function makePizza(pizzaName) {
//     return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
//   }
  
//   // Колбэк для onError
//   function onOrderError(error) {
//     return `Ошибка! ${error}`;
//   }
  
//   // Вызовы метода с колбэками
//   pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//   pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//   pizzaPalace.order('Биг майк', makePizza, onOrderError);
//   pizzaPalace.order('Венская', makePizza, onOrderError);

  // задача 5
//   Задание
//   Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
  
//   Тесты
//   Вызов pizzaPalace.order('Аль Копчино') возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
//   Вызов pizzaPalace.order('Четыре нарезона') возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.
//   Вызов pizzaPalace.order('Биг майк') возвращает строку 'В ассортименте нет пиццы с названием «Биг майк».'.
//   Вызов pizzaPalace.order('Венская') возвращает строку 'В ассортименте нет пиццы с названием «Венская».'.
//   Метод checkPizza объекта pizzaPalace использует this.
//   Метод order объекта pizzaPalace использует this.


//   const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     // Пиши код ниже этой строки
//     checkPizza(pizzaName) {
//       return pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//       }
  
//       return `Заказ принят, готовим пиццу «${pizzaName}».`;
//     },
//     // Пиши код выше этой строки
//   };






//   const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     // Пиши код ниже этой строки
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//       }
  
//       return `Заказ принят, готовим пиццу «${pizzaName}».`;
//     },
//     // Пиши код выше этой строки
//   };



//   // задача 6
//   Задание
//   Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.
  
//   После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
  
//   Тесты
//   Объявлена переменная customer.
//   Значение переменной customer это объект со свойствами и методами.
//   Вызов customer.getDiscount() возвращает текущее значение свойства discount.
//   Вызов customer.setDiscount(0.15) обновляет значение свойства discount.
//   Вызов customer.getBalance() возвращает текущее значение свойства balance.
//   Вызов customer.getOrders() возвращает текущее значение свойства orders.
//   Вызов customer.addOrder(5000, 'Steak') добавляет 'Steak' в массив значений свойства orders и обновляет баланс.
//   Метод getBalance объекта customer использует this.
//   Метод getDiscount объекта customer использует this.
//   Метод setDiscount объекта customer использует this.
//   Метод getOrders объекта customer использует this.
//   Метод addOrder объекта customer использует this.


//   nst customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     // Пиши код ниже этой строки
//     getBalance() {
//       return balance;
//     },
//     getDiscount() {
//       return discount;
//     },
//     setDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost - cost * discount;
//       orders.push(order);
//     },
//     // Пиши код выше этой строки
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, 'Steak');
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']






//   const customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     // Пиши код ниже этой строки
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Пиши код выше этой строки
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, 'Steak');
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


//   // задача 7
//   Задание
//   Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.
  
//   Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).
  
//   Не объявляй дополнительные параметры функции composeMessage(position).
//   Используй call для вызова функции в контексте одного объекта-заказа.
//   Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
//   Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.
  
//   Тесты
//   Объявлена переменная orders.
//   Значение переменной orders это исходный массив объектов-заказов.
//   Объявлена функция composeMessage(position).
//   У функции composeMessage объявлен один параметр position.
//   В теле функции composeMessage используется this.
//   Объявлена переменная messages.
//   Переменной messages с помощью метода map присваивают значение - массив, создаваемый вызовом функции composeMessage. Значение this при вызове функции переопределяется с помощью метода call.
//   Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

//   const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   // Пиши код ниже этой строки
//   function composeMessage(position) {}
  
//   const messages = [];
 




//   const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   // Пиши код ниже этой строки
//   function composeMessage(position) {
//       return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.` ;
//     }
    
//     const messages = orders.map((order,index ) => composeMessage.call(order,index + 1));
    
//   console.log(messages);




  // задача 8
//   Задание
//   Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.
  
//   Тесты
//   Объявлена переменная orders.
//   Значение переменной orders это исходный массив объектов-заказов.
//   Объявлена функция composeMessage(position).
//   У функции composeMessage объявлен один параметр position.
//   В теле функции composeMessage используется this.
//   Объявлена переменная messages.
//   Переменной messages с помощью метода map присваивают значение - массив, создаваемый вызовом функции composeMessage. Значение this при вызове функции переопределяется с помощью метода apply.
//   Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].




//   const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   // Пиши код ниже этой строки
//   function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//   }
  
//   const messages = orders.map((order, index) =>
//     composeMessage.call(order, index + 1)
//   );
  



//   const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   // Пиши код ниже этой строки
//   function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//   }
  
//   const messages = orders.map((order, index) =>
//     composeMessage.apply(order,[(order, index + 1)])
//   );
  // задача 9





  const pizzaPalace = {
    company: 'Pizza Palace',
  };
  
  const burgerShack = {
    company: 'Burger Shack',
  };
  
  function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
  }
  // Пиши код ниже этой строки
  
  const pizzaPalaceComposer = pizzaPalace.bind(composeMessage);
  const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
  
  const burgerShackComposer = composeMessage;
  const burgerShackMessage = burgerShackComposer('Поли');

console.log()



  // задача 10