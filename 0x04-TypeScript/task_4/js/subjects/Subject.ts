/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    // setter for teacher
    set setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}

