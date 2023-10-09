const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.QUESTION_OPTIONS, (T) => {
    T.increments("id").primary();
    T.integer("question_id").unsigned().notNullable();
    T.string("value");
    T.text("explanation");
    T.boolean("is_multimedia_url").notNullable().defaultTo(false);
    T.string("multimedia_type");
    T.boolean("is_math_equation").notNullable().defaultTo(false);
    T.boolean("is_correct_option").notNullable().defaultTo(false);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.QUESTION_OPTIONS);
};
