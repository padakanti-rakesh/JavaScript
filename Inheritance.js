class car
{
    setCarName(Name)
    {
        this.Name = Name;
    }

    startEngine()
    {
        console.log('Engine of the car '+this.Name +' is started');
    }

    stopEngine()
    {
        console.log('Engine of the car '+this.Name +' is stoped');
    }
}

class Toyato extends car
{
    TopSpeed(speed)
    {
        console.log('The top speed of '+this.Name+' is '+speed);
    }
}

let myCar = new Toyato();
myCar.setCarName('Ertiga');
myCar.startEngine();
myCar.stopEngine();
myCar.TopSpeed(120);