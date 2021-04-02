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

console.log(computerCompanys)