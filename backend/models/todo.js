module.exports=(sequelize,DataTypes)=>{
    const todo=sequelize.define("todo",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
        time:{
            type:DataTypes.TIME,
            allowNuLL:false,
            validate:{
                notEmpty:true,
            },

        },
        date:{
            type:DataTypes.DATEONLY,
            allowNuLL:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
        status:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
        
           due:{
                type:DataTypes.DATE,
                allowNull:false,
                validate:{
                    notEmpty:true
                },
    
            },
        
        notify:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            validate:{
                notEmpty:true
            },

        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
    },{
        tableName:"todo",
        freezeTableName:true,
        underscored:true
    })
    return todo;

}