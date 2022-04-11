
//clase
export class Vector
{
    //atributos
    private elements:number[];

    //constructor
    public constructor(n:number,k:number,)
    {
        this.elements = [];
      for(let i = 0;i<n;i++)
      {
         this.elements.push(Math.floor(Math.random()*(k - 0) + 0));
      } 
    }
    //métodos públicos
    print()
    {
        return console.log(this.elements)
    }

    add(v1:Vector):Vector
    {
        let sumVec = []
        for(let i = 0;i<this.elements.length;i++)
        {
            sumVec.push(v1[i] + this.elements[i])
        }
        return 
    }

    subs(v1:Vector):Vector
    {
        let restVec = []
        for(let i = 0;i<this.elements.length;i++)
        {
            restVec.push(v1[i] + this.elements[i])
        }
        return 
    }

    mult(v1:Vector):Vector
    {
        let multVec = []
        for(let i = 0;i<this.elements.length;i++)
        {
            multVec.push(v1[i] + this.elements[i])
        }
        return 
    }
    multNumber(n:number):Vector
    {
        let multVec2 = []
        for(let i = 0;i<this.elements.length;i++)
        {
            multVec2.push(n* this.elements[i])
        }
        return 
    }
}
