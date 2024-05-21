const Greet = function(greeting , name){
    console.log(`${greeting},${this.name}`);
}
const person = {
    name :"sanju shivu"
}

Greet.apply(person,['Hello'])