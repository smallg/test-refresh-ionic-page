import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    homeRoot = 'HomePage';
    aboutRoot = 'AboutPage';
    contactRoot = 'ContactPage';
    mySelectedIndex = 0;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }

}
