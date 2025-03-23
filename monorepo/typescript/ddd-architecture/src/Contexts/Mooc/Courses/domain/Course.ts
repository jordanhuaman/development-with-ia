export class Course {
  private _id: string;
  private _name: string;
  private _duration: string;

  constructor(id: string, name: string, duration: string) {
    this._id = id;
    this._name = name;
    this._duration = duration;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }
}