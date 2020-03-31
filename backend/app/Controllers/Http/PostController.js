'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Posts = use('App/Models/Post');

class PostController {
	async index({ request, response }) {
		const data = await Posts.all();

		return data;
	}

	async create({ auth, request }) {
		const { id } = auth.user;
		const data = request.only(['title', 'body']);

		const post = await Posts.create({ ...data, user_id: id });

		return post;
	}

	async show({ params }) {
		const post = await Posts.findOrFail(params.id);

		return post;
	}

	async destroy({ auth, params, response }) {
		const post = await Posts.findOrFail(params.id);

		if (post.user_id !== auth.user.id) {
			return response.status(401).send({ error: 'Not authorized' });
		}

		await post.delete();
	}

	async update({ params, request }) {
		const post = await Posts.findOrFail(params.id);

		const data = request.only(['title', 'body']);

		post.merge(data);

		await post.save();

		return post;
	}
}

module.exports = PostController;
