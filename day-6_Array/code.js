
//Array

//collection of anything
//complex data types
//CRUD

// create 
const firstArr=[];
const secArr= new Array();
console.log({firstArr,secArr});

const thirdArr=[
    "ram",
    {name:"shyam"},
    one={
        name:"CG",

    },
    "12",
    "firstArr","secArr",
    {isStudent:"true"},
    function age(){
        return "22";
    },
    four=[
        "one",

        five=[
            123,

        ]
    ]
    
  ]
console.log(thirdArr);

// Read 
console.log(thirdArr[4]);
console.log(thirdArr[6]);
console.log(one.name);
console.log(thirdArr[2].name);
console.log(thirdArr);

// console.log(thirdArr.age());

// Update 
thirdArr[0]="nabin";

console.log(thirdArr[0]);

// Delete 
// Spread operator 
// const [a,b, ...rest]=thirdArr;
// console.log(rest);

// in object 

// const obj={c:"rrr",d:"eee"};

// const{ a,b, ...del}=obj;
//     console.log(del);

    const name={1:"hari",2:"ram",3:"sita",4:""};
    
    const {ab,c,...del}=name;
    console.log(del);

    const first=[1,2,3,4];
    const seco=[5,6,7];
    
    const result=[...first,...seco];
    console.log({result});

    const x=["ram"];
    const y=["ram"];
    const result2=[...x,...y];

    const Arr=[
        1,2,3,3,4,4,54
    ]
    console.log(Arr);
    for(i=0;i<Arr;i++){
        console.log(Arr);

    }
    const Arr2=[
        "abcdef"
    ]
    // console.log(Arr);
    for(let i=0;i<Arr2.length;i++){
        console.log(Arr2[i]);

    }

    //search mdn or mozila js array

    //write a js array solution to add new element in the array

    const fruit=["apple","mango","banana"];
    console.log(fruit.unshift("ddd"));
    console.log(fruit.toString());
    
    // write a js array method solution to convert array to string 
    //output:1,2
    const num=[1,2];
    console.log(num.toString());

    const testString="1,2,4";
    //result:["1","2"]
    const results=testString.split(",");
    console.log({results});

    //sort in ascending order by age => small to big



    

