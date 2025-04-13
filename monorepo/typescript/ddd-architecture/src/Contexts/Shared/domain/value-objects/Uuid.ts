import uuid from "uuid"
import { InvalidArgumentError } from "./InvalidArgumentError";

export class Uuid{
  readonly value: string;

  constructor(value: string){
    this.value = value;
  }

  private ensureIsValidId(id: string){
    if(!uuid.validate(id)){
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
  toString(){
    return this.value;
  }
}