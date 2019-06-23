import { Component } from '@angular/core';
import {TocPageModule} from '../toc/toc.module';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
tocPage=TocPageModule;
  constructor() {}

}
