const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.QUESTIONS, (T) => {
    T.increments("id").primary();
    T.string("title").notNullable();
    T.string("description").notNullable();
    T.smallint("difficulty").defaultTo(1);
    T.float("popularity_index").unsigned().defaultTo(0);
    T.boolean("is_reserved_for_daily_quiz").defaultTo(false);
    T.boolean("is_active").defaultTo(true);
    T.integer("course_id").unsigned().notNullable();
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
  return knex.schema.dropTable(REF_TABLE.QUESTIONS);
};
