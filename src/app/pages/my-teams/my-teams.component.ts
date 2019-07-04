import { Component, OnInit } from '@angular/core';
import { IdeastartuplistApi, SDKBrowserModule, SDKStorage } from '../../shared/sdk';


@Component({
  selector: 'my-teams',
  templateUrl: 'my-teams.component.html'
})
export class MyTeamsComponent implements OnInit{
  constructor(){}

  ngOnInit(){
    console.log('i am alive :');
  }
}
