// const human = {
//     name: "Rail",
//     surname: "Jannatov",
//     age: 41,
//     tikTokUsername: "fronted_ortaliqdan",
//     hobbi: "TikTok",
//     getHumanFullInfo: function () {
//         console.log (`${this.name} ${this.age} ${this.tikTokUsername} ${this.hobbi}`)
//     }
// }
// human.getHumanFullInfo();



// const car = {
//     make: "Lada-vaz",
//     model: "2106",
//     year: 1992,
//     color: "white",
//     getCarInfo: function (){
//         console.log (`${this.make}, ${this.model}, ${this.color}, ${this.owner}`)
// }
// }
// car.owner = "Rail Jannatov",
// car.color = "red",
// car.getCarInfo();



// const car = {
//     make: "Lada-vaz",
//     model: "2106",
//     year: 1992,
//     color: "white",
// }
// car.owner = "Rail Jannatov",
// car.color = "red",
// delete car.year
// console.log(car);


// const school = {
//     name: "Balaxanı Qızlar məktəbi",
//     adres: {
//         city: "Bakı",
//         street: "Səfəvilər küçəsi",
//         country: "Azərbaycan"
//     },

//     fullAdres: function() {
//         return `${this.adres.city}, ${this.adres.street}, ${this.adres.country}`;
//     }
// };
// console.log(school.fullAdres());



// const books = [
//     {title: "İncillə yaşanan ömür", author: "Moşe Dayan", yearPublished: "2005" },
//     {title: "İblislərin ənənələri", author: "Çingiz Abdullayev", yearPublished: "1955" },
//     {title: "Yerusəlim", author: "Saymon Sebaq Montefiore", yearPublished: "1981" },
// ]
// books.push({
//     title: "Bir at bara girir", author: "Devid Qrossman", yearPublished: "1991"
// })

// books.forEach(book => {
//     console.log(book.title);
// });
// console.log(books);


// const student1 = {
//     name: "Nihad",
//     class: "9b",
//     age: 14,
//     grade: 284
// };


// const student2 = {
//     name: "Amil",
//     class: "9c",
//     age: 15,
//     grade: 255
// };

// if (student1.grade > student2.grade) {
//     console.log(`${student1.name} daha yuksek bal toplayib`)
// } else if (student1.grade < student2.grade) {
//     console.log(`${student2.name} daha yuksek bal toplayib`);
// } else {
//     console.log("Her iki telebe eyni bal toplayib");
// }

// Obyektin dagidilmasi 1 ci yol
// const student1 = {
//     name: "Nihad",
//     class: "9b",
//     age: 14,
//     grade: 284,
//     gmail: "nihadehmedli2010",
//     parol: "ehmedli0000",
// };

// const {name, gmail, age} = student1;

// console.log("Ad:", name);
// console.log("Yaş:", age);
// console.log("Email:", gmail);



// Obyektin dagidilmasi 2 ci yol
// const student1 = {
//     name: "Nihad",
//     class: "9b",
//     age: 14,
//     grade: 284,
//     gmail: "nihadehmedli2010",
//     parol: "ehmedli0000",
// };

// const {name, gmail, age , ...rest} = student1;

// console.log("Ad:", name);
// console.log("Yaş:", age);
// console.log("Email:", gmail);
// console.log("Qalan melumatlar", rest);



// Obyektin dagidilmasi 3 ci yol
// const student1 = {
//     name: "Nihad",
//     class: "9b",
//     age: 14,
//     grade: 284,
//     gmail: "nihadehmedli2010",
//     parol: "ehmedli0000",
// };

// const {name, gmail, age , password = "defaultaParol"} = student1;

// console.log("Ad:", name);
// console.log("Yaş:", age);
// console.log("Email:", gmail);
// console.log("Kod", password);



const calculator = {
    toplama: function(a,b) {
        return a + b;
    },
    cixma: function(a,b) {
        return a - b;
    },
    vurma: function(a,b) {
        return a * b;
    },
    bolme: function(a,b) {
        return a / b;
    }
};
console.log(calculator.toplama(10, 5));
console.log(calculator.cixma(10, 5));
console.log(calculator.vurma(10, 5));
console.log(calculator.bolme(10, 5));