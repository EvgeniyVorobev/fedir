import { Component, OnInit } from '@angular/core';
import { PnldataApi } from '../../shared/sdk'; 


@Component({
  selector: 'my-expenses',
  templateUrl: 'my-expenses.component.html'
})
export class MyExpensesComponent implements OnInit{

    list = [];
  
    constructor(
      private pnldata:PnldataApi
    ) {
  
    }
  
    ngOnInit() {
      this.pnldata.find(
        {
          //fields: any;
          //include: any;
          //include: "userprofile",
          order: 'datehappened DESC',
          limit: 100,
          skip: 0,
          //offset?: any;
          where: {
            or: [{typeofdata:'fact'}]
          }
        }
        ).subscribe(resp => {
        console.log(resp)
        this.list = resp
      })
  
  
  
  //    this.comments.find().subscribe(comments => {
  //      console.log('comments :', comments);
  //    })
    }
  }
  