const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.QUESTION_TAGS, (T) => {
    T.increments("id").primary();
    T.integer("question_id").unsigned().notNullable();
    T.integer("tag_id").unsigned().notNullable();
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("tag_id").references("id").inTable(REF_TABLE.TAGS);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.QUESTION_TAGS);
};
