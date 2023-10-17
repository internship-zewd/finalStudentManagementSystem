const express=require("express")
const router=express.Router()
const {allEmployees,getAllMembers,sendSpecific,
       allInstructors,allManagers,allStudents,
       allAccountants,allMembers,allAdmins}=require("../controllers/message")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });



// const Storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, '../uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
//     },
//   });
//   const upload = multer({ storage:Storage }).single('attachment');



router.post("/create/allEmployees", upload.array('files'),allEmployees);
router.post("/create/allInstructors", upload.array('files'),allInstructors)
router.post("/create/allManagers", upload.array('files'),allManagers)
router.post("/create/allStudents", upload.array('files'),allStudents)
router.post("/create/allAdmins", upload.array('files'),allAdmins)
router.post("/create/allAccountants", upload.array('files'),allAccountants)
router.post("/create/all", upload.array('files'),allMembers)
router.get("/getAll", upload.array('files'),getAllMembers)
router.post("/specific", upload.array('files'),sendSpecific)

//upload.single("attachment")

module.exports=router

