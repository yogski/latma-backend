const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.TAGS, (T) => {
    T.increments("id").primary();
    T.string("tagname").notNullable().unique();
    T.float("popularity_index").defaultTo(0);
    T.timestamp("last_used").defaultTo(knex.fn.now());
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.TAGS);
};
