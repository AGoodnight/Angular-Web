import { Component } from '@angular/core';

@Component({
  selector:'home-component',
  templateUrl:'home.component.html'
})

export class HomeComponent{
  private title:string = '';
  private content:string = './assets/img/sofia.jpg';
  constructor(){
  }
}
