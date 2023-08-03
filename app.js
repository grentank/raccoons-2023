// function toCapitalCaseAWS(str) {
//   return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// function toCapitalCase(word) {
//   const lowerCaseWord = word.toLowerCase();
//   const capitalLetter = lowerCaseWord[0].toUpperCase();
//   const result = capitalLetter + lowerCaseWord.slice(1);
//   return result;
// }

// console.log(toCapitalCaseAWS('elBruS'));

// const str = 'beginning 123 456 ending';
// const newStr = str.replace(/(\d{3}) (\d{3})/, '$2 $1');
// console.log(newStr);
// const regex = /(\+7|\d)?[\s-]?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;

// Dates

// function daysToChristmasFromNow() {
//   const now = new Date(); // <-- объект даты с текущим временем
//   const currentYear = now.getFullYear();
//   const christmas = new Date(currentYear, 11, 32);
//   const christmasMs = Date.parse(christmas);
//   const nowMs = Date.parse(now);
//   const difference = christmasMs - nowMs;
//   const totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
//   return totalDays;
// }

// console.log(daysToChristmasFromNow());

// function daysUntilNewYear() {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const newYearDate = new Date(currentYear + 1, 0, 1); // 1st January of the next year

//   const timeDifference = newYearDate - currentDate;
//   const millisecondsInDay = 24 * 60 * 60 * 1000;

//   const daysLeft = Math.ceil(timeDifference / millisecondsInDay);
//   return daysLeft;
// }

// console.log(daysUntilNewYear());

// function daysToNextChristmas(date) {
//   const now = new Date(); // <-- объект даты с текущим временем
//   const currentYear = now.getFullYear();
//   const christmas = new Date(currentYear, 11, 32); // 1 January of the next year
//   if (date.valueOf() > christmas.valueOf()) {
//     throw new Error('Date is in the future');
//   }
//   const difference = christmas - date;
//   const totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
//   return totalDays;
// }

// console.log(daysToNextChristmas(new Date(2000, 7, 1)));
