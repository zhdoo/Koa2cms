const db=require('../../config/db.config').db

module.exports = {
	getSysInfo: async () => {
		let users=db.get('article')
		await users.insert({name:"12321312"})
	 	let usersInfo = users.find()
	 	return usersInfo
	}
}