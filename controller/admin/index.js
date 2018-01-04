module.exports={
	index: async(ctx,next)=>{
		ctx.response.body = `<h1>admin page</h1>`
	}
}