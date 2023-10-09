const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.USER_TAKING_QUIZZES, (T) => {
    T.increments("id").primary();
    T.uuid("quiz_id").unsigned().notNullable();
    T.integer("user_id").unsigned().notNullable();
    T.smallint("score").unsigned().defaultTo(0);
    T.timestamp("started_at");
    T.timestamp("finished_at");
    T.timestamp("submitted_at");
    T.boolean("is_started").defaultTo(false);
    T.boolean("is_finished").defaultTo(false);
    T.boolean("is_submitted").defaultTo(false);
    T.boolean("is_checked").defaultTo(false);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("quiz_id").references("id").inTable(REF_TABLE.QUIZ);
    T.foreign("user_id").references("id").inTable(REF_TABLE.USERS);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.USER_TAKING_QUIZZES);
};
