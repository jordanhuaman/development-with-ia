import { Course } from "../../../../../src/Contexts/Mooc/Courses/domain/Course"
import { FileCourseRepository } from "../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository";
import { CourseId } from "../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId";
import { Uuid } from "../../../../../src/Contexts/Shared/domain/value-objects/Uuid";

describe("FileCouseRepository", () => {
  it('sould have a course', async () => {
    const expectedCourse = new Course({
      id: new CourseId("0766c602-d4d4-48b6-9d50-d3253123275e"),
      duration: "duration",
      name: "name"
    });
    const repository = new FileCourseRepository();

    await repository.save(expectedCourse);

    const course = await repository.search("0766c602-d4d4-48b6-9d50-d3253123275e");
    expect(course).toEqual(expectedCourse);
  })
})