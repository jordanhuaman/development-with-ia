import { StringValueObject } from "../../../Shared/domain/value-objects/StringValueObject";
import { CourseNameLenghtExceded } from "./CouseNameLenghtExcceded";

export class CourseName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLenghtIsLessThan30Characters(value);
  }

  private ensureLenghtIsLessThan30Characters(value: string):void{
    if(value.length >30){
      throw new CourseNameLenghtExceded(`This course Name <${value}> has more than 30 characters.`)
    }
  }
}