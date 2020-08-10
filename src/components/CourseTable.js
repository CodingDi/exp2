import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CourseTable(props) {
  //外部函数
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Course Content</TableCell>
            <TableCell align="right">Course Location</TableCell>
            <TableCell align="right">TeacherID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{convert()}</TableBody>
      </Table>
    </TableContainer>
  );

  function convert() {
    //内部函数
    return props.courses.map((course, i) => (
      <TableRow key={course.courseName + course.teacherId}>
        <TableCell component="th" scope="row">
          {i + 1}
        </TableCell>
        <TableCell align="right">{course.courseName}</TableCell>
        <TableCell align="right">{course.courseContent}</TableCell>
        <TableCell align="right">{course.courseLocation}</TableCell>
        <TableCell align="right">{course.teacherId}</TableCell>
      </TableRow>
    ));
  }
}