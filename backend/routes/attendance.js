const express=require("express")
const router=express.Router();
const {createAttendance}=require("../controllers/attendance")


router.post('/create',createAttendance)
module.exports=router;
