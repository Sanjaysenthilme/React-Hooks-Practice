const Greet = function (greeting, name){
    console.log(`${greeting},${this.name}`);
}
const person1 = {
    name : "sanjay senthil"
}

const GreetPerson1 = Greet.bind(person1);
GreetPerson1('Hello')