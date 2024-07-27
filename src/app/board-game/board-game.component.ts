import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import urls from './urlsPieces.json'

@Component({
  selector: 'app-board-game',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './board-game.component.html',
  styleUrl: './board-game.component.css'
})
export class BoardGameComponent {

  // Este es un array vacio de posiciones segun las columnas q se utiliza posicionar las casillas en la cuadricula
  @Input() columnCounter = 8;

  @Input() pieces: string[] = [
    "r","n","b","q","k","b","n","r",
    "p","p","p","p","p","p","p","p",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "P","P","P","P","P","P","P","P",
    "R","N","B","Q","K","B","N","R"
  ];

  posStart: null | number = null;

  functionMove(index:number){
    if(this.posStart === null && this.pieces[index] !== ""){
      this.posStart = index;
    }
    else if(index !== this.posStart && this.posStart !== null){
      this.pieces[index] = this.pieces[this.posStart];
      this.pieces[this.posStart] = ""
      this.posStart = null
    }
  }

  isWhite(index: number){
    const isParColumn = Math.floor(index / this.columnCounter) % 2 == 0;
    if(isParColumn){
      return index % 2 ==0
    }
    else{
      return index % 2 !=0
    }
  }

  getPositionByIndexInGrid(index: number){
    const column = (this.columnCounter - Math.floor(index / this.columnCounter))
    const row = (index % this.columnCounter)+1;
    return `${column}/${(row)}`

  }

  getUrlImage(value: string): string | null{
    const urlsTyped: Record<string, string> = urls;
    
    return urlsTyped[value]
  }
}
