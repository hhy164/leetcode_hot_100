var lemonadeChange = function (bills) {
  let five = 0, ten = 0;
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five++;
        break;
      case 10:
        ten++;
        if (five > 0) {
          five--;
        } else {
          return false;
        }
        break;
      case 20:
        if (five > 0 && ten > 0) {
          five--
          ten--
        } else if (five >= 3) {
          five -= 3;
        } else {
          return false;
        }
        break;
    }
  }
  return true;
};

const bills = [5, 5, 10, 10, 20]
console.log(lemonadeChange(bills))