import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeadingComponent,
    LeftComponent,
    RightComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dora';
  leftCards:any;
  rightCards:any;
  constructor( private characters:CharactersService){}
  charactersOfDora:any;
  character:any = 'Swapnil'
  player:any = ''
  gameover:any;
  displayLeft:any;
  displayRight:any;
  player1:any = true;
  player2:any = false;
  drawCards:any;
  draw:any = false
  changeButton:any;
  clickable:any = false
  @ViewChild(LeftComponent) leftComponent!: LeftComponent;
  @ViewChild(RightComponent) rightComponent!: RightComponent;
  @ViewChild(HeadingComponent) headingComponent!: HeadingComponent;
  ngOnInit(): void {
    
    this.charactersOfDora = this.characters.characters
    this.suffle(this.charactersOfDora)
  }
  suffle(characters:any){
    let max = characters.length
    let min = 0
    for (let value of characters){
      let randomNumber1 = Math.floor(Math.random() * (max - min )) + min
      let randomNumber2 = Math.floor(Math.random() * (max - min )) + min 
      let otherCharacter = this.charactersOfDora[randomNumber1]
      this.charactersOfDora[randomNumber1] = this.charactersOfDora[randomNumber2]
      this.charactersOfDora[randomNumber2] = otherCharacter
    }
    this.distributeDeck()
  }
  distributeDeck(){
    let length = this.charactersOfDora.length
    let middle = (length)/2
    this.leftCards = this.charactersOfDora.slice(0, middle)
    this.rightCards = this.charactersOfDora.slice(middle,length)
  }
  clicked(){
    this.suffle(this.charactersOfDora)
  }
  attributeOutput(event:any){
    if(event.player == 'left' || event.player == 'right'){
      if(parseFloat(this.leftCards[0][event.name])>parseFloat(this.rightCards[0][event.name])){
        this.displayRight = false
        this.displayLeft = true
        this.player1 = true
        this.player2 = true
        this.draw = false
        setTimeout(() => {
          
          // let leftFirstCard = this.leftCards[0]
          // this.leftCards.push(leftFirstCard)
          // this.leftCards.push(this.rightCards[0])
          // this.leftCards.splice(0,1)
          // this.rightCards.splice(0,1)
        }, 1000);
        this.character = 'Swapnil'
        this.player = 'Swapnil'
        this.clickable = true
        if(this.rightCards.length == 1){
          this.gameover = true
          // this.changePlayerTo()
        }
        if(this.drawCards){
          this.leftCards.push(...this.drawCards)
        }
        this.drawCards = ''
        this.changeButton = true
        this.player = ''
      }else if(parseFloat(this.leftCards[0][event.name])<parseFloat(this.rightCards[0][event.name])){
        this.displayLeft = false
        this.displayRight = true
        this.player1 = true
        this.player2 = true
        this.draw = false
        setTimeout(() => {
          // let rightFirstCard = this.rightCards[0]
          // this.rightCards.push(rightFirstCard)
          // this.rightCards.push(this.leftCards[0])
          // this.rightCards.splice(0,1)
          // this.leftCards.splice(0,1)
        }, 1000);
        this.character = "player2"
        this.player = "Player2"
        this.changeButton = 'true'
        this.clickable = true
        if(this.leftCards.length == 1){
          this.gameover = true
          // this.changePlayerTo()
        }
        if(this.drawCards){
          this.rightCards.push(...this.drawCards)
          this.drawCards = ''
        }
        this.player = ''
      }else{
        this.draw = true
        this.drawCards = [this.leftCards[0],this.rightCards[0]]
        this.leftCards.splice(0,1)
        this.rightCards.splice(0,1)
        if(this.leftCards.length == 0 &&this.rightCards == 0){
          // this.draw = true 
          // this.gameover = false
        }else{
        }
      }
    }
    setTimeout(() => {
      this.leftComponent.ngOnInit()
      this.rightComponent.ngOnInit()
    }, 100);
    // this.headingComponent.removePlayer()
    // console.log("this.leftcards",this.leftCards)
    // console.log("this.rightcards",this.rightCards)
  }
  changePlayerTo(event?:any){
    this.changeButton = false
    this.clickable = false
    if(this.gameover){

    }else{
      if(this.displayLeft){
        this.player2= false
        let leftFirstCard = this.leftCards[0]
        this.leftCards.push(leftFirstCard)
        this.leftCards.push(this.rightCards[0])
        this.leftCards.splice(0,1)
        this.rightCards.splice(0,1)
        this.leftComponent.ngOnInit()
        this.rightComponent.ngOnInit()
      
  
      }
      else if(this.displayRight){
        this.player1 = false
        let rightFirstCard = this.rightCards[0]
        this.rightCards.push(rightFirstCard)
        this.rightCards.push(this.leftCards[0])
        this.rightCards.splice(0,1)
        this.leftCards.splice(0,1)
        this.leftComponent.ngOnInit()
        this.rightComponent.ngOnInit()
  
      }
    }
  }
}
