

// object 

// const person ={
//   name :"rameshwar",
//   est:2008,
//   phone:"+987777777",
//   addrress:"dddd",
//   isschool:true,
// }
// console.log(person);

const car={
    name:"tesla",
    carNo:873736,
    color:"red",
    teslaBrand:true,
    own:2012,
    owner : {
        1:"ram",
        2:"shyam",
    },
    age : function (){
        return 2024-2012;
    },
    old:()=>{
        return 2024-2012;
    },

};

// create 
const box =new Object();

// technique2
const boxes={};

// read 
console.log(car.name,car.age().carNo);

// update 
car.own=2002;
console.log(car);
car.owner.a="hari";
car.owner.d="hari";


// delete 
//  1delete the object 
// 2 delete the object property 

delete car.owner.d;

console.log(car);



// console.log(car);
// console.log(color);

const teacher={
    name:"ram",
    dob:2001,
    age:function(){
        return 2024 -this.dob;
    },
    old:()=>{
        // return 2024 -this.dob;
        return 2024 -teacher.dob; // right ways 

    },

};
console.log(teacher.age()); 
console.log(teacher.old());

const range={
    start:10,
    end:40,
   check: (num)=>{
        if(num>=range.start && num<=range.end){
            return true;
        
        }
        return false;
      
    },
}
console.log(range.check(30));


var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    

    console.log(student);
    delete student.rollno;
    console.log(student);


    const car={
        name:"tesla",
        model:2343,
        own:2018,
        brand:"tesla",
        owner :{
            1: "ram"

        }
    }
    console.log(car.age)

