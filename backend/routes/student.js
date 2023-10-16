const express=require('express')
const router=express.Router()
const {getAllStudent,getOneStudent,getStudentByClass,createStudent,updateStudent,deleteStudent,getStudentAndClass}=require('../controllers/student')



router.get('/getAll', getAllStudent)
router.get('/getOne/:id',getOneStudent )
router.get("/getByClass/:id",getStudentByClass)
router.post('/create',createStudent);
router.put('/update/:id',updateStudent);
router.delete('/delete/:id',deleteStudent)
router.get('/getAllAndClass',getStudentAndClass)


module.exports=router;