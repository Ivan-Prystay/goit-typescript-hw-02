/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = "male" | "female";

const myGender: Gender = "male";

type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function letAnimalTalk(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

export {};
