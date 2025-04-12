import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";
import { CourseCreatorRequest } from "./CouseCreatorRequest";

export class CourseCreator {
  private readonly repository: CourseRepository;
  constructor(repository: CourseRepository) {
    this.repository = repository;
  }
  async run(request:CourseCreatorRequest): Promise<void> {
    const course = new Course(request.id, request.name, request.duration);
    return this.repository.save(course);
  }
}