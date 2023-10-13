const { course } = require("../models");

const getAllCourse = (req, res) => {
  course
    .findAll()
    .then((courses) => {
      res.send(courses);

      console.log(courses);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const getOneCourse = (req, res) => {
  const course_id = req.params.id;
  course
    .findOne({ where: { id: course_id } })
    .then((course) => {
      res.send(course);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const createCourse = async (req, res) => {
  console.log("Imherrrrr");
  const { courseName, fee, duration } = req.body;
  const previousId = await course.max("id");
  const idTag = previousId !== null ? `CRS${1000 + previousId}` : `CRS${1000}`;
  const fullIdentification = idTag + " " + courseName;

  course
    .create({
      id_tag: idTag,
      full_identification: fullIdentification,
      course_name: courseName,
      fee: fee,
      course_duration: duration,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  res.send("insert");
};

const updateCourse = (req, res) => {
  const { courseName, fee, duration,fullIdentification} = req.body;
  const identification=fullIdentification.split(" ")
  fullIdentification=identification[0]+" "+courseName
  
  course.update(
      {
        course_name: courseName,
        course_fee: fee,
        course_duration: duration,
        full_Identification:fullIdentification

      },

      { where: { id: req.params.id } }
    )
    .then((course) => {
      console.log(course);
      console.log(req.params.id);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const deleteCourse = (req, res) => {
  const course_id = req.params.id;
  course
    .destroy({ where: { id: course_id } })
    .then(res.send())
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const countCourse = async (req, res) => {
  try {
    const count = await course.count();
    res.json(count);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCourse,
  getOneCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  countCourse,
};
