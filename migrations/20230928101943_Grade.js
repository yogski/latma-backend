const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.GRADES, (T) => {
    T.increments("id").primary;
    T.string("description");
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());
  })
  .then(() => {
    return knex(REF_TABLE.GRADES).insert([
      {description: "SD/MI - Kelas 1"},
      {description: "SD/MI - Kelas 2"},
      {description: "SD/MI - Kelas 3"},
      {description: "SD/MI - Kelas 4"},
      {description: "SD/MI - Kelas 5"},
      {description: "SD/MI - Kelas 6"},
      {description: "SMP/MTS - Kelas 7"},
      {description: "SMP/MTS - Kelas 8"},
      {description: "SMP/MTS - Kelas 9"},
      {description: "SMA/SMK/MA - Kelas 10"},
      {description: "SMA/SMK/MA - Kelas 11"},
      {description: "SMA/SMK/MA - Kelas 12"},
      {description: "Mahasiswa Diploma/S1"},
      {description: "Mahasiswa S2/S3"},
      {description: "Umum"},
      {description: "Profesional"},
    ])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.GRADES);
};
