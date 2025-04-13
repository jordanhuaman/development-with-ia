import { Uuid } from "../../../Shared/domain/value-objects/Uuid";
import { CourseId } from "../../Shared/domain/Courses/CourseId";

export class Course {
  id: CourseId;
  private name: string;
  private duration: string;

  constructor({ id, name, duration }: { id: CourseId, name: string, duration: string }) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

}