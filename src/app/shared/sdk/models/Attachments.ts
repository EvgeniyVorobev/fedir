/* tslint:disable */

declare var Object: any;
export interface AttachmentsInterface {
  "id"?: number;
}

export class Attachments implements AttachmentsInterface {
  "id": number;
  constructor(data?: AttachmentsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Attachments`.
   */
  public static getModelName() {
    return "Attachments";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Attachments for dynamic purposes.
  **/
  public static factory(data: AttachmentsInterface): Attachments{
    return new Attachments(data);
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
      name: 'Attachments',
      plural: 'Attachments',
      path: 'Attachments',
      idName: 'id',
      properties: {
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
