import {Person} from "./person"

//clase(he tenido que poner export directamente en la clase,
//ya que no se porque no me dejaba exportarlo poniendolo al final)

export class contacts
{
    //atributos públicos

    public people:Person[];

    //constructores públicos

    public constructor()
    {
        this.people;
    } 

    //métodos públicos
    printCalendar()
    {
        console.log(this.people)
    }

}

