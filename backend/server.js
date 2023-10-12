const bodyParser = require('body-parser')

const db=require('./models')
const express=require('express')
const cors= require('cors')
const app= express();
PORT=8081

const corsOptions={
    origin:'http://localhost:3000'
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


// const studentRoute=require('./routes/student')
// app.use('/student',studentRoute)
PORT=8081
// const instructorRoute=require('./routes/instructor')
// app.use(`/instructor`,instructorRoute)

// const adminRoute=require("./routes/admin")
// app.use('/admin',adminRoute)


// const courseRoute=require('./routes/course')
// app.use('/course',courseRoute)

// const accountantRoute=require("./routes/accountant")
// app.use('/accountant',accountantRoute)

// const managerRoute=require("./routes/manager")
// app.use('/manager',managerRoute)

// const classRoute=require("./routes/classs")
// app.use('/classs',classRoute)
// const messageRoute=require("./routes/message")
// app.use("/message", messageRoute)
var authRouter = require('./routes/auth');
app.use("/auth", authRouter);

var createFirst = require("./routes/createTestAll");
app.use("/create", createFirst);


db.sequelize.sync({alter:true}).then((req)=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })} 
) 
