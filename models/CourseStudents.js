'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseStudent = sequelize.define('CourseStudent', {
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'course_students'
  });
  CourseStudent.associate = function(models) {
    // associations can be defined here
  };
  return CourseStudent;
};