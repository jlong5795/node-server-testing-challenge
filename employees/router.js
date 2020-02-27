const express = require("express");

const Employees = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Employees.find()
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: "There was an error retrieving departments." });
    });
});

router.post("/", (req, res) => {
  Employees.add(req.body)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "There was an error adding department." });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Employees.remove(id)
    .then(response => {
      res.status(200).json({ message: 'Delete successful.'});
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: "There was an error removing the department." });
    });
});

module.exports = router;
