import { Course } from "../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { CourseRepository } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository";

export class CourseRepositoryMock implements CourseRepository{

  private saveMock: jest.Mock;

  constructor(){
    this.saveMock = jest.fn();
  }

  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  assertSaveHaveBeenCalled(expected:Course){
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }

}