/* tslint:disable */

declare var Object: any;
export interface ObjectrelationInterface {
  "ideaid"?: number;
  "ownerapproved"?: boolean;
  "startupid"?: number;
  "id"?: number;
}

export class Objectrelation implements ObjectrelationInterface {
  "ideaid": number;
  "ownerapproved": boolean;
  "startupid": number;
  "id": number;
  constructor(data?: ObjectrelationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Objectrelation`.
   */
  public static getModelName() {
    return "Objectrelation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Objectrelation for dynamic purposes.
  **/
  public static factory(data: ObjectrelationInterface): Objectrelation{
    return new Objectrelation(data);
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
      name: 'Objectrelation',
      plural: 'Objectrelations',
      path: 'Objectrelations',
      idName: 'id',
      properties: {
        "ideaid": {
          name: 'ideaid',
          type: 'number'
        },
        "ownerapproved": {
          name: 'ownerapproved',
          type: 'boolean'
        },
        "startupid": {
          name: 'startupid',
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
