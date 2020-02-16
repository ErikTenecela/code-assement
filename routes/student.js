const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
//Student Model
const Student = require("../models/student");

// @route GET api/students
//@des GET ALL STUDENTS
//@access
router.get("/", (req, res) => {
  Student.find()
    .sort({ date: -1 })
    .then(student => res.json(student));
});

// @route POST api/students
//@des Create A POST
//@access
router.post("/", auth, (req, res) => {
  const { name, subjectCount, scoreAverage } = req.body;
  const newStudent = new Student({
    name,
    subjectCount,
    scoreAverage
  });
  newStudent
    .save()
    .then(student => res.json(student))
    .catch(e => res.json({ msg: e.message }));
});
//PUT /api/students/id
//replacing the values in the DB
//currently not finsihed
router.put("/:id", auth, (req, res) => {
  const { name, subjectCount, scoreAverage } = req.body;
  const newStudent = new Student({
    name,
    subjectCount,
    scoreAverage
  });
  newStudent
    .save()
    .then(student => res.json(student))
    .catch(e => res.json({ msg: e.message }));
});

// DELETE api/student/id
//
router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;
  Student.findById(id)
    .then(student => student.remove().then(() => res.json({ sucess: true })))
    .catch(e => res.status(404).json({ msg: "Id Not Found" }));
});

module.exports = router;
