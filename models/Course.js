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
    Course.hasMany(models.CourseStudent, { as: 'students', foreignKey: 'courseId'});
  };
  return Course;
};