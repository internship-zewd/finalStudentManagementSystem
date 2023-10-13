const express=require('express')
const router=express.Router()
const {getAllManager,getOneManager,createManager,updateManager,deleteManager}=require('../controllers/manager')




router.get('/getAll', getAllManager)
router.get('/getOne/:id',getOneManager)
router.post('/create',createManager);
router.put('/update/:id',updateManager)
router.delete('/delete/:id',deleteManager)


module.exports=router;
