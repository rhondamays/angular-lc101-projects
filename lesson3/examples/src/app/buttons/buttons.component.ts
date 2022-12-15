import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   //inactive: boolean = false;
   goldInactive: boolean = false;
   silverInactive = false;
   copperInactive = false;


   constructor() { }

   ngOnInit() { }

   resetButton() {
      if (this.goldInactive && this.silverInactive && this.copperInactive) {
         this.goldInactive = !this.goldInactive;
         this.silverInactive = !this.silverInactive;
         this.copperInactive = !this.copperInactive;
      } else if (this.goldInactive && this.silverInactive) {
         this.goldInactive = !this.goldInactive;
         this.silverInactive = !this.silverInactive;
      } else if (this.goldInactive && this.copperInactive) {
         this.goldInactive = !this.goldInactive;
         this.copperInactive = !this.copperInactive;
      } else if (this.silverInactive && this.copperInactive) {
         this.silverInactive = !this.silverInactive;
         this.copperInactive = !this.copperInactive;
      } else if (this.goldInactive) {
         this.goldInactive = !this.goldInactive;
      } else if (this.silverInactive) {
         this.silverInactive = !this.silverInactive;
      } else {
         this.copperInactive = !this.copperInactive;
      }
   }
}