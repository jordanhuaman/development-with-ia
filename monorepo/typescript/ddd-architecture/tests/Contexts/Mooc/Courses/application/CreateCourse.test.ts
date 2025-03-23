import { CourseCreator } from "../../../../../src/Contexts/Mooc/Courses/application/CourseCreator";
import { Course } from "../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { CourseRepository } from "../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository"

describe("CouseCreator", () => {
  it('should return a valid course', async () => {
    const repository: CourseRepository = {
      save: jest.fn()
    };
    const creator = new CourseCreator(repository);
    const id = "212-2323";
    const name = "jordan";
    const duration = "20-1"
    const expectedCourse = new Course(id, name, duration);
    await creator.run(id, name, duration);

    expect(repository.save).toHaveBeenCalledWith(expectedCourse);
  })
})