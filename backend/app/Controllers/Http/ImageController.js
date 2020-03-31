'use strict';

const Image = use('App/Models/Image');
const Portfolio = use('App/Models/Portfolio');
const Helpers = use('Helpers');
/**
 * Resourceful controller for interacting with images
 */
class ImageController {
	async show({ params, response }) {
		return response.download(Helpers.tmpPath(`uploads/${params.path}`));
	}

	async listAll({ response }) {
		return Image.all();
	}

	async store({ params, request }) {
		const portfolio = await Portfolio.findOrFail(params.id);

		const image = request.file('image', {
			types: ['image'],
			size: '2mb'
		});
		await image.move(Helpers.tmpPath('uploads'), {
			name: `${Date.now()}-${portfolio.id}`
		});

		if (!image.moved()) {
			return image.errors();
		}

		await Image.create({
			portfolio_id: portfolio.id,
			path: `uploads/${Date.now()}-${portfolio.id}`
		});

		return 'File moved';
	}
}

module.exports = ImageController;
