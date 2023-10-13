module.exports = (sequelize, DataTypes) => {
    const mark_list = sequelize.define(
      "mark_list",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        assessment_name: {
          type: DataTypes.STRING,
        },
        grade: {
          type: DataTypes.STRING,
        },
        instructor_id: {
          type: DataTypes.INTEGER,
        },
        student_id: {
          type: DataTypes.INTEGER,
        },
        class_id: {
          type: DataTypes.INTEGER,
        },
      },
      {
        freezTableName: true,
        timestamps: false,
      }
    );
  
    mark_list.associate = (models) => {
      mark_list.belongsTo(models.instructor, { foreignKey: "instructor_id", onDelete: 'SET NULL' });
      mark_list.belongsTo(models.student, { foreignKey: "student_id", onDelete: 'SET NULL' });
      mark_list.belongsTo(models.class_room, { foreignKey: "class_id", onDelete: 'SET NULL' });
    };
  
    return mark_list;
  };