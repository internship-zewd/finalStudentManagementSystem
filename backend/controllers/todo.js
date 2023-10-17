const {todo}=require('../models')
const moment=require('moment')
const {Op}=require('sequelize')
const {admin, instructor, manager, accountant} = require('../models')

const createReminder=async(req,res)=>{


    const {name,description,time,date,notify,days,username, role,user}= req.body.reminder;
console.log(req.body.reminder)
const due=moment(date).subtract(days,'days').toDate();

// let userTag = null
// if (role === "Admin") {
//     userTag = await admin.findOne({
//         where: {
//             username: username
//         },
//         attributes: ['id_tag']
//     })
// }
// if (role === "Instructor") {
//     userTag = await instructor.findOne({
//         where: {
//             username: username
//         },
//         attributes: ['id_tag']
//     })
// }
// if (role === "Manager") {
//     userTag = await manager.findOne({
//         where: {
//             username: username
//         },
//         attributes: ['id_tag']
//     })
// }
// if (role === "Accountant") {
//     userTag = await accountant.findOne({
//         where: {
//             username: username
//         },
//         attributes: ['id_tag']
//     })
// }
// console.log(userTag)
// const idTag=userTag.id_tag

    todo.create({
        name:name,
        date:date,
        time:time,
        description:description,
        status:false,
        notify:notify,
        due:due,
        user:user
    })
    .then(
        res.send()
    )
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}

const getAllReminders=async(req,res)=>{
    console.log('im here')
   const {user}=req.params

    await todo.findAll({where:{user:user}})
    .then((todos)=>{
        console.log(todos)
        res.send(todos)

    })
    .catch((err)=>{
        if(err){console.log(err)}
    })
}


const getOneReminder=async(req,res)=>{
    const {id}=req.params
    console.log('im here')

    await todo.findOne({where:{id:id}})
    .then((todo)=>{
        console.log(todo)
        res.send(todo)

    })
    .catch((err)=>{
        if(err){console.log(err)}
    })
}




const updateReminder=(req,res)=>{
    const {id}=req.params
    const {description,name,time,date,status,notify}=req.body
    todo.update({
        description:description,
        name:name,
        time:time,
        date:date,
        notify:notify,
        status:status,
    },{where:{id:id}})
    .then(res.send("updated successfully"))
    .catch((err)=>{if(err){console.log(err)}})
}

const updateReminderPopup=(req,res)=>{
    console.log('we in here')
    const {id}=req.params
    const {description,name,time,date,status,notify}=req.body.reminder
    todo.update({
        description:description,
        name:name,
        time:time,
        date:date,
        notify:notify,
        status:status,
    },{where:{id:id}})
    .then(res.send("updated successfully"))
    .catch((err)=>{if(err){console.log(err)}})
}

const deleteReminder=(req,res)=>{
    const todo_id=req.params.id
    todo.destroy({where:{id:todo_id}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}

const getDue=async(req,res)=>{
    const now=new Date()
    console.log(now)

    todo.findAll({where:{due:{[Op.gte]:now,},status:"incomplete"}})
    .then((reminders)=>{res.send(reminders)})
    .catch((err)=>{if(err){console.log(err)}})

}
const deleteTodoEmployee=async(req,res)=>{
    const {user}=req.params
    await todo.destroy({where:{user:user}})
    .then(res.send())
    .catch((err)=>{
        if(err){console.log(err)}
    })

}



module.exports={
    createReminder,
    getAllReminders,
    updateReminder,
    getOneReminder,
    updateReminderPopup,
    deleteReminder,
    deleteTodoEmployee,
    getDue,
}