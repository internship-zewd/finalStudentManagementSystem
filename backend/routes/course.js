const express = require("express");
const router = express.Router();

const { getAllCourse } = require("../controllers/course");
const { getOneCourse } = require("../controllers/course");
const { createCourse } = require("../controllers/course");
const { updateCourse } = require("../controllers/course");
const { deleteCourse } = require("../controllers/course");
const { countCourse } = require("../controllers/course");
const { generatePDF } = require("../controllers/pdfGenerator");


router.get("/getAll", getAllCourse);
router.get("/getOne/:id", getOneCourse);
router.post("/create", createCourse);
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);
router.get("/count", countCourse);
router.post("/generatePdf", generatePDF);


module.exports = router;
