const { admin } = require("../models");
const { instructor } = require('../models');
const { course } = require('../models')
const { student } = require('../models')
const { manager } = require('../models')
const { classRoom } = require('../models')
const { accountant } = require('../models');

const createTestAll = async(req, res, next) => {
    
        try {
      
          const adminName = "testAdmin"
          const rowCountAdmin = await admin.count();
          if (rowCountAdmin === 0) {
            console.log("Table is empty");
            const previousAdminId = await admin.max("id");
      
            const idTagValue =
              previousAdminId !== null
                ? `AD${1000 + previousAdminId}`
                : "AD1000";
      
            // Combine idTagValue and instructor name
            const fullAdmin = `${idTagValue} ${adminName}`;
      
            await admin.create({
              full_name: adminName,
              id_tag: idTagValue,
              username: "testAdminUser",
              email:"test@gmail.com",
              full_identification: fullAdmin,
              salary: 2000,
              phone: '+251939881190',
              password: 'testAdmin1'
      
            });
          }

          const instructorName = "testInstructor"
          const rowCountInstructor = await instructor.count();
          if (rowCountInstructor === 0) {
            console.log("Table is empty");
            const previousInstructorId = await instructor.max("id");
      
            const idTagValue =
              previousInstructorId !== null
                ? `INS${1000 + previousInstructorId}`
                : "INS1000";
      
            // Combine idTagValue and instructor name
            const fullInstructor = `${idTagValue} ${instructorName}`;
      
            await instructor.create({
              full_name: instructorName,
              id_tag: idTagValue,
              username: "testInstructorUser",
              email:"test@gmail.com",
              full_identification: fullInstructor,
              salary: 2000,
              phone: '+251939881190',
              password: 'testInstructor1'
      
            });
          }

          // const managerName = "testManager"
          // const rowCountManager = await manager.count();
          // if (rowCountManager === 0) {
          //   console.log("Table is empty");
          //   const previousManagerId = await manager.max("id");
      
          //   const idTagValue =
          //     previousManagerId !== null
          //       ? `MA${1000 + previousManagerId}`
          //       : "MA1000";
      
          //   // Combine idTagValue and instructor name
          //   const fullManager = `${idTagValue} ${managerName}`;
      
          //   await manager.create({
          //     name: managerName,
          //     idTag: idTagValue,
          //     username: "testManagerUser",
          //     fullIdentification: fullManager,
          //     salary: 2000,
          //     phoneNumber: '+251939881190',
          //     password: 'testManager1'
      
          //   });
          // }
          // const accountantName = "testAccountant"
          // const rowCountAccountant = await accountant.count();
          // if (rowCountAccountant === 0) {
          //   console.log("Table is empty");
          //   const previousAccountantId = await accountant.max("id");
      
          //   const idTagValue =
          //     previousAccountantId !== null
          //       ? `ACT${1000 + previousAccountantId}`
          //       : "ACT1000";
      
          //   // Combine idTagValue and instructor name
          //   const fullAccountant = `${idTagValue} ${accountantName}`;
      
          //   await accountant.create({
          //     name: accountantName,
          //     idTag: idTagValue,
          //     username: "testAccountantUser",
          //     fullIdentification: fullAccountant,
          //     salary: 2000,
          //     phoneNumber: '+251939881190',
          //     password: 'testAccountant1'
      
          //   });
          // }
          // const courseName = "testCourse"
          // const rowCountCourse = await course.count();
          // if (rowCountCourse === 0) {
          //   console.log("Table is empty");
          //   const previousCourseId = await course.max("id");
      
          //   const idTagValue =
          //     previousCourseId !== null
          //       ? `COS${1000 + previousCourseId}`
          //       : "COS1000";
      
          //   // Combine idTagValue and instructor name
          //   const fullCourse = `${idTagValue} ${courseName}`;
      
          //   await course.create({
          //     name: courseName,
          //     idTag: idTagValue,
          //     fullIdentification: fullCourse,
          //     tuitionFee: 4000,
          //     duration: '3 months',
      
          //   });
          // }

          // const studentName = "testStudent"
          // const rowCountStudent = await student.count();
          // if (rowCountStudent === 0) {
          //   console.log("Table is empty");
          //   const previousStudentId = await student.max("id");
      
          //   const idTagValue =
          //     previousStudentId !== null
          //       ? `COS${1000 + previousStudentId}`
          //       : "COS1000";
      
          //   // Combine idTagValue and instructor name
          //   const fullStudent = `${idTagValue} ${studentName}`;
      
          //   await student.create({
          //     name: studentName,
          //     idTag: idTagValue,
          //     fullIdentification: fullStudent,
          //     phoneNumber: "+251939881190",
          //     gender: "male",
          //     courseId: 1,
          //     classId: 1,
          //     paymentStatus: "unpaid",
      
          //   });
          // }

        } catch (error) {
          console.log("Error occurred while checking table:", error);
        }

        
      }


module.exports = createTestAll;
