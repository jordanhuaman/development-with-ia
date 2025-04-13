import { CourseCreator } from "../../../../../src/Contexts/Mooc/Courses/application/CourseCreator";
import { Course } from "../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { CourseDuration } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration";
import { CourseName } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseName";
import { CourseRepository } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository"
import { CourseNameLenghtExceded } from "../../../../../src/Contexts/Mooc/Courses/domain/CouseNameLenghtExcceded";
import { CourseId } from "../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId";
import { Uuid } from "../../../../../src/Contexts/Shared/domain/value-objects/Uuid";
import { CourseRepositoryMock } from "../__mocks__/CourseRepositoryMock";

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
})

describe("CouseCreator", () => {
  it('should return a valid course', async () => {
    const id = "12345678-1234-1234-1234-123456789012";
    const name = "jordan";
    const duration = "20-1"

    const expectedCourse = new Course({
      id: new CourseId(id),
      name: new CourseName(name),
      duration: new CourseDuration(duration)
    });

    await creator.run({ id, name, duration });

    repository.assertSaveHaveBeenCalled(expectedCourse);
  })

  it('should throw error if course name length is exceeded', async () => {
    const id = '0766c602-d4d4-48b6-9d50-d3253123275e';
    const name = 'some-name'.repeat(30);
    const duration = 'some-duration';

    expect(() => {
      const course = new Course({
        id: new CourseId(id),
        name: new CourseName(name),
        duration: new CourseDuration(duration)
      });

      creator.run({ id, name, duration });

      repository.assertSaveHaveBeenCalled(course);
    }).toThrow(CourseNameLenghtExceded);
  });

})