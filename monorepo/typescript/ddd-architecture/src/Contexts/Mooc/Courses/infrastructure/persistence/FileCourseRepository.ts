import BSON, { deserialize } from 'bson';
import fs from 'fs';
import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';

export class FileCourseRepository implements CourseRepository {
  private FILE_PATH = `${__dirname}/courses`;

  async save(course: Course): Promise<void> {
    fs.promises.writeFile(this.filePath(course.id), BSON.serialize(course));
  }
  async search(couseId: string): Promise<Course> {
    const courseData = await fs.promises.readFile(this.filePath(couseId));
    const { _id:id, _name:name, _duration:duration } = deserialize(courseData);
    return new Course(id, name, duration);
  }
  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
