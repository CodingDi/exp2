import axios from 'axios';

export default class CourseService {
  static getAllCourses() {
    return axios.get(
      'https://bba2652e-da95-4d56-9a93-28de4c427108.mock.pstmn.io/courses'
    );
  }
  static getEnrolledCourses() {
    return axios.get(
      'https://bba2652e-da95-4d56-9a93-28de4c427108.mock.pstmn.io/courses'
    );
  }
}
