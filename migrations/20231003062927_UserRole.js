const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.USER_ROLES, (T) => {
    T.increments("id").primary();
    T.integer("user_id").unsigned().notNullable();
    T.integer("role_id").unsigned().notNullable();
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("user_id").references("id").inTable(REF_TABLE.USERS);
    T.foreign("role_id").references("id").inTable(REF_TABLE.ROLES);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.USER_ROLES);
};
