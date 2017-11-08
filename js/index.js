// const a = 10;
// const b = 20;
// // let result;
// // if (a > b) {
// //   result = 'Good';
// // } else {
// //   result = 'Bad';
// // }
// const result = a > b ? 'Good' : 'Bad';
// console.log(result);

// const mark = parseInt(prompt('Enter mark'));
// let result;
// switch (mark) {
//     case 5: 
//         result = 'Excellent';
//         break;
//     case 4: 
//         result = 'Good';
//         break;
//     case 3: 
//         result = 'Satisfactory';
//         break;
//     case 2: 
//         result = 'Bad';
//         break;
//     default: 
//         result = 'Wrong mark';
//         break;
// }
// console.log(result);

// for (let i = 2; i <= 10; i++) {
//     if (i % 2) {
//         continue;   
//     }
//     console.log(i);
// }

// let correctInput = false;
// let a;
// while (!correctInput) {
//     a = Number(prompt('Input A'));
//     if (!isNaN(a) && a !== 0) {
//         correctInput = true;
//     } else {
//         alert('You entered incorrect value, please try again')
//     }
// }

//let cars = [];
//cars.push('Tesla Model X');
//cars.push('Volkswagen Terramont');
//console.log(cars.length);
//console.log(cars[0]);
//cars[2] = 'Ferrari LaFerrari';
//console.log(cars.length);
//cars[10] = 'Agera R';
//console.log(cars.length);
//console.log(cars);

//let counter = 0;
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i] !== undefined) {
//         counter++;
//     }
// }
//cars.forEach(function(el){
//    console.log(el);
//  counter++; 
//});
//console.log('Actual count', counter);

let favCars = {};
favCars['fastest'] = 'Agera R';
favCars['mostExpensive'] = 'Bugatti Chiron';
favCars['mostComfortable'] = 'Rollc-Royce Phantom';

console.log(favCars['mostComfortable']);

for (let key in favCars) {
    console.log(favCars[key]);
}

let bugattiVeyron = {};
bugattiVeyron.make = 'Bugatti';
bugattiVeyron.title = 'Veyron';
bugattiVeyron.speed = 408;
bugattiVeyron.drive = function() {
    console.log(this.title + ' is driving!');
}

let zazLanos = {};
zazLanos.make = 'ZAZ';
zazLanos.title = 'Lanos';
zazLanos.speed = 175;
zazLanos.drive = function() {
    console.log(this.title + ' is driving!');
}

zazLanos.drive();

function Car(make, title, speed) {
    this.make = make;
    this.title = title;
    this.speed = speed;
    this.drive = drive = function() {
        console.log(this.title + ' is driving!');
    }
}

  return this;
}

let skodaKodiaq = new Car('Skoda', 'Kodiaq', 200);
skodaKodiaq.drive();


let skodaKaroq = new Car('Skoda', 'Karoq', 200);
skodaKaroq.drive();

