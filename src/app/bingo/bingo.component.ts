import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateBingo()
  }

  BINGO;

  words = [
    "Mamadera",
    "Chupete",
    "Cuna",
    "Calcetines",
    "Babero",
    "Mitones",
    "Body",
    "Tutitos",
    "Leche",
    "Osito",
    "Pañal",
    "Colado",
    "Papilla",
    "Juguetes",
    "Bañera",
    "Monitor",
    "Coche",
    "Mantita",
    "Gatear",
    "Talco",
    "Loción",
    "Enterito",
    "Silla",
    "Toallitas húmedas",
    "Mudador",
    "Fórmula",
    "Extractor leche",
    "Mamá",
    "Papá",
    "Bebé",
    "Móvil",
    "Gorro",
    "Llanto",
    "Cortauñas",
    "Termómetro",
    "Sábanas",
    "Colonia",
    "Portabebe",
    "Gatear",
    "Caminar",
    "Moises",
    "Jabón",
    "Balbucear",
    "Pelela",
    "Zapatitos",
    "Pilucho",
    "Hipoglós",
    "Andador",
    "Saltarín",
  ];

  generateBingo(){
    const t = this;
    var nPlates = 3;
    var numbers = {
      rows: 3,
      cols: 3
    };
    var n = 0;

    t.BINGO = [] 
  
    //let obj ={}
  
    while (n < nPlates){ 
      let plateObj = {}
      let nWords = t.words.slice();
      if (numbers.rows * numbers.cols > nWords.length) return alert("not sufficient words!);
      for (let r = 0; r < numbers.rows; r++) {
          let rObj = {
            c: []
          };
          for (let c = 0; c < numbers.cols; c++) {
            const random = Math.floor(Math.random() * nWords.length);
            const word = nWords[random]
            nWords = nWords.splice(random,1);
            rObj.c.push(word)
          }
          plateObj[r] = rObj
          
      }

      t.BINGO.push(plateObj)

      n++
    }
  
    console.log(t.BINGO);
  }

  getKeys(obj){
    return Object.keys(obj)
  }



}
