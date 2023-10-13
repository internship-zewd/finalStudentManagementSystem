module.exports = (sequelize, DataTypes) => {
    const assessment = sequelize.define('assessment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        assessment_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        out_of: {
            type: DataTypes.INTEGER
        },
        class_id: {
            type:DataTypes.INTEGER
        },
        instructor_id: {
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    assessment.associate = (models) => {
        assessment.belongsTo(models.instructor, {foreignKey: "instructor_id", onDelete: 'SET NULL'})
        assessment.belongsTo(models.class_room, {foreignKey: "class_id", onDelete: 'SET NULL'})
    }
    return assessment
}