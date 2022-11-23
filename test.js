const a = {
    location:['a','b']
}

const {location:[abc,bca]} = a;
console.log(bca);


const b = [
    {name: 'farhan',location:'kh'}
]

const [{location}] = b;