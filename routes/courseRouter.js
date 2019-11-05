const express = require('express');
const { validationResult } = require('express-validator');
const newCourseValidation = require('../validations/newCourseValidation');
const assignStudentToCourseValidation = require('../validations/assignStudentToCourseValidation');
const unassignStudentFromCourseValidation = require('../validations/unassignStudentFromCourseValidation');

function routes(Course, CourseStudent, Student) {
  const courseRouter = express.Router();

  courseRouter.route('/courses')
    .get(async (req, res) => {
      const courses = await Course.findAll();
      // 200 OK
      return res.status(200).json(courses);
    });
  // add new course
  courseRouter.route('/course')
    .post(newCourseValidation, async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      try {
        // 201 created
        const course = await Course.create(req.body);
        return res.status(201).json(course);
      } catch (e) {
        console.log(e);
        // 500 internal server error
        return res.status(500);
      }
    });

  // course resource by id
  courseRouter.route('/course/:id')
    // get course by id
    .get(async (req, res) => {
      const course = await Course.findOne({ where: { id: req.params.id } });

      if (!course) {
        return res.status(404).json(course);
      }
      // 200 OK
      return res.status(200).json(course);
    })
    // update course by id
    .patch(async (req, res) => {
      if (req.body.id) {
        return res.status(400).json({ error: 'id cannot be updated.' });
      }

      const course = await Course.findOne({ where: { id: req.params.id } });
      if (course) {
        course.update(req.body);
        // 200 OK
        return res.status(200).json(course);
      }
      // 404 bad request
      return res.status(404).json({ error: `cannot find studnet with id ${req.params.id}` });
    })
    // delete course by id
    .delete(async (req, res) => {
      const course = await Course.findOne({ where: { id: req.params.id } });

      if (course) {
        // hard delete
        await course.destroy({ force: true });
        // 200 OK
        return res.status(200).json(course);
      }
      // 404 bad request
      return res.status(404).json({ error: `cannot find course with id ${req.params.id}.` });
    });

  courseRouter.route('/course/assign')
    // assign student to course
    .post(assignStudentToCourseValidation, async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      const { studentId, courseId } = req.body;

      const courseStudent = await CourseStudent.findOne({ where: { studentId, courseId } });

      if (courseStudent) {
        // 400 bad request, student exist in the course
        return res.status(400).json({ error: 'student exist in the course' });
      }
      const newCourseStudent = await CourseStudent.create(req.body);
      return res.status(201).json(newCourseStudent);
    });

  courseRouter.route('/course/unassign')
  // assign student to course
  .post(unassignStudentFromCourseValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 422 Unprocessable Entity
      return res.status(422).json({ errors: errors.array() });
    }

    const { studentId, courseId } = req.body;

    const courseStudent = await CourseStudent.findOne({ where: { studentId, courseId } });

    if (!courseStudent) {
      // 404 not found, student or course does not exist
      return res.status(404).json({ error: 'Course or student does not exist' });
    }
    await courseStudent.destroy({ force: true });
        // 200 OK
    return res.status(200).json(courseStudent);
  });

  courseRouter.route('/course/:id/students')
    // get course students by course id
    .get(async (req, res) => {
      const course = await Course.findOne({ where: { id: req.params.id }, include: [{ model: Student, as: 'students' }] });
      return res.status(200).json(course);
    });

  return courseRouter;
}

module.exports = routes;
