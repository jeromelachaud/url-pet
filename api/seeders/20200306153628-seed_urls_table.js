module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('urls', [
      {
        id: '90b5c2d2-483f-4f9b-bad7-cd2f64bf4b04',
        url: 'https://already_created.com',
        hash: 'n44rk',
        visit: '0',
        createdAt: new Date('2020-01-01 10:00:00.45+00'),
        updatedAt: new Date('2020-01-01 11:00:00.45+00'),
      },
      {
        id: '64a30e50-4306-460d-8ae5-3b84273a4425',
        url: 'https://to_be_deleted.com',
        hash: 'p69Tn',
        visit: '0',
        createdAt: new Date('2020-02-01 10:00:00.45+00'),
        updatedAt: new Date('2020-02-01 11:00:00.45+00'),
      },
    ])
  },
  down: queryInterface => queryInterface.bulkDelete('urls', null, {}),
}
