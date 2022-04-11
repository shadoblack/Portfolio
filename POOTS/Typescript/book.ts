//clase(he tenido que poner export directamente en la clase,
//ya que no se porque no me dejaba exportarlo poniendolo al final)

export class Book
{
    //atributos privados
    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    //constructor público
    public constructor(title:string,nPages:number,isbn:string,author:string,editorial:string)
    {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    //métodos públicos
    
    //getters

    public getTitle():string
    {
        return this.title;
    }
    public getNPages():number
    {
        return this.nPages;
    }
     public getIsbn():string
    {
        return this.isbn;
    }
     public getAuthor():string
    {
        return this.author;
    }
     public getEditorial():string
    {
        return this.editorial
    }

    //setters

    public setTitle(newTitle:string):void
    {
        this.title = newTitle;
    }
    public setNPages(newNPages:number):void
    {
        this.nPages = newNPages;
    }
    public setIsbn(newIsbn:string):void
    {
        this.isbn = newIsbn;
    }
    public setAuthor(newAuthor:string):void
    {
        this.author =newAuthor;
    }
    public setEditorial(newEditorial:string):void
    {
        this.editorial = newEditorial;
    }
    
    //otras funciones

    public toString():string
    {
        
        return "Title - " + this.title + 
        "\n Number of pages - " + this.nPages +
        "\n ISBN - " + this.isbn +
        "\n Author - " + this.author +
        "\n Editorial - " + this.editorial;
    }

   
}