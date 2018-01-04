const HomeIndexService = require('../../service/home/index')

module.exports = {
	index: async (ctx, next) => {
		let strData = HomeIndexService.index('123')
	 	await ctx.render("home/index")
	}
}