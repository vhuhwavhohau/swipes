import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  list = [];
  temp =[];
  constructor(public navCtrl: NavController) {
  
  this.list= [{variable:'food'},
              {variable:'toiletry'},
              {variable:'books'},
              {variable:'ice pop'},
              {variable:'ice cream'},
              {variable:'kfc'},
              {variable:'cold drink'},
              {variable:'alcohol'},
              {variable:'clothes'}];
  }
 
  

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    this.list
  }



  delete(item:string){

    for(let items of this.list){
      if(items.variable != item){
      this.temp.push({variable:items.variable});
      }
    }
   this.list = this.temp;
   this.temp=[];

  }

}
