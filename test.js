function makeMessage(name, price) {
   // Пиши код ниже этой строки
   const message = `Вы выбрали ${name}, цена за штуку ${price}`;
   // Пиши код выше этой строки
   return message;
};

console.log(makeMessage("Skan", 600));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
   // Пиши код ниже этой строки

   const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

   // Пиши код выше этой строки
   return message;
};

console.log(makeOrderMessage(2, 100, 50));

function isValidPassword(password) {
   const SAVED_PASSWORD = 'jqueryismyjam';
   // Пиши код ниже этой строки
   const isMatch = password === SAVED_PASSWORD;

   // Пиши код выше этой строки
   return isMatch;
};
const iveNt = isValidPassword('jqueryismyjam'); console.log(iveNt);
console.log(isValidPassword('jqueryismyjam'));

function checkAge(age) {
   let message;

   if (age >= 18) {
      message = 'Вы совершеннолетний человек';
   } else {
      message = 'Вы не совершеннолетний человек';
   }

   return message;
}
console.log(checkAge(20));

function checkStorage(available, ordered) {
   let message;
   if (available >= ordered) {
      message = 'Заказ оформлен, с вами свяжется менеджер';
   } else {
      message = 'На складе недостаточно товаров!';
   }
   return message;
};

console.log(checkStorage(100, 130));
console.log(checkStorage(200, 130));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
   let message;
   totalPrice = pricePerDroid * orderedQuantity;

   if (totalPrice >= customerCredits) {
      message = 'Недостаточно средств на счету!';
   } else {
      message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
   }
   return message;
};

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(5000, 8, 10000));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
   let message;
   let totalPrice = pricePerDroid * orderedQuantity;

   if (totalPrice <= customerCredits) {
      message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`
   }
   else {
      message = `Недостаточно средств на счету!`
   }
   return message
};

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(5000, 8, 10000));

function isNumberInRange(start, end, number) {
   const isInRange = number >= start && end >= number; // дополни эту строкуend ; // дополни эту строкуnumber 

   return isInRange;
}

console.log(isNumberInRange(1, 10, 5));


function checkIfCanAccessContent(subType) {
   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

   return canAccessContent;
}


function getDiscount(totalSpent) {
   const BASE_DISCOUNT = 0;
   const BRONZE_DISCOUNT = 0.02;
   const SILVER_DISCOUNT = 0.05;
   const GOLD_DISCOUNT = 0.1;
   let discount;
   // Пиши код ниже этой строки
   if (totalSpent < 5000) { discount = BASE_DISCOUNT }
   else if (totalSpent < 20000) { discount = BRONZE_DISCOUNT }
   else if (totalSpent < 50000) { discount = SILVER_DISCOUNT }
   else { discount = GOLD_DISCOUNT }
   // Пиши код выше этой строки
   return discount;
}

console.log(getDiscount(137000))
console.log(getDiscount(46900))
console.log(getDiscount(8250))
console.log(getDiscount(1300))
console.log(getDiscount(5000))
console.log(getDiscount(20000))
console.log(getDiscount(50000))

function checkStorage(available, ordered) {
   let message;
   // Пиши код ниже этой строки
   message = (ordered > available) ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
   // Пиши код выше этой строки
   return message;
};







