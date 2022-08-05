import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  hotline: string;

  constructor(private call: CallNumber, private alertController: AlertController) { }

  ngOnInit() {
  }

  emergencycall(){
    if(this.hotline != undefined){
    // this.call.callNumber(this.hotline,true) 
    console.log("Calling: " + this.hotline);
    }else{
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please select hotline to call',
      buttons: ["OK"],
    });
    alert.present();}

}
