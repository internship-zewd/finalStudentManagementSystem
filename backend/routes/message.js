const express=require("express")
const router=express.Router()
const {allEmployees,getAllMembers,sendSpecific,
       allInstructors,allManagers,allStudents,
       allAccountants,allMembers,allAdmins}=require("../controllers/message")
const multer  = require('multer')
const path = require('path');



const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
    },
  });
  const upload = multer({ storage:Storage }).single('attachment');



router.post("/create/allEmployees",allEmployees);
router.post("/create/allInstructors",allInstructors)
router.post("/create/allManagers",allManagers)
router.post("/create/allStudents",allStudents)
router.post("/create/allAdmins",allAdmins)
router.post("/create/allAccountants",allAccountants)
router.post("/create/all",allMembers)
router.get("/getAll",getAllMembers)
router.post("/specific",sendSpecific)

//upload.single("attachment")

module.exports=router

