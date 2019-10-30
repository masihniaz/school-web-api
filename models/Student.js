'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Student.associate = function(models) {

    // student belongs to many courses
    Student.belongsToMany(models.Course, { as: 'courses', through: 'course_students', foreignKey: 'studentId' });

  };
  return Student;
};