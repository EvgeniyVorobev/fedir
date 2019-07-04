/* tslint:disable */
import {
  AccessToken,
  Comments
} from '../index';

declare var Object: any;
export interface UserprofileInterface {
  "isteam"?: boolean;
  "teamownerid"?: number;
  "image"?: string;
  "teammembers"?: string;
  "userbadge"?: string;
  "commentmemo"?: string;
  "location"?: string;
  "picture"?: string;
  "realm"?: string;
  "username"?: string;
  "challenges"?: any;
  "email": string;
  "emailVerified"?: boolean;
  "status"?: string;
  "created"?: Date;
  "lastUpdated"?: Date;
  "id"?: number;
  "password"?: string;
  accessTokens?: AccessToken[];
  comments?: Comments[];
}

export class Userprofile implements UserprofileInterface {
  "isteam": boolean;
  "teamownerid": number;
  "image": string;
  "teammembers": string;
  "userbadge": string;
  "commentmemo": string;
  "location": string;
  "picture": string;
  "realm": string;
  "username": string;
  "challenges": any;
  "email": string;
  "emailVerified": boolean;
  "status": string;
  "created": Date;
  "lastUpdated": Date;
  "id": number;
  "password": string;
  accessTokens: AccessToken[];
  comments: Comments[];
  constructor(data?: UserprofileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Userprofile`.
   */
  public static getModelName() {
    return "Userprofile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Userprofile for dynamic purposes.
  **/
  public static factory(data: UserprofileInterface): Userprofile{
    return new Userprofile(data);
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
      name: 'Userprofile',
      plural: 'Userprofiles',
      path: 'Userprofiles',
      idName: 'id',
      properties: {
        "isteam": {
          name: 'isteam',
          type: 'boolean'
        },
        "teamownerid": {
          name: 'teamownerid',
          type: 'number'
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "teammembers": {
          name: 'teammembers',
          type: 'string'
        },
        "userbadge": {
          name: 'userbadge',
          type: 'string'
        },
        "commentmemo": {
          name: 'commentmemo',
          type: 'string'
        },
        "location": {
          name: 'location',
          type: 'string'
        },
        "picture": {
          name: 'picture',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "credentials": {
          name: 'credentials',
          type: 'any'
        },
        "challenges": {
          name: 'challenges',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "lastUpdated": {
          name: 'lastUpdated',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'AccessToken[]',
          model: 'AccessToken',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        comments: {
          name: 'comments',
          type: 'Comments[]',
          model: 'Comments',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userprofileId'
        },
      }
    }
  }
}
