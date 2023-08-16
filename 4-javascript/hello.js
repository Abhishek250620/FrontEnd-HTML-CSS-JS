console.log('hello word');
var i="abc";
console.log(typeof(i));
a=113;
console.log(a);

const num = [1,2,3,4]
console.log(num);
num[0]=9
console.log(num);

const person = {
    firstName:"John",
    lastName:"King",
    gender:"male",
    age:34,
    role:"developer",

    fullName:function demo(){
        return this.firstName+" "+this.lastName;
    }
};

person.name="King"

console.log(person);