const express=require('express')
const router=express.Router()
const {getAllInstructor}=require('../controllers/instructor')
const {getOneInstructor}=require('../controllers/instructor')
const {createInstructor}=require('../controllers/instructor')
const {updateInstructor}=require('../controllers/instructor')
const {deleteInstructor}=require('../controllers/instructor')




router.get('/getAll', getAllInstructor)
router.get('/getOne/:id',getOneInstructor)
router.post('/create',createInstructor);
router.put('/update/:id',updateInstructor)
router.delete('/delete/:id',deleteInstructor)


module.exports=router;
