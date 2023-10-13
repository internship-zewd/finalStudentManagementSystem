const express=require("express")
const router=express.Router()
const {getAllClass,getByCourse}=require("../controllers/class_room")
const {getOneClass}=require("../controllers/class_room")

router.get("/getAll",getAllClass)

router.get("/getOne/:id",getOneClass)
router.get('/getByCourse/:id',getByCourse)


module.exports=router;