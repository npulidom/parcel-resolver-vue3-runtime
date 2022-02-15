/**
 * Index
 */

const path = require('path')
const { Resolver } = require('@parcel/plugin')

module.exports = new Resolver({

	async resolve({ specifier, options }) {

		if (specifier == 'vue' && process.env.NODE_ENV == 'production') {

			return {

				filePath: path.join(options.projectRoot, 'node_modules/vue/dist/vue.runtime.esm-browser.prod.js')
			}
		}

		return null
	}
})
