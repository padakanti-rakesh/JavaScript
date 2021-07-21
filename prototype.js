let Prototypetest = function(Name, age)
{
    this.Name = Name;
    this.age = age;
}

Prototypetest.prototype.getName = function()
{
    return this.Name;
}


Prototypetest.prototype.getage = function()
{
    return this.age;
}

let obj = new Prototypetest('Rakesh', 28);
let obj1 = new Prototypetest('Nikiha', 24);

console.log(obj.getName());
console.log(obj1.getage());