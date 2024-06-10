import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
  image:any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-QItaQCiMZ_mI8ZKGbVwRWt05-uE0UelFw&s'
  name:any = 'DORA'
  height:any = '5 ft'
  weight:any = "35kgs"
  iq:any;
  bravery:any;
  honesty:any;
  popularity:any;
  available:any = false
  @Input() rightCards:any;
  @Input() character:any
  @Input() displayRight:any = false;
  @Output() attributeOutput = new EventEmitter()
  constructor(private characters:CharactersService){

  }
  ngOnInit(): void {
    console.log("this.rightcards",this.rightCards)
    if(this.rightCards && this.rightCards.length > 0){
      this.name = this.rightCards[0].name
      this.height = this.rightCards[0].height
      this.weight = this.rightCards[0].weight
      this.image = this.rightCards[0].image
      this.iq = this.rightCards[0].iq
      this.bravery = this.rightCards[0].bravery
      this.honesty = this.rightCards[0].honesty
      this.popularity = this.rightCards[0].popularity
    }else{
      this.available = true
    }
  }
  attributeClicked(event:any){
    let data = {
      player:'right',
      name:event,
      value:this.rightCards[0][event]
    }
    this.attributeOutput.emit(data)
  }

}
