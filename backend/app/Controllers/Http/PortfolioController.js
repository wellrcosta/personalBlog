'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Portfolio = use('App/Models/Portfolio');

class PortfolioController {
	async index({ request, response }) {
		const data = await Portfolio
			.query()
			.with('images')
			.fetch();

		return data;
	}

	async create({ auth, request }) {
		const { id } = auth.user;
		const data = request.only(['title', 'body']);

		const portfolio = await Portfolio.create({ ...data, user_id: id });

		return portfolio;
	}

	async show({ params }) {
		const portfolio = await Portfolio
			.query()
			.with('images')
			.fetch();

		return portfolio;
	}

	async destroy({ auth, params, response }) {
		const portfolio = await Portfolio.findOrFail(params.id);

		if (portfolio.user_id !== auth.user.id) {
			return response.status(401).send({ error: 'Not authorized' });
		}

		await portfolio.delete();
	}

	async update({ params, request }) {
		const portfolio = await Portfolio.findOrFail(params.id);

		const data = request.only(['title', 'body']);

		portfolio.merge(data);

		await portfolio.save();

		return portfolio;
	}
}

module.exports = PortfolioController;
