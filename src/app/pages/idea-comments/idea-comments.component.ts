import { Component } from '@angular/core';
import { CommentsApi } from '../../shared/sdk'; 

@Component({
  selector: 'app-idea-comments',
  templateUrl: 'idea-comments.component.html',
  styleUrls: ['idea-comments.component.scss']
})
export class IdeaCommentsComponent {

  list = [];

  constructor(
    private comments:CommentsApi
  ) 
  
  {

  }

  ngOnInit() {
    this.comments.find(
      {
        //fields: any;
        //include: any;
        include: "userprofile",
        order: 'id DESC',
        limit: 100,
        skip: 0,
        //offset?: any;
        where: {
          //or: [{visibleglobally:1},{visibleglobally:true}]
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

