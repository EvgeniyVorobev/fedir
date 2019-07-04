import { Component } from '@angular/core';
import { IdeastartuplistApi, CommentsApi } from '../../shared/sdk'; //CommentsApi dont needed indeed 


@Component({
  selector: 'all-publicideas',
  templateUrl: 'all-publicideas.component.html'
})
export class AllPublicideasComponent {

  list = [];

  constructor(
    private service: IdeastartuplistApi,
    private comments:CommentsApi
  ) {

  }

  ngOnInit() {
    this.service.find(
      {
        //fields: any;
        //include: any;
        include: "userprofile",
        order: 'id DESC',
        limit: 10,
        skip: 0,
        //offset?: any;
        where: {
          or: [{visibleglobally:1},{visibleglobally:true}]
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


