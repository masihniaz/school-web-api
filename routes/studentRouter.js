const express = require('express');
const {validationResult } = require('express-validator');
const newStudentValidation = require('../validations/newStudentValidation');

function routes(Student) {

  const studentRouter = express.Router();

  // get list of students
  studentRouter.route('/students')
    .get(async(req, res) => {

      const students = await Student.findAll();
      // 200 OK
      return res.status(200).json(students);

    }
  );

  // add new student
  studentRouter.route('/student')
    .post(newStudentValidation, async(req, res) => {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      try {

        const students = await Student.findAll({ where: { email: req.body.email}});

        if(students.length) {
          // 409 conflict
          return res.status(409).json({error: `Student with email id ${req.body.email} already exists`});
        }

        // 201 created
        const student = await Student.create(req.body);
        return res.status(201).json(student);

      } catch(e) {
        
        console.log(e);
        // 500 internal server error
        return res.status(500);

      }
    });
  
  // student resource by id
  studentRouter.route('/student/:id')
    // get student by id
    .get(async(req, res) => {

      const student = await Student.findOne({ where: { id: req.params.id}});

      if(!student) {
        return res.status(404).json(student);
      }
      // 200 OK
      return res.status(200).json(student);

    })
    // update student by id
    .patch(async(req, res) => {
      
      if(req.body.id) {
        return res.status(400).json({ error: 'id cannot be updated.'})
      }

      const student = await Student.findOne({ where: { id: req.params.id }});
      
      if(student) {
        student.update(req.body);
        // 200 OK
        return res.status(200).json(student);
      } else {

        // 404 bad request
        return res.status(404).json({ error: `cannot find studnet with id ${req.params.id}`});
      }

    })
    // delete student by id
    .delete(async(req, res) => {

      const student = await Student.findOne({ where: { id: req.params.id}});

      if(student) {
        
        // hard delete
        await student.destroy({force: true});
        // 200 OK
        return res.status(200).json(student);

      } else {

        // 404 bad request
        return res.status(404).json({ error: `cannot find student with id ${req.params.id}.`});

      }

    });

  return studentRouter;

}

module.exports = routes;
