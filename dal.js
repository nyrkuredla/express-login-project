const users = [
  {id: 1, name: "Steve Rogers", username: "CapnAmerica", password: "redwhiteblue"},
  {id: 2, name: "Tony Stark", username: "FeMale", password: "hahasciencejoke"},
]

function getUsers() {
  return users;
}

function getUserById(userId) {
  const singleUser = users.find(function (usr) {
    return user.id === number(usr.id);
  })
  console.log(singleUser);
  return singleUser;
}

function getUserByUsername(usrname) {
	const singleUser = users.find(function(usr) {
		return usrname === usr.username
	})
  console.log(singleUser);
	return singleUser;
}

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  getUserByUsername: getUserByUsername
}
