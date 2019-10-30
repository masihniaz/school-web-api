const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

// Models
const Student = require('./models').Student;
const Instructor = require('./models').Instructor;
const Course = require('./models').Course;
const CourseStudent = require('./models').CourseStudent;

// Routes
const studentRouter = require('./routes/studentRouter')(Student);
const instructorRouter = require('./routes/instructorRouter')(Instructor, Course);
const courseRouter = require('./routes/courseRouter')(Course, CourseStudent, Student);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', studentRouter);
app.use('/api', instructorRouter);
app.use('/api', courseRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Book API!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
