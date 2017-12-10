import { Component } from '@angular/core';

@Component({
  selector:'home-component',
  templateUrl:'home.component.html'
})

export class HomeComponent{
  private title:string = 'Home';
  private content:string = 'Content will go here';
  constructor(){
  }
}
