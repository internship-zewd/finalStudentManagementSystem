module.exports = (sequelize, DataTypes) => {
  const class_room = sequelize.define('class_room',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      full_identification: {
        type: DataTypes.STRING,
      },
      instructor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: 'classs',
      timestamps: false,
    }
  );

  class_room.associate = (models) => {
    class_room.hasMany(models.student, { foreignKey: 'class_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    class_room.belongsTo(models.instructor, { foreignKey: 'instructor_id', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    class_room.belongsTo(models.course, { foreignKey: 'course_id', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    class_room.hasMany(models.attendance, { foreignKey: 'class_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  };

  return class_room;
};