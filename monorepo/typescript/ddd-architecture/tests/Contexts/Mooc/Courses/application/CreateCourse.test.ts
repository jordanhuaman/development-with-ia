import { CourseCreator } from "../../../../../src/Contexts/Mooc/Courses/application/CourseCreator";
import { Course } from "../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { CourseRepository } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository"
import { CourseId } from "../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId";
import { Uuid } from "../../../../../src/Contexts/Shared/domain/value-objects/Uuid";
import { CourseRepositoryMock } from "../__mocks__/CourseRepositoryMock";

describe("CouseCreator", () => {
  let repository: CourseRepositoryMock;
  beforeAll(() => {
    repository = new CourseRepositoryMock();
  })
  it('should return a valid course', async () => {
    const creator = new CourseCreator(repository);
    const id = "12345678-1234-1234-1234-123456789012";
    const name = "jordan";
    const duration = "20-1"

    const expectedCourse = new Course({
      id: new CourseId(id),
      name,
      duration
    });

    await creator.run({ id, name, duration });

    repository.assertSaveHaveBeenCalled(expectedCourse);
  })
})