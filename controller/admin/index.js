
const AdminIndexService = require('../../service/admin/index')

module.exports={
	index: async(ctx,next)=>{
	
		if (ctx.path === '/favicon.ico') return;
		let n = ctx.session.userInfo || 0;
		if (n==0) {
		  // console.log(123)
		  	ctx.response.redirect('/login');
		}
		let userInfo = await AdminIndexService.getSysInfo()
		console.log(userInfo) 
		await ctx.render("admin/index")

	},
	main: async(ctx,next)=>{
		await ctx.render("admin/src/main",{'title':'kakakakakak'})
	}
}