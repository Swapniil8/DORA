import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() character:any = 'Swapnil'
  @Input() player:any;
  @Input() gameover:any
  @Output() changePlayerTo = new EventEmitter()
  ngOnInit(): void {
  }
  removePlayer(){
    this.player = ''
  }
  changePlayer(){
    this.changePlayerTo.emit("changePlayer")
  }

}
