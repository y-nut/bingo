import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

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

  nPlates: number = 3;
  bingoRows: number = 3;
  bingoCols: number = 3;

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

  fractional(n: number){
    console.log(n)
    let arr = new Array(n)

    if (!isNumber(n) || n < 0) return null
 
    let num: number = n
   while(n > 1){
     num *= (n-1)
    n--
   }
   return num
  }

  permutation(chosen: number){
    const t = this
    let upper = this.fractional(t.words.length);
    console.log(upper)

    let lower: number = this.fractional( (t.words.length - chosen) )

    if (!upper || !lower) return null
    return upper / lower
  }

  generateBingo(){
    const t = this;
    //var nPlates = 20;


    const possibles = this.permutation(t.bingoCols * t.bingoRows );

    if (!possibles) return alert('not possible')
    if (t.nPlates > possibles) return alert('too many')

    console.log('possibles', possibles)

    var numbers = {
      rows: t.bingoRows,
      cols: t.bingoCols
    }; 
    var n = 0;

    t.BINGO = [] 
  
    //let obj ={}
  
    while (n < t.nPlates){ 
      let plateObj = {}
      let nWords = t.words.slice();
      
      if (numbers.rows * numbers.cols > nWords.length) return alert("not sufficient words!");
      for (let r = 0; r < numbers.rows; r++) {
          let rObj = {
            c: []
          };
          for (let c = 0; c < numbers.cols; c++) {
            const random = Math.floor(Math.random() * nWords.length);
           // console.log('random', random, nWords.length)
            const word = nWords[random]
            //console.log('word', word)
            //console.log('3',nWords, random)
            nWords.splice(random,1).slice();

          //  console.log('2',nWords)
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
