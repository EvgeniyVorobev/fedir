import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { IdeaCommentsComponent } from './idea-comments.component';
import { routing } from './idea-comments.routing';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [IdeaCommentsComponent]
})
export class IdeaCommentsModule {}
