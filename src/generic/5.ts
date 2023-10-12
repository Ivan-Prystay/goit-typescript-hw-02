/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, K> {
  key: T;
  value: K;
}

const car: KeyValuePair<string, symbol> = {
  key: "name",
  value: Symbol("Volvo"),
};

console.log("car: ", car.value);

export {};
