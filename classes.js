class FirstClass{
    add(a,b)
    {
       console.log(a+b);
    }
    
    constructor(Name , id)
    {
        this.Name = Name;
        this.id = id;
    }

}


let sum = new FirstClass('rakesh' , 7238);

console.log(sum.add(11,12)); 
console.log(sum.add(90,09)); 
console.log(sum.Name);
console.log(sum.id);