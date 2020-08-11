exports.up = function(knex) {
  return knex.schema.createTable("blogs", (table) => {
    table.increments("id");
    table.text("title").notNullable();
    table.text("contents");
    table.timestamp("timestamp").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {};
