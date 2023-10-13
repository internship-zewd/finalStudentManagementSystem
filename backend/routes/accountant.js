const express=require('express')
const router=express.Router()
const {getAllAccountant,getOneAccountant,createAccountant,updateAccountant,deleteAccountant}=require('../controllers/accountant')




router.get('/getAll', getAllAccountant)
router.get('/getOne/:id',getOneAccountant)
router.post('/create',createAccountant);
router.put('/update/:id',updateAccountant)
router.delete('/delete/:id',deleteAccountant)


module.exports=router;
