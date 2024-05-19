//! 1. Counter:
// ააწყვეთ პატარა
// counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x
// = 10; x++, x--.
// ანუ გვექნება 2 ღილაკი : increment  და  decrement .
// პირველზე დაჭერისას x რიცხვი გაიზრდება 1-ით, მეორეზე შემცირდება.
// შეგიძლიათ დაამატოთ კიდევ ღილაკები +5 დამატება და -5 დაკლება.

// -----------------------------------------------

let counter = 0;

const counterPlace = document.querySelector('.counterPlace');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

const inc5 = document.querySelector('.inc5');
const dec5 = document.querySelector('.dec5');

incrementBtn.addEventListener('click', () => {
  console.log('hello');
  counter++;

  return (counterPlace.textContent = counter);
});

decrementBtn.addEventListener('click', () => {
  console.log('hello');
  counter--;

  return (counterPlace.textContent = counter);
});

inc5.addEventListener('click', () => {
  counter += 5;
  return (counterPlace.textContent = counter);
});

dec5.addEventListener('click', () => {
  counter -= 5;
  return (counterPlace.textContent = counter);
});

//! 2. Check password შეიმუშავეთ
// ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის
// სიძლიერეს.
// პაროლის
// სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8
// სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა
// დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ
// მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც.
// გამოიყენეთ
// if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის
// შესაფასებლად.

const input = document.querySelector('.passInput');

const passCheckBtn = document.querySelector('.passCheck');

const messagePass = document.createElement('p');
const sec2 = document.querySelector('.ex2');

let checkPasswordStrength = (pass) => {
  if (pass.length > 8 && pass.length < 16) {
    messagePass.textContent = 'Password is streong';
  } else if (pass.length === 0) {
    messagePass.textContent = 'please enter the Password';
  } else if (pass.length < 8) {
    messagePass.textContent = 'password is too short';
  } else if (pass.length > 16) {
    messagePass.textContent = 'password is too long';
  }
};

sec2.appendChild(messagePass);

passCheckBtn.addEventListener('click', () => {
  checkPasswordStrength(input.value);
});

//! 3. შევამოწმოთ უდიდესი.
// გვჭირდება
// სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის
// უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7
// და აქედან უდიდესი არის 7.

const prompt1 = Number(prompt('number 1'));
const prompt2 = Number(prompt('number 2'));
const prompt3 = Number(prompt('number 3'));
const res = [prompt1, prompt2, prompt3];
console.log(res);

let findBiggestNum = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
  console.log(`უდიდესი რიცხვია ${arr[0]}`);
};

findBiggestNum(res);

//! Bonus:

const word = ' mindia arabuli ';

let firstLet = (name) => {
  let splitName = name.trim().split(' ');
  // console.log(splitName);
  let firstLet = splitName.map((el) => {
    return el[0].toUpperCase() + '.';
  });
  return firstLet.join(' ');
};

console.log(firstLet(word));
