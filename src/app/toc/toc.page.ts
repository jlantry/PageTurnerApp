import { Component, OnInit } from '@angular/core';
import {Chapter1Page} from '../chapter1/chapter1.page';
import {Chapter2Page} from '../chapter2/chapter2.page';
import {Chapter3Page} from '../chapter3/chapter3.page';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
// chap1=Chapter1Page;
// chap2=Chapter2Page;
// chap3=Chapter3Page;
  constructor() {}

  ionicViewDidLoad(){
    console.log('ionicViewDidLoad Table Of Contents');
  }
  ngOnInit() {}

}
