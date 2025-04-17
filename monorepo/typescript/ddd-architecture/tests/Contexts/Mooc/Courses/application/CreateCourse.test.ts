import { CourseCreator } from "../../../../../src/Contexts/Mooc/Courses/application/CourseCreator";
import { CourseNameLenghtExceded } from "../../../../../src/Contexts/Mooc/Courses/domain/CouseNameLenghtExcceded";
import { CourseRepositoryMock } from "../__mocks__/CourseRepositoryMock";
import { CourseMother } from "../domain/CourseMother";
import { CreateCourseRequestMother } from "./CreateCourseRequestMother";

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
})

describe("CouseCreator", () => {
  it('should return a valid course', async () => {
    const request = CreateCourseRequestMother.random();

    const course = CourseMother.fromRequest(request);

    await creator.run(request);

    repository.assertSaveHaveBeenCalled(course)
  })

  it('should throw error if course name length is exceeded', async () => {
    expect(() => {
      const request = CreateCourseRequestMother.invalidRequest();

      const course = CourseMother.fromRequest(request);

      creator.run(request);

      repository.assertSaveHaveBeenCalled(course);
    }).toThrow(CourseNameLenghtExceded);
  });

})