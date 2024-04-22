
  
//   varible

// const people="ram";
// let person="ram";
// person="sita";

// // loop
// // for(StaticRange;CSSConditionRule;stepper)
// // do while 
// // while 

// for(let i=0;i<=10;i++){

// }
// let j=0;
// do{
//     console.log(j);
//     j++;
// }
// while(j<=10);

// let k=0;
// while(k<=10){
//     console.log(k);
//     k++;
// }

// +++++++++++++++++
// if else(es5)
//es6

//Ternary operator
// username===password? console.log("login"):console.log("Invalid");

// const username="nabin";
// const password="nabin";
// if(username==password){
//     console.log("Loggin");
// }
// else{
//     console.log("Loggin");

// }
// if(username===password){
//     console.log("Loggin");
// }
// else{
//     console.log("Loggin");

// }

// switch 
// logic operator

        //  function
        // es6


// Q1
//sort in ascending order by age => small to big


// const myLogic=(a,b)=>{
//     return a.age-b.age;
// };

// const resultSort=people.sort(myLogic);
// console.log(resultSort);

//question
    //    let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
    //    let food = ['Fries', 'Ice-cream', 'Pizza'];
    // //    Compare the 2 arrays and find common food if any.

    // const answer=food1.filter((item)=>food.includes(item));
    // console.log({answer});


    //    github repo
   // https://github.com/jamesqquick/javascript-array-functions-practice/blob/master/ReadMe.md

    const characters = [
        {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            eye_color: 'yellow',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            height: '150',
            mass: '49',
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            height: '188',
            mass: '84',
            eye_color: 'blue',
            gender: 'male',
            
        },
     ];
// 1.Get an array of all name

// const result=characters.map((characters)=>characters.name)
//     console.log(result);
// 2.Get an array of all heights
// const heights=characters.map((characters)=>characters.height)
// console.log("Answwer :",heights);

// 3.Get an array of objects with just name and height properties
//   const results=characters.map(characters=>({
//      name: characters.name,
//      height: characters.height
//   }));
//   console.log(results);

// 4.Get an array of all first names

// const firstNames = characters.map(character => {
//     const fullName = character.name.split(' ');
//     return fullName[0];
// });

// Reduce 
// 1. Get the total mass of all characters
// const totalMass = characters.reduce((value, character) => {
//     return value + parseInt(character.mass);
// }, 0);

// console.log(totalMass);


// 2.Get the total height of all characters

// const totalHeight=characters.reduce((value,characters)=>{
//     return value + parseInt(characters.height);
// },0);
// console.log(totalHeight);

// 3.Get the total number of characters in all the character names

// const totalNames=characters.reduce((value,character)=>{
//      return value + character.name.length
// },0)
// console.log(totalNames);

// 4.Get the total number of characters by eye color (hint. a map of eye color to count)
//  const eyeColor=characters.reduce((value,character)=>{
//     return value + character.eye_color.length
//  },0)
//  console.log(eyeColor);




// Filter 
// 1.Get characters with mass greater than 100
// const greaterMass=characters.filter(mas=>parseInt(mas.mass.length)>100);
// const greaterMass=characters.filter(masses=>parseInt(masses.mass)>100);
// console.log(greaterMass);


// // 2.Get characters with height less than 200
// const allHeight= characters.filter(heights=>parseInt(heights.height)<200);
// console.log(allHeight);

// // 3.Get all male characters
// const gender=characters.filter(genders=>genders.male);
// console.log(gender);

// // 4.Get all female characters


// Sort 
//  1.Sort by name
// const names=characters.sort();
// console.log(names);


