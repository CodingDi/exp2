import React from 'react';
import CourseTable from '../components/CourseTable';
import CourseService from '../services/CourseService';
export default class AllCourses extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    CourseService.getAllCourses()
      //promise.then链式表达
      .then(response => {
        this.setState({
          courses: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  courses = [
    {
      courseName: 'Omnis culpa sunt',
      courseLocation: 'Suite 976',
      courseContent: 'Suscipit rerum qui reiciendis temporibus necessitatibus.',
      teacherId: 59,
    },
    {
      courseName: 'Sed incidunt numquam',
      courseLocation: 'Apt. 657',
      courseContent:
        'Dolor veritatis corporis nesciunt consectetur eaque quasi architecto ullam.',
      teacherId: 78,
    },
  ];
  render() {
    return (
      <div>
        <CourseTable courses={this.state.courses} />
      </div>
    );
  }
}
