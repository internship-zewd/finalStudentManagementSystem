module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("student", {
        course_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        class_id:{
            type:DataTypes.INTEGER,
            allowNull:false


        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_tag:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },

        full_identification:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true,
            },
        },
        full_name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        paymentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,

            },
        },

        dob: {
            type: DataTypes.DATEONLY,
            // allowNull:false,
            validate: {
               // notEmpty: true,
            },
        }, 
       
},{
    freezeTableName:true,
    tableName:'student',
    underscored:true

})
student.associate = (models) => {
    student.belongsTo(models.course, { foreignKey: 'course_id',onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    student.belongsTo(models.class_room, {foreignKey:"class_id",onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    student.hasMany(models.attendance,{foreignKey:"student_id",onDelete: 'CASCADE', onUpdate: 'CASCADE'})



  };
return student
}