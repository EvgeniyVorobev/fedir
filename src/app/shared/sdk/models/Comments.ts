/* tslint:disable */
import {
  Userprofile
} from '../index';

declare var Object: any;
export interface CommentsInterface {
  "commenttext"?: string;
  "ideaid"?: number;
  "userprofileId"?: number;
  "commentdatetime"?: Date;
  "feedbackrank"?: number;
  "id"?: number;
  userprofile?: Userprofile;
}

export class Comments implements CommentsInterface {
  "commenttext": string;
  "ideaid": number;
  "userprofileId": number;
  "commentdatetime": Date;
  "feedbackrank": number;
  "id": number;
  userprofile: Userprofile;
  constructor(data?: CommentsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Comments`.
   */
  public static getModelName() {
    return "Comments";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Comments for dynamic purposes.
  **/
  public static factory(data: CommentsInterface): Comments{
    return new Comments(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Comments',
      plural: 'Comments',
      path: 'Comments',
      idName: 'id',
      properties: {
        "commenttext": {
          name: 'commenttext',
          type: 'string'
        },
        "ideaid": {
          name: 'ideaid',
          type: 'number'
        },
        "userprofileId": {
          name: 'userprofileId',
          type: 'number'
        },
        "commentdatetime": {
          name: 'commentdatetime',
          type: 'Date'
        },
        "feedbackrank": {
          name: 'feedbackrank',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        userprofile: {
          name: 'userprofile',
          type: 'Userprofile',
          model: 'Userprofile',
          relationType: 'belongsTo',
                  keyFrom: 'userprofileId',
          keyTo: 'id'
        },
      }
    }
  }
}
