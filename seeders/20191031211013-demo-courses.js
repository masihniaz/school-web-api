'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [
      {
        name: 'Node.Js: The Big Picture',
        description: 'In this course, Node.js: The Big Picture, we begin with the places you\'ll commonly find Node being used, its technology origins, and a brief history of the project. We then examine what it means to write asynchronous code, and how Node both expects and embraces this approach with its own APIs and constructs. From there, we look at how to both modularize your own application code as well as leverage Node\'s vast 3rd party module ecosystem via npm. Finally, we wrap up with a discussion on assembling your own "tool belt" of Node.js tools and strategies to jump start your journey.',
        instructorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Building a Javascript Development Enviornment',
        description: 'n this course, you will explore the long list of decisions and patterns for building your own JavaScript development from scratch using modern tooling. You will get there by learning about major topics like transpiling, bundling, testing, and npm scripts for automation. By the end of this course, you will be able to create a rapid feedback JavaScript development experience that suits your team\'s unique preferences. Before you begin, make sure you are already familiar with JavaScript and HTML. After this course, you\'ll be ready to move on to building applications in a wide array of technologies including Angular, React, Node.js, and Electron. I hope you\'ll join me, and I look forward to helping you on your learning journey here at Pluralsight.',
        instructorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Automating AWS with CloudFormation',
        description: 'Managing AWS environments manually is complex and fault-prone. Describing your infrastructure in code helps you to improve quality and save costs. This course teaches you how to use AWS CloudFormation to automatically manage your infrastructure.',
        instructorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angular: The Big Picture',
        description: 'This course will teach you a high level view of Angular, to assist you in either understanding Angular better for your own development, or learning when to use Angular vs. other front end frameworks.',
        instructorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angular Routing',
        description: 'This course is all about Angular\'s routing features. You\'ll learn how to define multiple routes, pass data to routes, preload data for your views, and more.',
        instructorId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React Fundamentals',
        description: 'React is one of the world\'s most popular libraries for creating web user interfaces. This course will teach you how to confidently construct React applications that are simple and easy to maintain.',
        instructorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Building Applications with React and Redux',
        description: 'Learn how to use React, Redux, React Router, and modern JavaScript to build an app with React. Use Webpack, Babel, Jest, React Testing Library, Enzyme, and more to build a custom React development environment and build process from the ground up.',
        instructorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AWS Developer: The Big Picture',
        description: 'Amazon Web Services is the biggest cloud computing service in the world, used by huge enterprises and startups alike. This course will give you a solid overview of what AWS is, how it can be used, and the various ways it can be accessed.',
        instructorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Linux Systems Programming',
        description: 'This course delivers a comprehensive introduction to the Linux system call interface and also to key components of the standard C library.',
        instructorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Getting Started with the Linux Command Line',
        description: 'Linux is the dominant OS of the cloud, DevOps, and enterprise servers. Since Linux administration happens on the command line, and since you want a part of all that action, you\'ll enjoy this introduction to the admin tool where it all happens.',
        instructorId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
