'use strict';

const Env = use('Env');
const Model = use('Model');

class Image extends Model {
	static get computed() {
		return ['url'];
	}

	getUrl({ path }) {
		return `${Env.get('APP_URL')}/images/${path}`;
	}

	portfolio () {
		return this.belongsTo('App/Models/Portfolio')
	}
}

module.exports = Image;
