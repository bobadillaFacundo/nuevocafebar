
exports.up = async function(knex) {
	await knex.schema.createTable('users', table => {
		table.bigIncrements('id');
		// table.string('username').unique();
		table.string('username').unique();
		table.string('password');
		table.string('name');
		table.boolean('isAdmin').defaultTo(false);
		table.boolean('isActive').defaultTo(true);
		table.timestamp('createdAt').defaultTo(knex.fn.now());
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('users');
};
