const express = require('express');
const courseModel = require('../models/CourseModel.js');
var router = express.Router();
const CursoController = require('../CursoController.js');

//Mostar Lista
router.get("/", CursoController.listarCursoJson);

module.exports = router

// app.get('localhost:3000/cursos', async (req, res) => {
//     //Query Function
//   const courses = "Uma lista de cursos";/*await courseModel.find({});*/

//   try {
//     res.send(courses);
//   } catch (err) {
//     res.status(500).send(err);
//   }

// });

// app.post('/localhost:3000/cursos', async (req, res) => {
//     const course = "Cadastro de novo curso";/*new courseModel(req.body);*/
  
//     try {
//       await course.save();
//       res.send(course);
//     } catch (err) {
//       res.status(500).send(err);
//     }

// });

// app.delete('/localhost:3000/cursos', async (req, res) => {

//     try {
//       const course = "Remoção de um curso por ID";/*await courseModel.findByIdAndDelete(req.params.id)*/
  
//       if (!course) res.status(404).send("No item found")
//       res.status(200).send()
//     } catch (err) {
//       res.status(500).send(err)
//     }

// });


// app.put('/localhost:3000/cursos', async (req, res) => {

//     try {
//       const course = "Edição de um curso existente";/*await courseModel.findByIdAndUpdate(req.params.id, req.body)*/
//       await courseModel.save()
//       res.send(course)
//     } catch (err) {
//       res.status(500).send(err)
//     }

// });

// module.exports = app