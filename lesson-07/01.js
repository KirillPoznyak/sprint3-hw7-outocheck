/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (i === 0 || string[i-1] === ' ') {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i];
//     }
//   } 
//   return result;
// }

// const words = 'Hello motherfucker!';
// console.log(capitalizeWords(words));

function capitalizeWords(string) {
  const arrString = string.split('');
  for (let i = 0; i < arrString.length; i++) {
    if (i === 0 || arrString[i-1] === ' ') {
      arrString[i] = arrString[i].toUpperCase();
    }
  }
  let result = arrString.join('');
  return result;
}

const words = 'hello world from javascript';
console.log(capitalizeWords(words));