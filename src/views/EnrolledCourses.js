import React, { useState, useEffect } from 'react';
import CourseTable from '../components/CourseTable';
import CourseService from '../services/CourseService';

export default function EnrolledCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    CourseService.getEnrolledCourses()
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  //   const courses = [
  //     {
  //       courseName: 'Omnis culpa sunt',
  //       courseLocation: 'Suite 976',
  //       courseContent: 'Suscipit rerum qui reiciendis temporibus necessitatibus.',
  //       teacherId: 0,
  //     },
  //     {
  //       courseName: 'Sed incidunt numquam',
  //       courseLocation: 'Apt. 657',
  //       courseContent:
  //         'Dolor veritatis corporis nesciunt consectetur eaque quasi architecto ullam.',
  //       teacherId: 78,
  //     },
  //   ];
  return (
    <div>
      <CourseTable courses={courses} />
    </div>
  );
}
