/* tslint:disable */
import { Injectable } from '@angular/core';
import { AccessToken } from '../../models/AccessToken';
import { Userprofile } from '../../models/Userprofile';
import { Comments } from '../../models/Comments';
import { Ideastartuplist } from '../../models/Ideastartuplist';
import { Objectrelation } from '../../models/Objectrelation';
import { Pnldata } from '../../models/Pnldata';
import { Attachments } from '../../models/Attachments';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    AccessToken: AccessToken,
    Userprofile: Userprofile,
    Comments: Comments,
    Ideastartuplist: Ideastartuplist,
    Objectrelation: Objectrelation,
    Pnldata: Pnldata,
    Attachments: Attachments,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
