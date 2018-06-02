module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Urls', {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: {
          args: [10, 200],
          msg: 'Please provide field within 12 to 200 characters.',
        },
      },
    },
    hash: {
      type: DataTypes.STRING(5),
    },
    visit: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    paranoid: true,
    tableName: 'Urls',
  })
}
