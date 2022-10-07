import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cant = 0;
  constructor() {
    this.cant++;
  }

  texblock;
  onTextboxInput(event){
    console.log(event);
    this.texblock = event.target.value;
  }

}
