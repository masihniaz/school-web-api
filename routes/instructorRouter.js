const express = require('express');
const { validationResult } = require('express-validator');
const newInstructorValidation = require('../validations/newInstructorValidation');
const assignInstructorToCourseValidation = require('../validations/assignInstructorToCourseValidation');

function routes(Instructor, Course) {
  const instructorRouter = express.Router();

  // get list of instructors
  instructorRouter.route('/instructors')
    .get(async (req, res) => {
      const instructors = await Instructor.findAll();
      // 200 OK
      return res.status(200).json(instructors);
    });

  // add new instructor
  instructorRouter.route('/instructor')
    .post(newInstructorValidation, async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      try {
        const instructors = await Instructor.findAll({ where: { email: req.body.email } });

        if (instructors.length) {
          // 409 conflict
          return res.status(409).json({ error: `Instructor with email id ${req.body.email} already exists` });
        }

        // 201 created
        const instructor = await Instructor.create(req.body);
        return res.status(201).json(instructor);
      } catch (e) {
        console.log(e);
        // 500 internal server error
        return res.status(500);
      }
    });

  // assign instructor to course
  instructorRouter.route('/instructor/assign')
    .post(assignInstructorToCourseValidation, async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      const { instructorId, courseId } = req.body;

      const course = Course.findOne({ where: { id: courseId } });

      if (course) {
        course.update({ instructorId });
        return res.status(200).json(course);
      }
      return res.status(404).json({ error: `Course with course id ${courseId} does not exist` });
    });

  // instructor resource by id
  instructorRouter.route('/instructor/:id')
    // get instructor by id
    .get(async (req, res) => {
      const instructor = await Instructor.findOne({ where: { id: req.params.id } });

      if (!instructor) {
        return res.status(404).json(instructor);
      }
      // 200 OK
      return res.status(200).json(instructor);
    })
    // update instructor by id
    .patch(async (req, res) => {
      if (req.body.id) {
        return res.status(400).json({ error: 'id cannot be updated.' });
      }

      const instructor = await Instructor.findOne({ where: { id: req.params.id } });
      if (instructor) {
        instructor.update(req.body);
        // 200 OK
        return res.status(200).json(instructor);
      }
      // 404 bad request
      return res.status(404).json({ error: `cannot find instructor with id ${req.params.id}` });
    })
    // delete instructor by id
    .delete(async (req, res) => {
      const instructor = await Instructor.findOne({ where: { id: req.params.id } });

      if (instructor) {
        // hard delete
        await instructor.destroy({ force: true });
        // 200 OK
        return res.status(200).json(instructor);
      }
      // 404 bad request
      return res.status(404).json({ error: `cannot find instructor with id ${req.params.id}.` });
    });
  // get instructor with courses
  instructorRouter.route('/instructor/:id/courses')
    .get(async (req, res) => {
      const instructor = await Instructor.findOne({ where: { id: req.params.id }, include: [{ model: Course, as: 'courses' }] });
      return res.status(200).json(instructor);
    });

  return instructorRouter;
}

module.exports = routes;
