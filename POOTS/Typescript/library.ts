import {Book} from "./book"

//clase
export class Library
{
    //atributos
    private books:Book[];
    private address:string;
    private manager:string;

    //constructores
    public constructor(books:Book[],address:string,manager:string)
    {
        this.books = books;
        this.address = address;
        this.manager = manager;

    }

    //métodos públicos
    //getters

    public getAddress():string
    {
        return this.address;
    }
    public getManager():string
    {
        return this.manager;
    }

    //setters

    public setAddress(newAddress:string):void
    {
        this.address = newAddress;
    }
    public setManager(newManager:string):void
    {
        this.manager = newManager;
    }

    //otros métodos
    //no consigo sacarlo bien.
    public toString():string
    {
        for(let val of this.books)
        {console.log(
        "Title - " + val[0] + 
        "\n Number of pages - " + val[1] +
        "\n ISBN - " + val[2] +
        "\n Author - " + val[3] +
        "\n Editorial - " + val[4]);
        }
        return
    }

    public getNumberOfBooks():number
    {
        return this.books.length;
    }
// estoy todavia dandole vueltas
     public findByAuthor(author:string):Book[]
     {
        for(let vall of this.books)
        {
            if(Book[3].includes(author))
            {
                console.log(vall)
            }
            else
            {
                console.log("no se encontraron coincidencias")
            }
        }
        return
     }

}