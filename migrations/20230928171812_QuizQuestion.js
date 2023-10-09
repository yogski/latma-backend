const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.QUIZ_QUESTIONS, (T) => {
    T.increments("id").primary();
    T.uuid("quiz_id").notNullable();
    T.integer("question_no").notNullable();
    T.integer("question_type_id").unsigned().notNullable();
    T.integer("question_id").unsigned().notNullable();
    T.string("stringified_options").notNullable();
    T.string("stringified_answers").notNullable();
    T.integer("mark").unsigned().notNullable().defaultTo(0);
    T.boolean("is_daily_quiz").defaultTo(false);
    T.boolean("is_active").defaultTo(true);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("question_id").references("id").inTable(REF_TABLE.QUESTIONS);
    T.foreign("question_type_id").references("id").inTable(REF_TABLE.QUESTION_TYPE);
    T.foreign("quiz_id").references("id").inTable(REF_TABLE.QUIZ);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.QUIZ_QUESTIONS);
};
