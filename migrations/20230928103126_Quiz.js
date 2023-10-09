const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.QUIZ, (T) => {
    T.uuid("id").primary();
    T.integer("quiz_title").notNullable();
    T.integer("quiz_description").unsigned().notNullable();
    T.integer("course_id").unsigned().notNullable();
    T.boolean("is_daily_quiz").defaultTo(false);
    T.boolean("is_active").defaultTo(true);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("course_id").references("id").inTable(REF_TABLE.COURSES);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.QUIZ);
};
