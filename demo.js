// const employee = {name :" kumar ", age:" 35"};
// console.log(employee);
// const updateEmp = employee.name='Arun';
// employee.salary= 20000;
// delete employee.name;
// // console.log(`Perivous -> ${employee.name},Current -> ${updateEmp}`);
// console.log(employee);

// -----------------
function greet (greet){
    console.log(greet,this.name);
}
const person ={
    name :"sanjay"
}
greet.call(person,'hello')

function greet2(greet2){
    console.log(greet2,this.name);
}
const person2 = {
    name : 'sanjay senthil'
}

greet2.bind(person2)

