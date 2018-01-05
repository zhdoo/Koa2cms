const db=require('../../config/db.config').db

module.exports = {
	getSysInfo:() => {
		let users=db.get('users')
		users.insert({name:"12321312"})
	 	let usersInfo = users.find()
	 	return usersInfo
	}
}