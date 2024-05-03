'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('paises', [
      {
        Pais: "India",
        poblacion: "1409902000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "China",
        poblacion: "1403426000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Estados Unidos",
        poblacion: "331800000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Indonesia",
        poblacion: "271629000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Pakistán",
        poblacion: "224654000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Nigeria",
        poblacion: "219743000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Brasil",
        poblacion: "211420000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Bangladés",
        poblacion: "181781000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Rusia",
        poblacion: "146712000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "México",
        poblacion: "127792000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Japón",
        poblacion: "126045000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Filipinas",
        poblacion: "108772000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Egipto",
        poblacion: "101000000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Etiopía",
        poblacion: "100882000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Vietnam",
        poblacion: "97591000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "República del Congo",
        poblacion: "89561000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Irán",
        poblacion: "83914000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Turquía",
        poblacion: "83752000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Alemania",
        poblacion: "83421000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Pais: "Tailandia",
        poblacion: "68232000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
