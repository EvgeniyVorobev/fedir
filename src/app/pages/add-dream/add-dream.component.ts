import { Component } from '@angular/core';
import { IdeastartuplistApi, CommentsApi } from '../../shared/sdk';


@Component({
  selector: 'add-dream',
  templateUrl: 'add-dream.component.html'
})
export class AddDreamComponent {

  list = []

  constructor(
    private service: IdeastartuplistApi,
    private comments:CommentsApi
  ) {

  }

  ngOnInit() {
    this.service.find().subscribe(resp => {
      console.log(resp)

      this.list = resp
    })
    this.comments.find().subscribe(comments => {
      console.log('comments :', comments);
    })
  }
}


// controller('xacs',function($scope,IdeastartuplistApi){
//   IdeastartuplistApi.getbyid()
// })
