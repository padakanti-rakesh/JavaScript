class Encapuslation
{
    SetEmpolyeeDetails(Name , ID , PhnNo)
    {
        this.Name = Name;
        this.ID = ID;
        this.PhnNo = PhnNo;
    }

    getEmployeeName()
    {
        console.log(this.Name);
    }

    getEmployeeID()
    {
        console.log(this.ID);
    }

    getEmployeePhoneNo()
    {
        console.log(this.PhnNo);
    }
}

let emp = new Encapuslation();
emp.SetEmpolyeeDetails('Rakesh',7238,81218846474);
emp.getEmployeeID();
emp.getEmployeeName();
emp.getEmployeePhoneNo();