module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('urls', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hash: {
        allowNull: false,
        type: Sequelize.CHAR(5),
      },
      visit: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => queryInterface.dropTable('urls'),
}
