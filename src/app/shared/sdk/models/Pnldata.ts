/* tslint:disable */

declare var Object: any;
export interface PnldataInterface {
  "factdate"?: Date;
  "factdescription"?: string;
  "ideaid"?: number;
  "userprofileId"?: number;
  "id"?: number;
}

export class Pnldata implements PnldataInterface {
  "factdate": Date;
  "factdescription": string;
  "ideaid": number;
  "userprofileId": number;
  "id": number;
  constructor(data?: PnldataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pnldata`.
   */
  public static getModelName() {
    return "Pnldata";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pnldata for dynamic purposes.
  **/
  public static factory(data: PnldataInterface): Pnldata{
    return new Pnldata(data);
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
      name: 'Pnldata',
      plural: 'Pnldata',
      path: 'Pnldata',
      idName: 'id',
      properties: {
        "factdate": {
          name: 'factdate',
          type: 'Date'
        },
        "factdescription": {
          name: 'factdescription',
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
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
