const {instructor} = require('../models')
const {class_room} = require('../models')
const { student } = require('../models')

const fetchSpecificClass = async (req, res) => {
    const instUsername = req.body.username

    try {
        
        const instId = await instructor.findOne({
            where: {
                username: instUsername
            },
            attributes: ['id']
        })
        console.log(instId)
        const specificClass= await class_room.findAll({
            where: {
                instructor_id: instId.id
            },
            attributes: ['full_identification']
        })

        res.json(specificClass)

    } catch (error) {
        console.log("Error fetching data", error, 500);        
    }
}

const fetchSpecificStudent = async (req, res) => {
    const body = req.body
    const selectedClass = body.selectedClass

    try {
        const fetchClass = await class_room.findOne({
            where:{
                full_identification: selectedClass
            },
            attributes: ['id']
        })
        const specificStudents = await student.findAll({
            where: {
                class_id: fetchClass.id
            },
            attributes: ['full_identification']
        })

        res.json(specificStudents)
    } catch (error) {
        res.json({success: false})
        console.log(error)
        
    }
}
const insertGrade = async (req, res) => {
    const body = req.body;
    const gradesToInsert = body.gradesToInsert;
  
  
    try {
      
  
      await Promise.all(gradesToInsert.map(async (gradeResults) => {
        const { studentName, assessmentName, grade, className} = gradeResults;
        const fetchstudent = await student.findOne({
          where: {
            full_identification: studentName
          },
          attributes: ['id']
        });
        const findInstructor = await instructor.findOne({
          where: {
            username: req.body.username,
          },
          attributes: ['id']
        });
    
        const findClass = await class_room.findOne({
          where: {
            full_identification: className,
          },
          attributes: ['id']
        });
      
        return mark_list.create({
          student_id: fetchstudent.id,
          assessment_name: assessmentName,
          grade: grade,
          class_id: findClass.id,
          instructor_id: findInstructor.id
        });
      }));
  
      console.log('Grades inserted successfully');
      res.json({ success: true, message: 'Grades inserted successfully' });
    } catch (error) {
      console.error('Error inserting grades:', error);
      res.json({ success: false, message: 'Error inserting grades' });
    }
  };

module.exports = {
    fetchSpecificClass,
    fetchSpecificStudent,
    insertGrade
}