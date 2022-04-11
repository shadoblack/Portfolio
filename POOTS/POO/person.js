
class Person
{
    //constructor y atributos.
   constructor(name,height,weight) 
   {
       this.name=name;
       this.surname="Partisano";
       this.age=0;
       this.height=height;
       this.weight=weight;
       this.yearOfBirth=1970;
       this.eyeColor="black";
       this.hobbies = ["study","programming","dream","motorsports","videogames"];
       this.bloodType="0+";
       this.drivingLicense=false;
       this.smokes=false;
       this.drinks=false;
       this.serialMurderer=false;
       this.hairColor="black";
       this.actuallyWorking=false;
       this.imc=0;
    }
    //métodos.
    calcIMC()
    {
        return this.imc = this.weight/((this.height/100)*2);
    }

    calcAge()
    {
        return this.age =Math.abs( this.yearOfBirth-(2022));
    }

    printAll()
    {
       let solucion
       let personaObjeto= new Person("will",180,60)
        for(let val in personaObjeto)
        {
          solucion= solucion + " " + val + " - " + personaObjeto[val];  
        }
       return this.personaObjeto + solucion ;     
    }
    printHobbies()
    {
        return this.hobbies;
    }
}
module.exports= {Person};

