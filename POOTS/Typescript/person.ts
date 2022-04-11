//clase(he tenido que poner export directamente en la clase,
//ya que no se porque no me dejaba exportarlo poniendolo al final)
export class Person
{
    //atributos publicos

    public name:string;
    public age:number;

//atributos privados

    private address:string;

    //constructores
    
    public constructor(name:string,age:number,address:string)
    {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    //métodos públicos

    public printName():void
    {
        console.log(this.name);
    }
    public yearOfBirth(currentYear:number):number
    {
        return 2022 - this.age;
    }
    public setAddress(address:string):void
    {
        this.address= address;
    }
    public getAddress():string
    {
        return this.address;
    }

}

