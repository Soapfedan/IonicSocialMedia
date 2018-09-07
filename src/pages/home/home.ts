import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  app_id;
  page_type;
  url;
  redirect_url;
  text;
  constructor(public navCtrl: NavController) {
    this.app_id = "5303202981";
    this.page_type = "popup";
    this.url ="www.cercamarche.it";
    this.text = "CercaMarche Il Portale B2B delle Aziende Marchigiane http://www.cercamarche.it/"
    //this.redirect_url = "http://www.cercamarche.it";
  }

}
