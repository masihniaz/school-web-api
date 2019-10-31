School Web Services API
=======================

The API contains the following modules:

* Student Module

  ```GET /api/students``` => retrieve students list
  ```POST /api/student``` => add new student
    {
      "name": "Loretta",
      "lastName": "Skellion",
      "email": "lskellion0@ucla.edu",
      "birthday": "2002-04-09",
      "address": "163 Spaight Place",
      "phoneNumber": "1685652128"
    }
  ```GET /api/student/:id```  => retrieve student by id
  ```PATCH /api/student/:id```  => patch student by id
  ```DELETE /api/student/:id``` => delete student by id
  ```GET api/student/:id/courses``` => get student courses by student id

* Instructor Module
  ```GET /api/instructors```  => retrieve instructors list
  ```POST /api/instructor```  => add new instructor
    {
      "name": "Humberto",
      "lastName": "Nelhams",
      "email": "hnelhams5@wsj.com",
      "birthday": "1981-06-16",
      "address": "18033 Cascade Lane",
      "phoneNumber": "9393783428"
    }
  ```GET /api/instructor/:id``` => retrieve instructor by id
  ```PATCH /api/instructor/:id``` => patch instructor by id
  ```DELETE /api/instructor/:id``` => delete instructor by id
  ```GET api/instructor/:id/courses``` => get instructor courses by instructor id

* Course Module
  ```GET /api/courses```  => retrieve courses list
  ```POST /api/course```  => add new course
    {
      name: 'Angular Routing',
      description: 'This course is all about Angular\'s routing features. You\'ll learn how to define multiple routes, pass data to routes, preload data for your views, and more.',
      instructorId: 5
    }
  ```GET /api/course/:id``` => retrieve course by id
  ```PATCH /api/course/:id``` => patch course by id
  ```DELETE /api/course/:id``` => delete course by id
  ```POST /api/course/assign``` => assign course to a student by courseId & studentId
    {
      "courseId: 3,
      "studentId: 10
    }
  ```GET /api/course/:id/students``` => get course students by course id

* User Module
  ```GET /api/auth/users``` => retrieve admin users list
  ```POST /api/auth/user``` => add new admin user
    {
      name: 'Masih',
      email: 'masihniaz@yahoo.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      role: 1
    }
  ```POST /api/auth/login```  => login route for admin user
    {
      "email": "admin@example.com",
      "password: "password"
    }


Note: all routes needs authentication, to get the bearer token use the following JSON body on the ```/api/auth/login``` route after installation
  {
    "email": "admin@example.com",
    "password: "password"
  }
OR
  {
    "email": "masihniaz@yahoo.com",
    "password: "password"
  }

Installition
============
To setup the project in your local machine follow the steps below:
1. Install mysql in your local machine
2. create a database named ```school```
3. Install Node JS.
4. Clone the repository to your machine.
5. run ```npm install``` in the project root directory to install node_modules.
6. run ```npm start``` it will trigger the build scripts which first starts the migration process, then seeds the tables & finally runs the server


Notes: 
* For only runing the server without migration & seeding run ```npm run server``` in the root folder
* All routes needs authentication, to get the bearer token use the following JSON body on the ```/api/auth/login``` route after installation
  {
    "email": "admin@example.com",
    "password: "password"
  }
OR
  {
    "email": "masihniaz@yahoo.com",
    "password: "password"
  }
