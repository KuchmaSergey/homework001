// 5
// // Базовый код
// const productName = 'Дроид';
// const pricePerItem = 3500;

// // Пиши код ниже этой строки
// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;
// console.log(message);


// 6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов.Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// console.log(message);
// 7 задача
// // Пиши код ниже этой строки
// function sayHi () {
//     console.log ('Привет, это моя первая функция!')
//   }
//   sayHi();


// 8 задача
// Пиши код ниже этой строки
// function add(a,b,c) {
//     console.log(`Результат умножения равен ${a+b+c}`);
//     // Пиши код выше этой строки//
//   }
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);


// 9 задача
// function add(a, b, c) {
//     //  Пиши код ниже этой строки
//     return a+b+c   
//   //  Пиши код выше этой строки
//   }
//   add(2, 5, 8); // 15
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// 10 задача
// function makeMessage (name, price) {
//     // Пиши код ниже этой строки
//      const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//     // Пиши код выше этой строки
//     return message;
//   };

// 11 задача
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Пиши код ниже этой строки
//     const totalPrice = (orderedQuantity*pricePerItem);
  
//     // Пиши код выше этой строки
//     return totalPrice;
//   };



// 12 задача
//   function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Пиши код ниже этой строки
//     const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
//     // Пиши код выше этой строки
//     return message;
//   }

// 13 задача
// function isAdult(age) {
//     // Пиши код ниже этой строки
//     const passed = age >= 18;
    
  
//     // Пиши код выше этой строки
//     return passed;
//   }


// 14 задача

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Пиши код ниже этой строки
//     const isMatch = SAVED_PASSWORD === password;
  
//     // Пиши код выше этой строки
//     return isMatch;
//   }


// 15 задача
// function checkAge(age) {
//     let message;
  
//     if (age >=20) { // Дополни эту строку
//       message = 'Вы совершеннолетний человек';
//     } else {
//       message = 'Вы не совершеннолетний человек';
//     }
  
//     return message;
//   }

// 16 задача
// function checkStorage(available, ordered) {
//     let message;
//     // Пиши код ниже этой строки
//   if (ordered > available) {
//   message = 'На складе недостаточно товаров!';
//   } else {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
//     // Пиши код выше этой строки
//     return message;
//   }

// 17 задача

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Пиши код ниже этой строки
// a+= 2;
// b-= 4;
// c*= 3;
// d/= 10;


// 18 задача

// let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//            message = 'Недостаточно средств на счету!';
//    }
//   else {
//       customerCredits -= totalPrice;
//       message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
//    }

  

// 19 задача

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password ===  null ) { // Дополни эту строку
//       message =  'Отменено пользователем!';
//     } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//       message = 'Добро пожаловать!';
//     } else {
//       message = 'Доступ запрещен, неверный пароль!';
//     }
  
//     return message;
//   }


//   20 задача


// function checkStorage(available, ordered) {
//     let message;
//     // Пиши код ниже этой строки
//     if (ordered === 0) {
//       message = 'В заказе еще нет товаров';
//     } else if (ordered > available) {
//       message = 'Слишком большой заказ, на складе недостаточно товаров!';
//     } else {
//       message = 'Заказ оформлен, с вами свяжется менеджер';
//     }
//     // Пиши код выше этой строки
//     return message;
//   }

    // 21 задача
     

    // function isNumberInRange(start, end, number) {
    //     const isInRange =(start<=number&&end>=number);// дополни эту строк
      
    //     return isInRange;
    //   }


    // 22 задача

    // function checkIfCanAccessContent(subType) {
    //     const canAccessContent = subType === 'pro' || subType ==='vip' ; // дополни эту строку
      
    //     return canAccessContent;
    //   }


    //            23 задача

    // function isNumberNotInRange(start, end, number) {
    //     const isInRange = number >= start && number <= end;
    //     const isNotInRange = !isInRange ; // Дополни эту строку
      
    //     return isNotInRange;
    //   }


    // 24  задача

    function getDiscount(totalSpent) {
        const BASE_DISCOUNT = 0;
        const BRONZE_DISCOUNT = 0.02;
        const SILVER_DISCOUNT = 0.05;
        const GOLD_DISCOUNT = 0.1;
        let discount;
        
         if (totalSpent >= 50000) {
       GOLD_DISCOUNT === 0.1;
         }  if (totalSpent >= 20000 $$ 20000 <= 50000) {
           SILVER_DISCOUNT === 0.05;
         } if (totalSpent >= 5000 $$ totalSpent <= 20000) {
         BRONZE_DISCOUNT === 0.02 ; 
         } if (totalSpent <= 5000)
           BASE_DISCOUNT === 0 ;
      
        
        return discount;
      }