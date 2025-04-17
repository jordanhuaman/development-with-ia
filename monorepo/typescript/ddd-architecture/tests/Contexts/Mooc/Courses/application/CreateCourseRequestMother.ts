import { CourseCreatorRequest } from "../../../../../src/Contexts/Mooc/Courses/application/CouseCreatorRequest";
import { CourseDuration } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration";
import { CourseName } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseName";
import { CourseId } from "../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId";
import { CourseIdMother } from "../../Shared/domain/Courses/CourseIdMother";
import { CourseDurationMother } from "../domain/CourseDurationMother";
import { CourseNameMother } from "../domain/CourseNameMother";

export class CreateCourseRequestMother{
  static create(id: CourseId, name: CourseName, duration: CourseDuration): CourseCreatorRequest {
    return { id: id.value, name: name.value, duration: duration.value };
  }

  static random(): CourseCreatorRequest {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }

  static invalidRequest(): CourseCreatorRequest {
    return {
      id: CourseIdMother.random().value,
      name: CourseNameMother.invalidName(),
      duration: CourseDurationMother.random().value
    };
  }
}