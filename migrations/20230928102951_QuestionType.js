const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.QUESTION_TYPE, (T) => {
    T.increments("id").primary();
    T.string("text");
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());
  })
  .then(() => {
    return knex(REF_TABLE.QUESTION_TYPE).insert([
      {text: "Pilihan ganda, satu jawaban benar"},
      {text: "Pilihan ganda, setidaknya satu jawaban benar"},
    ])
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.QUESTION_TYPE);
};
