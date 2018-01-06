
// const AdminIndexService = require('../../service/admin/manager')

module.exports={
	login: async(ctx,next)=>{
		await ctx.render("admin/login")
	}
}