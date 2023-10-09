const { REF_TABLE } = require("../helper/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(REF_TABLE.COURSES, (T) => {
    T.increments("id").primary();
    T.string("name");
    T.integer("grade_id").unsigned().notNullable();
    T.integer("category_id").unsigned().notNullable();
    T.boolean("is_active").defaultTo(true);
    T.timestamp("created_at").defaultTo(knex.fn.now());
    T.timestamp("updated_at").defaultTo(knex.fn.now());

    T.foreign("grade_id").references("id").inTable(REF_TABLE.GRADES);
    T.foreign("category_id").references("id").inTable(REF_TABLE.CATEGORIES);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(REF_TABLE.COURSES);
};
