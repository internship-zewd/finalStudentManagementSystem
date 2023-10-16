module.exports=(sequelize,DataTypes)=>{
    const manager=sequelize.define("manager", {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
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
        username: {
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
                notEmpty:true
            },
        },
      
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
                isEmail:true,
            },
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:false,
            },

            },
        salary:{
            type:DataTypes.DECIMAL(12,2),
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
        
}
    ,{
        freezeTableName:true,
        tableName:'manager',
        underscored:true
    })

    // manager.associate=(models)=>{
    //     manager.hasMany(models.instructor,{foreignKey:"instructor_id"})
    //     instructor.hasMany(models.attendance,{foreignKey:"instructor_id"})
    // }
    return manager
}
