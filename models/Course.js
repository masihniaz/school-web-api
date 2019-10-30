'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    instructorId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Course.associate = function(models) {

    // Course belongs to one instructor
    Course.belongsTo(models.Instructor, { as: 'instructor', foreignKey: 'instructorId' });
    // Course belongs to many students
    Course.belongsToMany(models.Student, { as: 'students', through: 'course_students', foreignKey: 'courseId' });
    
  };
  return Course;
};