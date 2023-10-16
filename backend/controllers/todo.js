const {todo}=require('../models')
const moment=require('moment')
const {Op}=require('sequelize')
const {admin, instructor, manager, accountant} = require('../models')

const createReminder=(req,res)=>{


    const {name,description,time,date,notify,days,username, role}= req.body.reminder;
//     const due=new Date(date)
//     console.log(due.getDate())
//    const dumb= due.setDate(due.getDate-days)
console.log(req.body.reminder)
const due=moment(date).subtract(days,'days').toDate();

let userTag = null
if (role === "Admin") {
    userTag = admin.findOne({
        where: {
            username: username
        },
        attributes: ['id_tag']
    })
}
if (role === "Instructor") {
    userTag = instructor.findOne({
        where: {
            username: username
        },
        attributes: ['id_tag']
    })
}
if (role === "Manager") {
    userTag = manager.findOne({
        where: {
            username: username
        },
        attributes: ['id_tag']
    })
}
if (role === "Accountant") {
    userTag = accountant.findOne({
        where: {
            username: username
        },
        attributes: ['id_tag']
    })
}
console.log(due)

    todo.create({
        name:name,
        date:date,
        time:time,
        description:description,
        status:false,
        notify:notify,
        due:due,
        user:userTag.id_tag
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
   const {username}=req.params

    await todo.findAll({where:{username:username}})
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



module.exports={
    createReminder,
    getAllReminders,
    updateReminder,
    getOneReminder,
    updateReminderPopup,
    deleteReminder,
    getDue,
}