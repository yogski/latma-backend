const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.USERS, (T) => {
    T.increments("id").primary();
    T.string("username").notNullable().unique().index();
    T.string("password_crypt").notNullable();
    T.string("email").notNullable();
    T.string("bio_description");
    T.string("status_updates");
    T.string("avatar_url");
    T.boolean("is_active").defaultTo(true);
    T.integer("user_score").unsigned().defaultTo(0);
    T.integer("authority_level").unsigned().defaultTo(1);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.USERS);
};
