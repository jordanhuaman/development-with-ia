import { CourseCreator } from "../../../../../src/Contexts/Mooc/Courses/application/CourseCreator";
import { Course } from "../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { CourseRepository } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository"
import { CourseRepositoryMock } from "../__mocks__/CourseRepositoryMock";

describe("CouseCreator", () => {
  let repository: CourseRepositoryMock;
  beforeAll(()=>{
    repository = new CourseRepositoryMock();
  })
  it('should return a valid course', async () => {
    const creator = new CourseCreator(repository);
    const id = "212-2323";
    const name = "jordan";
    const duration = "20-1"
    const expectedCourse = new Course(id, name, duration);
    
    await creator.run(id, name, duration);

    repository.assertSaveHaveBeenCalled(expectedCourse);
  })
})