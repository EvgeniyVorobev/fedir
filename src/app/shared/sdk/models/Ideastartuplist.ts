/* tslint:disable */
import {
  Comments,
  Userprofile
} from '../index';

declare var Object: any;
export interface IdeastartuplistInterface {
  "created"?: Date;
  "createdbyid"?: number;
  "discussionopen"?: boolean;
  "estimatedbudget"?: number;
  "estimatedbudgetcurrecy"?: string;
  "estimatedteamsize"?: number;
  "estimatedtimeinmonths"?: number;
  "ideadescription"?: string;
  "ideatitle"?: string;
  "ispublic"?: boolean;
  "startupsize"?: string;
  "parentcode"?: number;
  "recordtype"?: string;
  "completeddate"?: Date;
  "visibleglobally"?: boolean;
  "id"?: number;
  comments?: Comments[];
  userprofile?: Userprofile;
}

export class Ideastartuplist implements IdeastartuplistInterface {
  "created": Date;
  "createdbyid": number;
  "discussionopen": boolean;
  "estimatedbudget": number;
  "estimatedbudgetcurrecy": string;
  "estimatedteamsize": number;
  "estimatedtimeinmonths": number;
  "ideadescription": string;
  "ideatitle": string;
  "ispublic": boolean;
  "startupsize": string;
  "parentcode": number;
  "recordtype": string;
  "completeddate": Date;
  "visibleglobally": boolean;
  "id": number;
  comments: Comments[];
  userprofile: Userprofile;
  constructor(data?: IdeastartuplistInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ideastartuplist`.
   */
  public static getModelName() {
    return "Ideastartuplist";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ideastartuplist for dynamic purposes.
  **/
  public static factory(data: IdeastartuplistInterface): Ideastartuplist{
    return new Ideastartuplist(data);
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
      name: 'Ideastartuplist',
      plural: 'Ideastartuplists',
      path: 'Ideastartuplists',
      idName: 'id',
      properties: {
        "created": {
          name: 'created',
          type: 'Date'
        },
        "createdbyid": {
          name: 'createdbyid',
          type: 'number'
        },
        "discussionopen": {
          name: 'discussionopen',
          type: 'boolean'
        },
        "estimatedbudget": {
          name: 'estimatedbudget',
          type: 'number'
        },
        "estimatedbudgetcurrecy": {
          name: 'estimatedbudgetcurrecy',
          type: 'string'
        },
        "estimatedteamsize": {
          name: 'estimatedteamsize',
          type: 'number'
        },
        "estimatedtimeinmonths": {
          name: 'estimatedtimeinmonths',
          type: 'number'
        },
        "ideadescription": {
          name: 'ideadescription',
          type: 'string'
        },
        "ideatitle": {
          name: 'ideatitle',
          type: 'string'
        },
        "ispublic": {
          name: 'ispublic',
          type: 'boolean'
        },
        "startupsize": {
          name: 'startupsize',
          type: 'string'
        },
        "parentcode": {
          name: 'parentcode',
          type: 'number'
        },
        "recordtype": {
          name: 'recordtype',
          type: 'string'
        },
        "completeddate": {
          name: 'completeddate',
          type: 'Date'
        },
        "visibleglobally": {
          name: 'visibleglobally',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        comments: {
          name: 'comments',
          type: 'Comments[]',
          model: 'Comments',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'ideaid'
        },
        userprofile: {
          name: 'userprofile',
          type: 'Userprofile',
          model: 'Userprofile',
          relationType: 'belongsTo',
                  keyFrom: 'createdbyid',
          keyTo: 'id'
        },
      }
    }
  }
}
