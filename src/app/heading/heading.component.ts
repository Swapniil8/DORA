import { Component, Input, Output,EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() changeButton:any;
  @Input() character:any = 'Swapnil'
  @Input() player:any;
  @Input() gameover:any
  @Input() draw:any
  @Output() changePlayerTo = new EventEmitter()
  ngOnInit(): void {
    this.changeButton = this.changeButton
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("simplechanges",changes)
  }
  removePlayer(){
    this.player = ''
  }
  changePlayer(){
    this.changeButton = false
    this.changePlayerTo.emit("changePlayer")
  }
  clicked(){
    console.log("changebutton",this.changeButton)
  }

}
