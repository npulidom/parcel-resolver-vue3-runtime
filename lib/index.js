/**
 * Index
 */

const { Resolver } = require('@parcel/plugin')

module.exports = new Resolver({

	async resolve({ specifier }) {

		console.log("specifier", specifier)

		return null
	}
})
