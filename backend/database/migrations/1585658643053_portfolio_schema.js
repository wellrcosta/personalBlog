'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PortfolioSchema extends Schema {
	up() {
		this.create('portfolios', table => {
			table.increments();
			table
				.integer('user_id')
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')
				.notNullable();
			table.string('title').notNullable();
			table.string('body').notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('portfolios');
	}
}

module.exports = PortfolioSchema;
