const authHeader = async () => {
	// return authorization header with jwt token
	let token = localStorage.getItem('token');
	if (token != null) {
		return token;
	}
	return null;
};

export default authHeader;
