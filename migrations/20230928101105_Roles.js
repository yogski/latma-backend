const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.ROLES, (T) => {
    T.increments("id").primary();
    T.string("role_name").unique();
    T.string("role_description");
    T.integer("min_authority_level").unsigned().defaultTo(1);
    T.boolean("is_active").defaultTo(true);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());
  })
  .then(() => {
    return knex(REF_TABLE.ROLES).insert([
      {role_name: "superadmin", role_description: "one admin above all", min_authority_level: 999},
      {role_name: "contentadmin", role_description: "can make content", min_authority_level: 200},
      {role_name: "generaluser", role_description: "can register, answer question", min_authority_level: 1},
    ])
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.ROLES)
};
