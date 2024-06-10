import { Component, EventEmitter, Input, Output, SimpleChanges, output } from '@angular/core';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
  name:any = 'DORA'
  height:any = '5 ft'
  weight:any = "35kgs"
  image:any = 'https://www.noggin.com/app/uploads/2019/06/Dora-Copy.jpg'
  iq:any;
  bravery:any;
  honesty:any;
  popularity:any;
  availble:any = false
  @Input() leftCards:any;
  @Input() character:any = 'Swapnil';
  @Input() displayLeft:any = false;
  @Output() attributeOutput = new EventEmitter()
  constructor(private characters:CharactersService){

  }
  ngOnInit(): void {
    console.log("this.leftcards",this.leftCards)
    if((this.leftCards && this.leftCards.length > 0)){
      this.name = this.leftCards[0].name
      this.height = this.leftCards[0].height
      this.weight = this.leftCards[0].weight
      this.image = this.leftCards[0].image
      this.iq = this.leftCards[0].iq
      this.bravery = this.leftCards[0].bravery
      this.honesty = this.leftCards[0].honesty
      this.popularity = this.leftCards[0].popularity
      

    }else{
      this.availble = true
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.name = this.leftCards[0].name
    // this.height = this.leftCards[0].height
    // this.weight = this.leftCards[0].weight
    // this.image = this.leftCards[0].image

  }
  attributeClicked(event:any){
    let data = {
      player:'left' ,
      name:event,
      value:this.leftCards[0][event]
    }
    this.attributeOutput.emit(data)
  }
}
