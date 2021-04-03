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


let computerCompanys = computers.map(computer => computer.company );
let cheapComputers = computers.filter(computer => computer.price <= 800);
console.log(computerCompanys)
console.log(cheapComputers)

let newComputer = {
    id: 6,
    company: 'Lenovo',
    price: 750
};

computers.push(newComputer);
console.log(computers)

let slicedComputers = computers.slice(0, 6); //removes the new lenovo object without changing the original array
console.log(slicedComputers) 
