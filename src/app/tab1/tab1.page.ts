import { Component, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  result: string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Hola mundo',
      
      buttons: [
        
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
  
}
