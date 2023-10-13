const {instructor} = require('../models')
const {class_room} = require('../models')
const { mark_list } = require('../models');
const { student } = require('../models');

const fetchSpecificClass = async (req, res) => {
    const instUsername = req.username

    try {
        
        const instId = await instructor.findOne({
            where: {
                username: instUsername
            },
            attributes: ['id']
        })
        const specificClass= await class_room.findAll({
            where: {
                instructorId: instId.id
            },
            attributes: ['fullIdentification']
        })

        res.json(specificClass)

    } catch (error) {
        console.log("Error fetching data", error, 500);        
    }
}

const studentMarkList = async (req, res) => {
    const instUser = req.username
    try {
  
      const findInstId = await instructor.findOne({
        where:{
          username: instUser
        },
        attributes: ['id']
      })
      const fetchAllGrade = await mark_list.findAll({
        where: {
          instructorId: findInstId.id
        },
        include: [{
          model: student, // Include the Student model
          attributes: ['name'], // Select only the name column of the student
        }],
        attributes: ['assessmentName', 'grade'], // Select only assessmentName and grade columns
      });
  
      const assessmentDataWithNames = fetchAllGrade.map((data) => {
        return {
          assessmentName: data.assessmentName,
          mark: data.grade,
          studentName: data.student.name, // Access the student name through the included Student model
        };
      });
      res.json(assessmentDataWithNames);
    } catch (error) {
      console.error('Error retrieving assessment data:', error, 500);
      res.json({ success: false });
      throw error;
    }
  }

  

module.exports = {
    fetchSpecificClass,
    studentMarkList
}