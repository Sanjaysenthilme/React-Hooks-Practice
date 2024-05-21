const Greet = (greeting,name)=>{
    console.log(`${greeting},${name}...!`);
}
const person1 = {
    name:'sanju'
}

Greet.call(person1,'Hello',person1.name);

function Greet2 (greeting,name){
    console.log(`${greeting},${this.name}`);
}
const person2 ={
    name :" sanjay "
}
Greet2.call(person2,'Hi')