
const AdminIndexService = require('../../service/admin/index')

module.exports={
	index: async(ctx,next)=>{
		await ctx.render("admin/index")
		let userInfo =  AdminIndexService.getSysInfo()
		console.log(userInfo)
		return

	},
	main: async(ctx,next)=>{
		await ctx.render("admin/src/main",{'title':'kakakakakak'})
	}
}