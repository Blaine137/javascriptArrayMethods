const computers = [
    {
        id: 0,
        company: 'Dell',
        price: 800
    },
    {
        id: 1,
        company: 'Razer',
        price: 1500
    },
    {
        id: 2,
        company: 'Hp',
        price: 400
    },
    {
        id: 3,
        company: 'Apple',
        price: 1000
    },
    {
        id: 4,
        company: 'Alienware',
        price: 900
    },
    {
        id: 5,
        company: 'Asus',
        price: 1300
    }
];

let resetArrayLength = [...computers];
resetArrayLength.length = 0; //empties out an array
console.log(resetArrayLength)

let computerCompanys = computers.map(computer => computer.company ); //creates new array of all computer companys
let cheapComputers = computers.filter(computer => computer.price <= 800); //creates new array of all computers that prices are under or equal to 800
console.log(computerCompanys)
console.log(cheapComputers)

let newComputer = {
    id: 6,
    company: 'Lenovo',
    price: 750
};

computers.push(newComputer); //adds a new computer object to the end of the array
console.log(computers)

let slicedComputers = computers.slice(0, 6); //removes the new lenovo object without changing the original array
console.log(slicedComputers)

//learning reduce array method
let array = [1, 2, 3, 4, 5];
let stringArray = ['hello', 'world', 'from', 'blaine'];
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer)) //adds all the numbers in the array together for one value
console.log(stringArray.reduce(reducer, ' ')) //combines all the strings together for one value
console.log(array.reduce((acc, val) => acc + val))

//shift and unshift
array.unshift(6); //add six to the beggining of the array
console.log(array)

array.shift(6); //removes six from the beggining of the array
console.log(array)

//comparing two objects
let obj1 = { age: 2, name: 'blaine' };
let obj2 = { age: 2, name: 'blaine' };
let obj3 = obj1;
console.log(obj1 === obj3) //obj1 and 3 reference the same object in memory (true)

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // change one of the objects name/age property to a different string and this wiill return false

    //closure
    let getComputers = (computers) => {
        let comps = computers;
        let loop = (comps) => {
            let newComp = comps.filter(comp => comp.id === 5)
            console.log(newComp)
        }
        loop(comps);
    }
    getComputers(computers);