
let listElement = document.getElementById("list");


// sintassi per identificare un array: []
let cars = ["Ford", "Fiat", "Lamborghini", "Alfa Romeo", "Bugatti", "Tesla", "McLaren", "Aston Martin"];

// per ogni elemento dell'array lo stampiamo in pagina
for(let i = 0; i < cars.length; i++) {

  let newElement = document.createElement('li');
  listElement.append(newElement);

  newElement.innerText = cars[i];
  

}


// dato un array di numeri interi, stampare solo i numeri dispari
let numbers = [0,1,2,3,44,15,16,17,18,19,20,25,87,3,13,90,91,2];

console.log(numbers);

for(let i = 0; i < numbers.length; i++) {

  if (numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }

}