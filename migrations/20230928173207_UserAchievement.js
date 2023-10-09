const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.USER_ACHIEVEMENTS, (T) => {
    T.increments("id").primary();
    T.integer("user_id").unsigned().notNullable();
    T.integer("achievement_id").unsigned().notNullable();
    T.timestamp("achieved_at").defaultTo(knex.fn.now());
    T.boolean("is_active").defaultTo(true);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("user_id").references("id").inTable(REF_TABLE.USERS);
    T.foreign("achievement_id").references("id").inTable(REF_TABLE.ACHIEVEMENTS);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.USER_ACHIEVEMENTS);
};
