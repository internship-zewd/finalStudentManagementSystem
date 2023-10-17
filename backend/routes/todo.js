const express=require('express')
const router=express.Router()
const {createReminder, getAllReminders, updateReminder, getOneReminder,updateReminderPopup,deleteReminder,getDue, deleteTodoEmployee}=require('../controllers/todo')

router.post('/create',createReminder)
router.get('/getAll/:username',getAllReminders)
router.put('/update/:id',updateReminder)
router.get('/getOne/:id',getOneReminder)
router.put('/updatePopup/:id',updateReminderPopup)
router.delete('/delete/:id',deleteReminder)
router.get('/getDue',getDue)
router.delete('/deleteTodoEmployee/:user',deleteTodoEmployee)

module.exports=router