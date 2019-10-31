const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const jwtOpt = { session: false };

// Models
const Student = require('./models').Student;
const Instructor = require('./models').Instructor;
const Course = require('./models').Course;
const CourseStudent = require('./models').CourseStudent;
const User = require('./models').User;

// initialize passport
require('./config/passport')(passport, User);

// Routes
const studentRouter = require('./routes/studentRouter')(Student, Course);
const instructorRouter = require('./routes/instructorRouter')(Instructor, Course);
const courseRouter = require('./routes/courseRouter')(Course, CourseStudent, Student);
const authRouter = require('./routes/authRouter')(User);

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', authRouter);
app.use(passport.authenticate('jwt', jwtOpt));
app.use('/api', studentRouter);
app.use('/api', instructorRouter);
app.use('/api', courseRouter);

app.get('/', (req, res) => {
  res.send('School API!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
