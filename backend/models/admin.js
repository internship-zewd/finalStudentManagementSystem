module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define(
      "admin",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_tag: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        username: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            notEmpty: true,
          },
        },
        full_identification: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            notEmpty: true,
          },
        },
        full_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
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
        phone: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        salary: {
          type: DataTypes.DECIMAL(12, 2),
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
      {
        freezeTableName: true,
        tableName: 'admin',
        underscored: true,
      }
    );
  
    // instructor.associate = (models) => {
    //   instructor.hasMany(models.classs, { foreignKey: 'instructor_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    //   instructor.hasMany(models.attendance, { foreignKey: 'instructor_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    // };
  
    return admin;
  };