                                                //HomeWork
 // 1) Конвертация чилсо

const num = prompt("Введите число от 1 до 9:");

switch(num) {
    case '1':
        romanNumeral = "I";
        break;
    case '2':
        romanNumeral = "II";
        break;
    case '3':
        romanNumeral = "III";
        break;
    case '4':
        romanNumeral = "IV";
        break;
    case '5':
        romanNumeral = "V";
        break;
    case '6':
        romanNumeral = "VI";
        break;
    case '7':
        romanNumeral = "VII";
        break;
    case '8':
        romanNumeral = "VIII";
        break;
    case '9':
        romanNumeral = "IX";
        break;
    default:
        romanNumeral = "Некорректный ввод!";
        break;
}

console.log(romanNumeral);

// 2) Информатция клиента
var customer = {
  name: "Eugene",
  surname: "Kiselev",
  fatherName: "Dmitrievich",
  isResident: true,
  id: 0,
  birthDate: null,
  sex: true,
  type:false,
  passport: {
    series: "ID",
    documentNo: "12345",
    expiryDate: "01-01-2025",
    issueDate: "01-01-2015",
  },

  getFullName: function () {
    return this.surname + " " + this.name + " " + this.fatherName;
  },
  phoneNumbers: ["+996555111222", "+996700111222", "+79051112233"],
  isMobileBankingUser: true,
};

console.log(customer);
console.log(typeof customer);

console.log("Customer ID = ", customer.id);
console.log(
  "Customer passport expiration date = ",
  customer.passport.expiryDate
);
console.log("Customer full name = ", customer.getFullName());
// var text = "Статус клиента:";
// if (customer.isResident) {
//   console.log(text, "Резидент");
// } else {
//   console.log(text, "Не резидент");
// }
 console.log("Пол клиента ",
 customer.sex ? "Мужской" :"Женский");

 console.log(" Тип клиента ",
 customer.type ? "Физическое лицо" :"Юридическое лицо");

 // 3) Mассив с номерами банковских карт

var cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];

const result=arr.filter(i=>i[0]===`4`).length;
var message = `Карт VISA 4 из 7`;
console.log (message);





