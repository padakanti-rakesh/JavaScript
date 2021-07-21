class Animal
{
    constructor(name)
    {
        this.name = name;
    }

    eats()
    {
        console.log(this.name +' eats food');
    }
}

class Tiger extends Animal
{
    eats()
    {
        super.eats();
        console.log(this.name +' eats Non veg');
    }
}

let obj = new Tiger('wildAnimal');
obj.eats();
