const {class_room}=require("../models")
const {course}=require("../models")
const {instructor}=require("../models")


const getAllClass= async(req,res)=>{

    try {
        const fetchAllClasses = await class_room.findAll()


        res.json(fetchAllClasses)
    } catch (error) {
        res.json({success: false}, error)
    }
}
const getOneClass= async (req,res)=>{
    const classId = req.params.id;

  const specificClass = await class_room.findOne({
    where: {
      id: classId,
    },
    include: [
      {
        model: instructor,
        attributes: ['full_identification']
      },
      {
        model: course,
        attributes: ['full_identification']
      }
    ],
  });

  console.log(specificClass);

  const specificClassData = {
    className: specificClass.full_identification,
    instructorName: specificClass.instructor.full_identification,
    courseName: specificClass.course.full_identification,
    classId: specificClass.id
  };

  res.json(specificClassData);
}
const getByCourse=(req,res)=>{
    console.log("Im in here")

    const {id}=req.params
    class_room.findAll({where:{course_id:id}})
    .then((classes)=>{
        res.send(classes)
        console.log(classes)
    })
}

const createClass = async (req, res) => {
    
    const body = req.body;
    const className = body.className;
    const instructorName = body.selectedInstructor;
    const courseName = body.selectedCourse;

    try {
        const previousClassId = await class_room.max('id');

        
        const idTagValue = previousClassId !== null ? `CLS${1000 + previousClassId}` : 'CLS1000';
        const fullClass = `${idTagValue} ${className}`;
        const instId = await instructor.findOne({
            where: {
                full_identification: instructorName
            },
            attributes: ['id']
        })

        const findCourse = await course.findOne({
            where: {
                full_identification: courseName
            },
            attributes: ['id']
        })
        await class_room.create(
            {
                name: className,
                instructor_id: instId.id,
                course_id: findCourse.id,
                id_tag: idTagValue,
                full_identification: fullClass
            }
        )
        res.json({ success: true })
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "error in creating class" }, 500)
    }
}

const updateClass=async(req,res)=>{
    const {id}=req.params
    

    await class_room.findOne({where:{id:id}})
    .then(res.send("updated successfully"))
    .catch((err)=>{if(err){console.log(err)}})

}

module.exports={
    getAllClass,
    getOneClass,
    getByCourse,
    createClass,
    updateClass
}