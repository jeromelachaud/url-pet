module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'urls',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING(255),
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
        type: Sequelize.STRING(5),
      },
      visit: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      paranoid: true,
      tableName: 'urls',
    }
  )
}
